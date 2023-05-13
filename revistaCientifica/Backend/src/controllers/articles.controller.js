import {pool} from '../bd.js';

export const getArticles = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM articulos')
        res.json(result.rows);  
    } catch (error) {
        res.status(500).json({
            "message": "error al obtener los articulos"
        })
    }
};

export const getArticleById = async (req, res) => {
    try {
        const result = await pool.query('select * from articulos where id_articulo = $1', [req.params.id])
        console.log(result.rows[0])
        res.send('obteniendo articulos por id');
    } catch (error) {
        res.status(500).json({
            "message": "error al obtener el articulo por id"
        })    
    }
}


export const createArticle = async(req, res) => {
    const {editor_fk, titulo, resumen, ruta} = req.body;
    try {
        const result = await pool.query('INSERT INTO articulos (editor_fk, titulo, resumen, ruta) VALUES ($1, $2, $3, $4)', [editor_fk, titulo, resumen, ruta]);
        res.json(result);   
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