import { Hono } from 'hono';
import { SymptomController } from '../controllers/symptomController';
import { authMiddleware } from '../middlewares/authMiddleware';

const symptomRoutes = new Hono();

symptomRoutes.post('/', authMiddleware, SymptomController.create);
symptomRoutes.get('/', authMiddleware, SymptomController.getAll);

export default symptomRoutes;