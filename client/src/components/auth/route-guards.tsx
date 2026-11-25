import type { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import type { Role } from '@/types';
import { useAuthStore } from '@/store/auth-store';

/** Route guard stub: replace the mock session with an API session when auth is implemented. */
export function ProtectedRoute({ children }: { children?: ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  if (!isAuthenticated) return <Navigate to="/dang-nhap" replace />;
  return children ? <>{children}</> : <Outlet />;
}

/** Role guard stub for future module-level access control. */
export function RoleGuard({ allowedRoles, children }: { allowedRoles: Role[]; children?: ReactNode }) {
  const user = useAuthStore((state) => state.user);
  if (!user || !allowedRoles.includes(user.role)) return <Navigate to="/admin" replace />;
  return children ? <>{children}</> : <Outlet />;
}
