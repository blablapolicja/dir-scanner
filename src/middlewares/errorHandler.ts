import type express from 'express';

export const errorHandler: express.ErrorRequestHandler = (err, _req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }

  console.error('Error handler is called with error', err);

  res.status(500)
  res.send({
    error: err.message,
  });
};
