import { Router } from 'express';
import { successResponse, errorResponse } from '../../lib/responses';
import authenticate from '../../middlewares/authenticate';
import User from '../../models/user';

export default function() {
  const router = Router();

  router.get('/', authenticate, (req, res, next) => {
    res.status(200).json(successResponse('success'));
  });

  router.post('/', (req, res, next) => {
    const user = new User({
      username: req.body.username,
      password: req.body.password
    });

    user.save((err, user) => {
      if (err) { return res.status(500).json(errorResponse('Validation failed')); }
      res.status(201).json(successResponse('User created'));
    });
  });

  router.get('/:id', authenticate, (req, res, next) => {
    res.status(200).json(successResponse('success', { id: req.params.id }));
  });

  router.put('/:id', authenticate, (req, res, next) => {
    res.status(200).json(successResponse('success', { id: req.params.id }));
  });

  return router;
}
