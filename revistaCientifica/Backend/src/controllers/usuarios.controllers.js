import { pool } from '../bd.js';

// Busca un usuario según un id indicado
export const getUsuariosById = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios WHERE correo = $1', [req.params.id]);
        res.json(result.rows);
    } catch (error) {
        res.status(500).json('Internal server error');
    }
};

export const buscarUsuario = async (req, res) => {
    try {
        const correo = req.params.correo;
        const contrasena = req.params.contrasena;
        const result = await pool.query('SELECT * FROM usuarios WHERE correo = $1 AND contrasena = $2', [correo, contrasena]);
        res.json(result.rowCount);
    } catch (error) {
        res.status(500).json('Internal server error');
    }
}

// crea un usuario según a unn body indicado por el usuario
export const postUsuarios = async (req, res) => {
    try {
        const { nombre, apellido, correo, contrasena } = req.body;
        console.log(req.body)
        const values = [nombre, apellido, correo, contrasena];
        const result = await pool.query('INSERT INTO usuarios (nombre, apellido, correo, contrasena) VALUES ($1, $2, $3, $4)', values);
        res.json(result);
    } catch (error) {
        console.log(error)
        res.status(500).json('Internal server error');
    }
};   

export const putUsuarios = (req, res) => {
    try {
        res.send('put usuarios');
    } catch (error) {
        res.status(500).json('Internal server error');
    }
};

// Elemina un usuario según un id indicado
export const deleteUsuarios = async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM usuarios WHERE id_usuario = $1', [req.params.id]);
        res.json(result);
    } catch (error) {
        res.status(500).json('Internal server error');
    }
};