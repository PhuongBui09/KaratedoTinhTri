import { Router } from 'express';
import { createMockResource } from '../controllers/resource.controller.js';
import { getUploadSignature } from '../controllers/upload.controller.js';
import { requireAuth } from '../middlewares/auth.middleware.js';
import { requireRole } from '../middlewares/role.middleware.js';
import { mockPublicData } from '../data/mock-data.js';

const router = Router();
router.use(requireAuth);
const resources: Record<string, ReturnType<typeof createMockResource>> = {
  branches: createMockResource('branch', mockPublicData.branches),
  coaches: createMockResource('coach', mockPublicData.coaches),
  news: createMockResource('news', mockPublicData.news),
};

for (const [path, resource] of Object.entries(resources)) {
  const writeAccess = requireRole('super_admin', 'admin');
  router.get(`/${path}`, resource.list);
  router.get(`/${path}/:id`, resource.get);
  router.post(`/${path}`, writeAccess, resource.create);
  router.patch(`/${path}/:id`, writeAccess, resource.update);
  router.delete(`/${path}/:id`, writeAccess, resource.remove);
}

router.post('/uploads/signature', requireRole('super_admin', 'admin'), getUploadSignature);
export default router;
