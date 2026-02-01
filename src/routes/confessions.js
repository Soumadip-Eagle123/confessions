import express from 'express';
import {
  submitConfession,
  requestIdentityReveal,
  acceptIdentityReveal,
  getAllConfessions
} from '../controllers/confessionController.js';

import { requireAuth } from '../middlewares/requireAuth.js';

const router = express.Router();

router.get('/', getAllConfessions);

router.post('/', requireAuth, submitConfession);
router.post('/:id/request-reveal', requireAuth, requestIdentityReveal);
router.patch('/:id/accept-reveal', requireAuth, acceptIdentityReveal);

export { router as confessionRouter };

