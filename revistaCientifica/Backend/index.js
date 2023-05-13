import express from 'express'; 
import articlesRoutes from './routes/articles.routes.js'
import indexRoutes from './routes/index.routes.js'
import cors from 'cors'


const app = express();
app.use(express.json());
app.use(cors())
app.use(express.static('src/docs'));
app.use('/api', indexRoutes);
app.use('/api', articlesRoutes);
app.use((req, res, next) => {
    res.status(404).json({
        "message": "not found"
    })
});

app.listen(3000, () => {console.log('Server is running on port 3000');});