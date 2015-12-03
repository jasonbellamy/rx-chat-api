import { Router } from 'express';
import { successResponse, errorResponse } from '../lib/responses';
import routes from './v1/';

export default function() {
  const router = Router();

  router.use('/api/v1', routes());

  router.use((req, res, next) => {
    res.status(404).json(errorResponse('not found'));
  });

  return router;
}
