import config from '../config';
import { errorResponse } from '../lib/responses';
import jwt from 'jsonwebtoken';

export default function(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    return jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(401).json(errorResponse('Failed to authenticate token'));
      }
      return next();
    });
  }

  return res.status(401).json(errorResponse('No token provided'));
}
