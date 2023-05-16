import pg from 'pg';
const { Pool } = pg;

export const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'ingjimmy0116',
    port: 5432,
    database: 'revista_uam',
});
