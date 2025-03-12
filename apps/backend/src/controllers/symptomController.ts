import { Context } from "hono";
import { SymptomService } from "../services/symptomService";

export class SymptomController {
  static async create(c: Context) {
    try {
      // Retrieve authenticated user data from middleware
      const user = c.get("user");
      const { details } = await c.req.json();
      const symptom = await SymptomService.create(user.userId, details);
      return c.json({ symptom });
    } catch (error: any) {
      return c.json({ error: error.message }, 400);
    }
  }

  static async getAll(c: Context) {
    try {
      const user = c.get("user");
      const symptoms = await SymptomService.getAll(user.userId);
      return c.json({ symptoms });
    } catch (error: any) {
      return c.json({ error: error.message }, 400);
    }
  }
}