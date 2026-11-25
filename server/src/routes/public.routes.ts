import { Router } from 'express';
import { getNews, getNewsBySlug, getPublicSummary } from '../controllers/public.controller.js';

const router = Router();
router.get('/summary', getPublicSummary);
router.get('/news', getNews);
router.get('/news/:slug', getNewsBySlug);
export default router;
