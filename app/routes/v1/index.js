import { Router } from 'express';
import { successResponse, errorResponse } from '../../lib/responses';
import authRoutes from './auth';
import usersRoutes from './users';

export default function() {
  const router = Router();

  router.get('/', (req, res, next) => {
    res.status(200).json(successResponse('found'));
  });

  router.use('/auth', authRoutes());
  router.use('/users', usersRoutes());

  router.use((req, res, next) => {
    res.status(404).send(errorResponse('not found'));
  });

  return router;
}
