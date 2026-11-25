import type { Request, Response } from 'express';

export function createMockResource(resourceName: string, initialData: unknown[]) {
  let records = [...initialData] as Array<Record<string, unknown>>;
  return {
    list: (_req: Request, res: Response) => res.json({ success: true, data: records, meta: { page: 1, limit: records.length, total: records.length, totalPages: 1 } }),
    get: (req: Request, res: Response) => { const record = records.find((item) => item.id === req.params.id); if (!record) return res.status(404).json({ success: false, message: `Không tìm thấy ${resourceName}.` }); return res.json({ success: true, data: record }); },
    create: (req: Request, res: Response) => { const record = { id: `${resourceName}-${Date.now()}`, ...req.body, createdAt: new Date().toISOString() }; records = [record, ...records]; return res.status(201).json({ success: true, data: record }); },
    update: (req: Request, res: Response) => { const index = records.findIndex((item) => item.id === req.params.id); if (index < 0) return res.status(404).json({ success: false, message: `Không tìm thấy ${resourceName}.` }); records[index] = { ...records[index], ...req.body, updatedAt: new Date().toISOString() }; return res.json({ success: true, data: records[index] }); },
    remove: (req: Request, res: Response) => { const before = records.length; records = records.filter((item) => item.id !== req.params.id); if (before === records.length) return res.status(404).json({ success: false, message: `Không tìm thấy ${resourceName}.` }); return res.status(204).send(); },
  };
}
