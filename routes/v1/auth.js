import { Router } from 'express';
import User from '../../models/user';

export default function() {
  const router = Router();

  router.post('/login', (req, res, next) => {
    User.findOne({ username: req.body.username }, (err, user) => {

      if (err) {
        return res.status(401).send({ success: false, message: 'Authentication failed.' });
      }

      if (!user) {
        return res.status(401).send({ success: false, message: 'Authentication failed. User not found.' });
      }

      if (user.password !== req.body.password) {
        return res.status(401).send({ success: false, message: 'Authentication failed. Wrong password.' });
      }

      return res.status(200).send({ success: true, message: 'Authentication successful' });
    });
  });

  return router;
}
