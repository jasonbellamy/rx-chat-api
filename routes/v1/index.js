import { Router } from 'express';
import authRoutes from './auth';
import usersRoutes from './users';

export default function() {
  const router = Router();

  router.get('/', (req, res, next) => {
    res.status(200).send({ success: true });
  });

  router.use('/auth', authRoutes());
  router.use('/users', usersRoutes());

  router.use((req, res, next) => {
    res.status(404).send({ success: true });
  });

  return router;
}
