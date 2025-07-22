import express from 'express';
import connectDB from './db/index.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

connectDB().then(() => {
  console.log('Database connected successfully');
}).catch(err => {
  console.error('Database connection failed:', err);
});

import userRoutes from './routes/user.route.js';
import instituteRoutes from './routes/institute.route.js';

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/institute', instituteRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});