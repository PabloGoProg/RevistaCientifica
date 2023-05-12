import { Router } from 'express';
import {
    getArticulos,
    postArticulos,
    putArticulos,
    deleteArticulos
} from '../controllers/articulos.controllers.js';   

const router = Router();

router.get('/articulos', getArticulos);
router.post('/articulos', postArticulos);
router.put('/articulos', putArticulos);
router.delete('/articulos', deleteArticulos);

export default router;
