import { pool } from '../bd.js';

export const getEditores = async (req, res) => res.send('get editores');

export const getEditoresByID = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM editores WHERE id_usuario = $1', [req.params.id]);
        res.json(result.rowCount);
    } catch (error) {
        res.status(500).json('Internal server error' + error);
    }
};

export const deleteEditores = async (req, res) => res.send('delete editores');