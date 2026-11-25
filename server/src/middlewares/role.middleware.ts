import type { NextFunction, Response } from 'express';
import type { AuthenticatedRequest, Role } from '../types/auth.types.js';

export const requireRole = (...roles: Role[]) => (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  if (!req.user || !roles.includes(req.user.role)) return res.status(403).json({ success: false, message: 'Bạn không có quyền thực hiện thao tác này.' });
  return next();
};
