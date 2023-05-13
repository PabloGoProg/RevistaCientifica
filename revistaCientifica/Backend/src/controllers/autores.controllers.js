import { pool } from '../bd.js';

export const getAutores = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM autores join usuarios on autores.id_usuario = usuarios.id_usuario');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json('Internal server error');
    }
};

export const getAutoresById = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM autores join usuarios on autores.id_usuario = usuarios.id_usuario WHERE autores.id_usuario = $1', [req.params.id]);
        res.json(result.rows);
    } catch (error) {
        res.status(500).json('Internal server error');
    }
};

export const deleteAutores = async (req, res) => res.send('delete autores');
