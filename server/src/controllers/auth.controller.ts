import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { env } from '../config/env.js';

const loginSchema = z.object({ email: z.string().email(), password: z.string().min(6) });

export function login(req: Request, res: Response) {
  const result = loginSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json({ success: false, message: 'Thông tin đăng nhập không hợp lệ.', issues: result.error.flatten() });
  const user = { id: 'admin-1', name: 'Nguyễn Anh Tuấn', email: result.data.email, role: 'super_admin' as const };
  const token = jwt.sign(user, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN as jwt.SignOptions['expiresIn'] });
  return res.json({ success: true, data: { user, token } });
}

export function me(req: Request, res: Response) { return res.json({ success: true, data: req.user }); }
