import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PublicLayout } from '@/components/site/public-layout';
import { AdminLayout } from '@/components/admin/admin-layout';
import { HomePage } from '@/pages/public/home-page';
import { AboutPage } from '@/pages/public/about-page';
import { CoachesPage } from '@/pages/public/coaches-page';
import { BranchesPage } from '@/pages/public/branches-page';
import { NewsPage } from '@/pages/public/news-page';
import { NewsDetailPage } from '@/pages/public/news-detail-page';
import { GalleryPage } from '@/pages/public/gallery-page';
import { SchedulePage } from '@/pages/public/schedule-page';
import { TuitionPage } from '@/pages/public/tuition-page';
import { ContactPage } from '@/pages/public/contact-page';
import { LoginPage } from '@/pages/auth/login-page';
import { AdminOverviewPage } from '@/pages/admin/admin-overview-page';
import { AccountsPage, AlbumsAdminPage, BranchesAdminPage, CategoriesAdminPage, CoachesAdminPage, NewsAdminPage, ScheduleAdminPage, StudentsAdminPage, TuitionAdminPage } from '@/pages/admin/admin-resources';
import { ProtectedRoute } from '@/components/auth/route-guards';

export default function App() {
  return <BrowserRouter><Routes>
    <Route element={<PublicLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/gioi-thieu" element={<AboutPage />} />
      <Route path="/huan-luyen-vien" element={<CoachesPage />} />
      <Route path="/co-so" element={<BranchesPage />} />
      <Route path="/tin-tuc" element={<NewsPage />} />
      <Route path="/tin-tuc/:slug" element={<NewsDetailPage />} />
      <Route path="/thu-vien-anh" element={<GalleryPage />} />
      <Route path="/lich-hoc" element={<SchedulePage />} />
      <Route path="/hoc-phi" element={<TuitionPage />} />
      <Route path="/lien-he" element={<ContactPage />} />
    </Route>
    <Route path="/dang-nhap" element={<LoginPage />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<AdminOverviewPage />} />
      <Route path="tai-khoan" element={<AccountsPage />} />
      <Route path="huan-luyen-vien" element={<CoachesAdminPage />} />
      <Route path="co-so" element={<BranchesAdminPage />} />
      <Route path="bai-viet" element={<NewsAdminPage />} />
      <Route path="danh-muc" element={<CategoriesAdminPage />} />
      <Route path="album-anh" element={<AlbumsAdminPage />} />
      <Route path="lich-hoc" element={<ScheduleAdminPage />} />
      <Route path="hoc-phi" element={<TuitionAdminPage />} />
      <Route path="hoc-vien" element={<StudentsAdminPage />} />
      </Route>
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></BrowserRouter>;
}
