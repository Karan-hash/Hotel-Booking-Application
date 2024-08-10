import { Request, Response, NextFunction } from 'express';
import { validationResult, check } from 'express-validator';

export const validateRegister = [
  check('firstName', 'First Name is required').isString(),
  check('lastName', 'Last Name is required').isString(),
  check('email', 'Email is required').isEmail(),
  check('password', 'Password with 6 or more characters required').isLength({ min: 6 }),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    next();
  },
];
