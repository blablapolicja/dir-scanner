import express from 'express';
import compression from 'compression';
import zlib from 'zlib';

import { validateQuery } from '../middlewares/validate-query';
import DirScanner from '../dir-scanner/dir-scanner';

const router = express.Router();
const dirScanner = new DirScanner();

router.get(
  '/',
  validateQuery, // Since there is no ID for a path I used query param to pass the path
  compression({ level: zlib.constants.Z_BEST_COMPRESSION }), // Can be useful for big amount of files. Not really useful otherwise
  async (req, res, next) => {
    try {
      const result = await dirScanner.scan(req.query.path as string);

      res.send(result);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
