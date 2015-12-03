import { Router } from 'express';
import { successResponse, errorResponse } from '../../lib/responses';
import User from '../../models/user';

export default function() {
  const router = Router();

  router.post('/login', (req, res, next) => {
    User.findOne({ username: req.body.username }, (err, user) => {

      if (err) {
        return res.status(401).json(errorResponse('Authentication failed'));
      }

      if (!user) {
        return res.status(401).json(errorResponse('Authentication failed. User not found'));
      }

      if (user.password !== req.body.password) {
        return res.status(401).json(errorResponse('Authentication failed. Wrong password'));
      }

      return res.status(200).json(successResponse('Authentication successful'));
    });
  });

  return router;
}
