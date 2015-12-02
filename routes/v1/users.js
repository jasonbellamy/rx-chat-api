import { Router } from 'express';
import User from '../../models/user';

export default function() {
  const router = Router();


  router.get('/', (req, res, next) => {
    res.status(200).send({ message: 'success' });
  });

  router.post('/', (req, res, next) => {
    const user = new User({
      username: req.body.username,
      password: req.body.password
    });

    user.save((err, user) => {
      if (err) { return res.status(500).send({ message: 'Validation failed' }); }
      res.status(201).send({ message: 'User created' });
    });
  });

  router.get('/:id', (req, res, next) => {
    res.status(200).send({ success: true, id: req.params.id });
  });

  router.put('/:id', (req, res, next) => {
    res.status(200).send({ success: true, id: req.params.id });
  });

  return router;
}
