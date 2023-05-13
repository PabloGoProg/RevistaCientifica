import { Router } from 'express';
import {
    getEditores,
    putEditores,
    deleteEditores
} from '../controllers/editores.controllers.js';

const router = Router();

router.get('/editores', getEditores);
router.put('/editores', putEditores);
router.delete('/editores', deleteEditores);

export default router;