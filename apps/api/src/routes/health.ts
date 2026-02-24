import { Hono } from 'hono';

const healthRoute = new Hono();

const AI_PRIMARY_URL = process.env.AI_PRIMARY_URL || 'http://192.168.0.208:11434';
const AI_FALLBACK_URL = process.env.AI_FALLBACK_URL || 'http://192.168.0.194:11434';

const CONNECT_TIMEOUT_MS = 2000;

async function checkNode(url: string): Promise<'up' | 'down'> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), CONNECT_TIMEOUT_MS);

    const response = await fetch(`${url}/api/tags`, {
      signal: controller.signal,
    });

    clearTimeout(timeout);
    return response.ok ? 'up' : 'down';
  } catch {
    return 'down';
  }
}

healthRoute.get('/health', async (c) => {
  const [primaryStatus, fallbackStatus] = await Promise.all([
    checkNode(AI_PRIMARY_URL),
    checkNode(AI_FALLBACK_URL),
  ]);

  let status: 'ok' | 'degraded' | 'down';
  if (primaryStatus === 'up') {
    status = 'ok';
  } else if (fallbackStatus === 'up') {
    status = 'degraded';
  } else {
    status = 'down';
  }

  const statusCode = status === 'down' ? 503 : 200;

  return c.json(
    {
      status,
      primary: { url: AI_PRIMARY_URL, status: primaryStatus },
      fallback: { url: AI_FALLBACK_URL, status: fallbackStatus },
    },
    statusCode
  );
});

export { healthRoute };
