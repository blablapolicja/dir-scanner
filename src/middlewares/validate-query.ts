import type express from 'express';

export const validateQuery: express.RequestHandler = (req, res, next) => {
  if (typeof req.query.path !== 'string' || req.query.path.length === 0) {
    res.status(400);
    res.send({
      error: '"path" parameter is not provided',
    });

    return;
  }

  next();
};
