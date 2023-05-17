import {Router} from 'express';
import { getSendArticles, getArticleById, createArticle, 
        updateArticle, deleteArticle, deleteEditorToArticle, addEditorToArticle, getPostArticles } from '../controllers/articles.controller.js';

const router = Router();

router.get('/sendArticles', getSendArticles);

router.get('/articles/:id', getArticleById);

router.get('/postArticles', getPostArticles);

router.post('/articles', createArticle);

router.patch('/articles/:id', updateArticle);

router.patch('/articles/deleteEditor/:id', deleteEditorToArticle)

router.patch('/articles/addEditor/:id', addEditorToArticle)

router.delete('/articles/:id', deleteArticle);


export default router;