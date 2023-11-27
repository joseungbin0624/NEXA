import dotenv from 'dotenv';

dotenv.config();

export const authConfig = {
  jwt: {
    secret: process.env.JWT_SECRET || 'your_default_secret',
    expiresIn: '1h',
    issuer: 'your_issuer',
    audience: 'your_audience',
  },
  // Additional authentication strategies can be configured here
};
