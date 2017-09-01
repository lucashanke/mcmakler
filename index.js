import express from 'express';
import root from './routes/root.js';

const app = express();

app.get('/', root);

app.listen(3001);
