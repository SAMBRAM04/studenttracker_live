import express from 'express';
import { configureApp } from '../project-api.js';
import { db } from '../database.js';

const app = express();
configureApp(app, db);

export default app;
