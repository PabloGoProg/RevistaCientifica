import { Router } from 'express';
import {
    getEditores,
    getEditoresByID,
    deleteEditores
} from '../controllers/editores.controllers.js'

const router = Router();

router.get('/editores', getEditores);
router.get('/editores/:id', getEditoresByID); 
router.delete('/editores', deleteEditores);

export default router;