import type { Request, Response } from 'express';
import { mockPublicData } from '../data/mock-data.js';

export function getPublicSummary(_req: Request, res: Response) { return res.json({ success: true, data: mockPublicData }); }
export function getNews(_req: Request, res: Response) { return res.json({ success: true, data: mockPublicData.news }); }
export function getNewsBySlug(req: Request, res: Response) { const item = mockPublicData.news.find((news) => news.slug === req.params.slug); if (!item) return res.status(404).json({ success: false, message: 'Không tìm thấy bài viết.' }); return res.json({ success: true, data: item }); }
