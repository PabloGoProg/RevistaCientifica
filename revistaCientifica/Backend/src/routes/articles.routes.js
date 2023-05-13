import {Router} from 'express';
import { getArticles, getArticleById, createArticle, updateArticle, deleteArticle } from '../controllers/articles.controller.js';

const router = Router();

router.get('/articles', getArticles);

router.get('/articles/:id', getArticleById);

router.post('/articles', createArticle);

router.patch('/articles/:id', updateArticle);

router.delete('/articles/:id', deleteArticle);


export default router;