import express from 'express';
import autoresRoutes from './routes/autores.routes.js';
import editoresRoutes from './routes/editores.routes.js';
import tematicasRoutes from './routes/tematicas.routes.js';
import articlesRoutes from './routes/articles.routes.js';
import indexRoutes from './routes/index.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';
import { PORT, FILEPATH } from './config.js';
import { dirname, join, extname } from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import cors from 'cors';

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));
const MIMETYPES = ['application/pdf'];

const multerUpload = multer({
    storage: multer.diskStorage({
        destination: join(CURRENT_DIR, FILEPATH),
        filename: (req, file, cb) => {
            const fileExtension = extname(file.originalname);
            const fileName = file.originalname.split(fileExtension)[0];

            cb(null, `${fileName}${fileExtension}`);
        }
    }),
    fileFilter: (req, file, cb) => {
        if(MIMETYPES.includes(file.mimetype)) cb(null, true);
        else cb(new Error('Formato de archivo no válido'));
    },
    limits: {
        fileSize: 10000000,
    },
})


const app = express(); 

app.use(express.json());
app.use(cors());
app.use(autoresRoutes);
app.use(editoresRoutes);
app.use(tematicasRoutes);
app.use(usuariosRoutes);
app.use(express.static('src/docs'));

app.post('/api/docs', multerUpload.single('file'), (req, res) => {
    console.log(req.file);
    res.sendStatus(200);
});

app.use('/api', indexRoutes);
app.use('/api', articlesRoutes);
app.use((req, res, next) => {
    res.status(404).json({
        "message": "not found"
    })
});


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));