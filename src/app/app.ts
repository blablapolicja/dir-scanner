import express from 'express';

import { errorHandler } from '../middlewares/errorHandler';
import pathsController from '../controller/paths-controller';

const app = express();

app.use(errorHandler);
app.use('/api/paths', pathsController);

export default app;
