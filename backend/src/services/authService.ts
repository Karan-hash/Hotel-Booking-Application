import jwt from 'jsonwebtoken';
import User from "../models/userModel";

export const registerUser = async (userData: any) => {
  const existingUser = await User.findOne({ email: userData.email });

  if (existingUser) {
    throw new Error('User already exists');
  }

  const user = new User(userData);
  await user.save();

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET_KEY as string,
    { expiresIn: '7d' }
  );

  return {
    message: 'User registered OK',
    token,
  };
};
