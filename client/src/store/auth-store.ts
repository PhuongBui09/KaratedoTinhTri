import { create } from 'zustand';
import type { Role } from '@/types';

interface SessionUser { id: string; name: string; email: string; role: Role; avatar?: string }
interface AuthState { user: SessionUser | null; isAuthenticated: boolean; setUser: (user: SessionUser) => void; logout: () => void }

export const useAuthStore = create<AuthState>((set) => ({
  user: { id: 'admin-1', name: 'Nguyễn Anh Tuấn', email: 'admin@tinhtri.vn', role: 'super_admin' },
  isAuthenticated: true,
  setUser: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));
