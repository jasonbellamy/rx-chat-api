import express, { Router } from 'express';
import routes from './v1/';

export default function() {
  const router = Router();

  router.use('/api/v1', routes());

  router.use((req, res, next) => {
    res.status(404).send({ success: true });
  });

  return router;
}
