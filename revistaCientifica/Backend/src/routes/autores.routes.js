import { Router } from "express";
import {
    getAutores,
    getAutoresById,
    deleteAutores
} from "../controllers/autores.controllers.js";

const router = Router();

router.get('/autores', getAutores);
router.get('/autores/:id', getAutoresById);
router.delete('/autores', deleteAutores);

export default router;
