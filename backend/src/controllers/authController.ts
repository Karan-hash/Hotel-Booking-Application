import { Request, Response } from 'express';
import * as authService from '../services/authService';

export const register = async (req: Request, res: Response) => {
  try {
    const result = await authService.registerUser(req.body);

    // Destructure token from result (assuming authService.registerUser returns { token, message })
    const { token } = result;

    // Set cookie with auth_token
    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 86400000, // 24 hours
    });
    return res.status(201).send(result);
  } catch (error: any) {
    console.error(error);

    // Check if the error message indicates that the user already exists
    if (error.message === 'User already exists') {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Handle other errors
    res.status(500).send({ message: 'Something went wrong' });
  }
};
