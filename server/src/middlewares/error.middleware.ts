import type { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export function notFound(req: Request, res: Response) { res.status(404).json({ success: false, message: `Không tìm thấy route ${req.method} ${req.path}` }); }
export const errorHandler: ErrorRequestHandler = (error: Error, _req: Request, res: Response, _next: NextFunction) => { void _next; console.error(error); res.status(500).json({ success: false, message: 'Đã xảy ra lỗi máy chủ.' }); };
