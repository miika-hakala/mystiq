import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { healthRoute } from './routes/health.js';
import { analyzeRoute } from './routes/analyze.js';

const app = new Hono();

app.route('/api', healthRoute);
app.route('/api', analyzeRoute);

const port = parseInt(process.env.PORT || '3000', 10);

serve({ fetch: app.fetch, port }, () => {
  console.log(`MystiQ API gateway running on port ${port}`);
});

export default app;
