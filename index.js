import express from 'express';
import root, { hazardous } from './routes.js';

const app = express();

app.get('/', root);
app.get('/hazardous', hazardous);

app.listen(3001);
