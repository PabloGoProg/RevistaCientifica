import { Router }  from 'express';
import {
    getUsuariosById,
    buscarUsuario,
    postUsuarios,
    putUsuarios,
    deleteUsuarios
} from '../controllers/usuarios.controllers.js';

const router = Router();

router.get('/usuarios/:correo/:contrasena', buscarUsuario);
router.get('/usuarios/:id', getUsuariosById);
router.post('/usuarios/', postUsuarios);
router.put('/usuarios', putUsuarios);
router.delete('/usuarios/:id', deleteUsuarios);

export default router;
