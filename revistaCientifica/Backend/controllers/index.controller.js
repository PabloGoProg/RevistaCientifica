import { pool } from '../db.js'

export const ping = async (req, res) => {
    const result = await pool.query('SELECT 5+5 as result')
    res.json(result.rows[0].result)    
}