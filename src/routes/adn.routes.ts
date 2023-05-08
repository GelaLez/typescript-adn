import { Router } from 'express';
import { getStats, postMutation } from '../controllers/adn.controllers'

const router = Router();

router.get('/stats', getStats);
router.post('/mutation', postMutation);

export default router;
