import {config} from 'dotenv'

config();

export const FILEPATH = process.env.FILEPATH || './docs';
export const PORT = process.env.PORT || 3000;
export const DB_USER = process.env.DB_USER || 'postgres';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'ingjimmy0116';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || 5432;
export const DB_NAME = process.env.DB_NAME || 'revista_uam';

console.log(process.env.PORT);