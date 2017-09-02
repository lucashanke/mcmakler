import express from 'express';
import root, { hazardous, fastest, bestYear, bestMonth } from './routes.js';

const app = express();

app.get('/', root);
app.get('/neo/hazardous', hazardous);
app.get('/neo/fastest', fastest);
app.get('/neo/best-year', bestYear);
app.get('/neo/best-month', bestMonth);

app.listen(3001);
