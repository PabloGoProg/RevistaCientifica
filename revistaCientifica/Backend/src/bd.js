import pg from 'pg';
const { Pool } = pg;

export const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '',
    port: 5432,
    database: 'revistaUAM',
});
