import { Router } from 'express';
import { generate } from '../controllers/contentController';

const router = Router();

router.post('/generate', generate);

export default router;