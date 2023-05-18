import {pool} from '../bd.js';

export const getSendArticles = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM articulos where editor_fk is null')
        res.json(result.rows);  
    } catch (error) {
        res.status(500).send(error)
    }        
}

export const getPostArticles = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM articulos where editor_fk is not null')
        res.json(result.rows);  
    } catch (error) {
        res.status(500).send(error)
    }        
}

export const getArticleById = async (req, res) => {
    try {
        const result = await pool.query('select * from articulos where id_articulo = $1', [req.params.id])
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({
            "message": "error al obtener el articulo por id"
        })    
    }
}


export const createArticle = async(req, res) => {
    const {editor_fk, titulo, resumen, ruta} = req.body;
    try {
        const result = await pool.query('INSERT INTO articulos (editor_fk, titulo, resumen, ruta) VALUES ($1, $2, $3, $4) RETURNING *', [editor_fk, titulo, resumen, ruta]);
        res.json(result.rows);   
    } catch (error) {
        res.status(500).json({"message": "error al crear el articulo"});
    }  
};

export const updateArticle = async (req, res) => {
    const {id} = req.body;
    const {editor_fk, titulo, resumen, ruta} = req.body;
    try {
        const result = await pool.query('UPDATE articulos SET editor_fk = COALESCE($1, editor_fk), titulo = COALESCE($2, titulo), resumen = COALESCE($3, resumen), ruta = COALESCE($4, ruta) WHERE id_articulo = $5', [editor_fk, titulo, resumen, ruta, req.params.id]);
        if (result.rowCount > 0) res.send(`articulo con id ${req.params.id} actualizado`);
        else res.send('achieved');
    } catch (error) {
        res.status(500).json({"message": "error al actualizar el articulo"});
    }
};

export const deleteEditorToArticle = async(req, res) =>{
    try {
        const result = await pool.query('UPDATE articulos SET editor_fk = null WHERE id_articulo = $1', [req.params.id]);
        if (result.rowCount > 0) res.send(`articulo con id ${req.params.id} actualizado`);
        else res.send('achieved');

    } catch (error) {
        console.log(error)
        res.status(500).json({"message": error});
    }
}

export const addEditorToArticle = async(req, res) =>{
    try {
        const result = await pool.query('UPDATE articulos SET editor_fk = $1 WHERE id_articulo = $2', [1, req.params.id]);
        if (result.rowCount > 0) res.send(`articulo con id ${req.params.id} actualizado`);
        else res.send('achieved');

    } catch (error) {
        console.log(error)
        res.status(500).json({"message": error});
    }
}

export const deleteArticle = async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM articulos WHERE id_articulo = $1', [req.params.id])
        if (result.rowCount > 0) res.send('articulo eliminado');
        else res.send('no se pudo eliminar el articulo')
    } catch (error) {
        res.status(500).json({
            "message": "error al eliminar el articulo"
        })    
    }
};