import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { configureApp } from '../project-api.js';
import { db } from '../database.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const app = express();
app.use(express.static(publicDir));
configureApp(app, db);

app.get('/', (req, res) => {
  res.sendFile(join(publicDir, 'index.html'));
});

export default app;
