import { Context } from "hono";
import { aiAnalyzeSymptoms } from "../services/ai";

export class AIController {
  static async analyze(c: Context) {
    try {
      const { symptoms } = await c.req.json();
      const analysis = await aiAnalyzeSymptoms(symptoms);
      return c.json({ analysis });
    } catch (error: any) {
      return c.json({ error: error.message }, 400);
    }
  }
}