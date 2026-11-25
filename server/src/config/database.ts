import mongoose from 'mongoose';
import { env } from './env.js';

export async function connectDatabase() {
  if (!env.MONGODB_URI) {
    console.warn('[database] MONGODB_URI is not configured. Server is running with mock repositories.');
    return;
  }
  await mongoose.connect(env.MONGODB_URI);
  console.info('[database] MongoDB connected');
}
