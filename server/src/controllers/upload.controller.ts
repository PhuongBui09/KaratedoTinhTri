import type { Request, Response } from 'express';
import { cloudinary } from '../config/cloudinary.js';

export function getUploadSignature(_req: Request, res: Response) {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const secret = cloudinary.config().api_secret;
  const signature = secret ? cloudinary.utils.api_sign_request({ timestamp, folder: 'tinhtri' }, secret) : null;
  return res.json({ success: true, data: { timestamp, signature, folder: 'tinhtri', cloudName: cloudinary.config().cloud_name, apiKey: cloudinary.config().api_key, configured: Boolean(signature) } });
}
