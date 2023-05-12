import { Router }  from 'express';
import {
    getTematicas,
    postTematicas,
    putTematicas,
    deleteTematicas
} from '../controllers/tematicas.controllers.js';

const router = Router();

router.get('/tematicas', getTematicas);
router.post('/tematicas', postTematicas);
router.put('/tematicas', putTematicas);
router.delete('/tematicas', deleteTematicas);

export default router;