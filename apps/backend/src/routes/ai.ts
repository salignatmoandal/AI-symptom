// --- AI routes --- //

import { Hono } from 'hono';
import { aiAnalyzeSymptoms } from '../services/ai';

const aiRoutes = new Hono();

aiRoutes.post('/analyze', async (c) => {
  const { symptoms } = await c.req.json();
  const result = await aiAnalyzeSymptoms(symptoms);
  return c.json(result);
});

export default aiRoutes;