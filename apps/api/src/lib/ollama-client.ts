const AI_PRIMARY_URL = process.env.AI_PRIMARY_URL || 'http://192.168.0.208:11434';
const AI_FALLBACK_URL = process.env.AI_FALLBACK_URL || 'http://192.168.0.194:11434';

const CONNECT_TIMEOUT_MS = 2000;
const TOTAL_TIMEOUT_MS = 15000;

export interface OllamaResponse {
  data: unknown;
  node: 'primary' | 'fallback';
}

async function callOllama(
  baseUrl: string,
  path: string,
  body: unknown,
  timeoutMs: number
): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(`${baseUrl}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    return response;
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Send a request to Ollama with automatic failover.
 *
 * - Tries primary (ai-1) first with connect timeout
 * - On failure, falls back to ai-2 (no retry on fallback)
 * - Total timeout: 15s to keep field mode responsive
 */
export async function sendWithFailover(
  path: string,
  body: unknown
): Promise<OllamaResponse> {
  // try primary
  try {
    const response = await callOllama(AI_PRIMARY_URL, path, body, CONNECT_TIMEOUT_MS);

    if (!response.ok) {
      throw new Error(`Primary returned ${response.status}`);
    }

    const data = await Promise.race([
      response.json(),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Primary total timeout')), TOTAL_TIMEOUT_MS)
      ),
    ]);

    return { data, node: 'primary' };
  } catch {
    // primary failed — try fallback (no retry on fallback)
  }

  // try fallback
  const response = await callOllama(AI_FALLBACK_URL, path, body, TOTAL_TIMEOUT_MS);

  if (!response.ok) {
    throw new Error(`Fallback returned ${response.status}`);
  }

  const data = await response.json();
  return { data, node: 'fallback' };
}
