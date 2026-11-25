import { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Bell, BookOpen, Building2, CalendarDays, ChevronRight, CircleDollarSign, FileText, Image, LayoutDashboard, LogOut, Menu, Moon, ShieldCheck, Sun, UserRound, Users, X } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/store/auth-store';

const navGroups = [
  { label: 'Tổng quan', items: [{ label: 'Dashboard', to: '/admin', icon: LayoutDashboard }] },
  { label: 'Nội dung', items: [{ label: 'Bài viết', to: '/admin/bai-viet', icon: FileText }, { label: 'Danh mục', to: '/admin/danh-muc', icon: BookOpen }, { label: 'Album ảnh', to: '/admin/album-anh', icon: Image }] },
  { label: 'Võ đường', items: [{ label: 'Huấn luyện viên', to: '/admin/huan-luyen-vien', icon: ShieldCheck }, { label: 'Cơ sở', to: '/admin/co-so', icon: Building2 }, { label: 'Lịch học', to: '/admin/lich-hoc', icon: CalendarDays }, { label: 'Học phí', to: '/admin/hoc-phi', icon: CircleDollarSign }, { label: 'Học viên', to: '/admin/hoc-vien', icon: Users }] },
  { label: 'Hệ thống', items: [{ label: 'Tài khoản', to: '/admin/tai-khoan', icon: UserRound }] },
];

function Sidebar({ onClose }: { onClose?: () => void }) {
  return <aside className="flex h-full w-72 flex-col bg-foreground px-4 py-5 text-background"><div className="flex items-center justify-between px-3"><Link to="/" className="flex items-center gap-3" onClick={onClose}><span className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary text-sm font-black">TT</span><div className="text-xs font-extrabold tracking-[0.15em]">TỊNH TRÌ<br /><span className="font-medium tracking-normal text-background/50">Admin Console</span></div></Link>{onClose && <button onClick={onClose} className="text-background/60 lg:hidden"><X className="h-5 w-5" /></button>}</div><Separator className="my-6 bg-background/10" /> <div className="flex-1 space-y-7 overflow-y-auto">{navGroups.map((group) => <div key={group.label}><p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-background/35">{group.label}</p><nav className="space-y-1">{group.items.map(({ label, to, icon: Icon }) => <NavLink key={to} to={to} end={to === '/admin'} onClick={onClose} className={({ isActive }) => cn('flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-background/60 transition hover:bg-background/10 hover:text-background', isActive && 'bg-primary text-white shadow-lg shadow-primary/20')}><Icon className="h-4 w-4" />{label}</NavLink>)}</nav></div>)}</div><div className="mt-4 rounded-lg border border-background/10 bg-background/5 p-3 text-xs text-background/55"><p className="font-semibold text-background/80">Phiên bản nền tảng</p><p className="mt-1">v0.1 · Mock data enabled</p></div></aside>;
}

export function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem('tinhtri-theme') === 'dark');
  const location = useLocation();
  const { user, logout } = useAuthStore();
  const toggleTheme = () => { const next = !dark; setDark(next); document.documentElement.classList.toggle('dark', next); localStorage.setItem('tinhtri-theme', next ? 'dark' : 'light'); };
  const current = navGroups.flatMap((group) => group.items).find((item) => item.to === location.pathname)?.label ?? 'Dashboard';
  return <div className="min-h-screen bg-muted/30 lg:flex"><div className="fixed inset-y-0 left-0 z-50 hidden lg:block"><Sidebar /></div>{mobileOpen && <div className="fixed inset-0 z-50 lg:hidden"><div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} /><div className="relative h-full w-72"><Sidebar onClose={() => setMobileOpen(false)} /></div></div>}<div className="flex min-h-screen flex-1 flex-col lg:pl-72"><header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b bg-background/90 px-4 backdrop-blur md:px-8"><div className="flex items-center gap-3"><button className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Mở sidebar"><Menu className="h-5 w-5" /></button><div><div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex"><Link to="/admin">Admin</Link><ChevronRight className="h-3 w-3" /> <span>{current}</span></div><h1 className="text-lg font-bold md:text-xl">{current}</h1></div></div><div className="flex items-center gap-2"><Button variant="ghost" size="icon" aria-label="Thông báo"><Bell className="h-4 w-4" /></Button><Button variant="ghost" size="icon" aria-label="Đổi giao diện" onClick={toggleTheme}>{dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</Button><Separator orientation="vertical" className="mx-2 h-7" /><div className="hidden items-center gap-2 sm:flex"><Avatar alt={user?.name ?? ''} fallback="AT" className="h-8 w-8" /><div className="hidden text-right md:block"><p className="text-xs font-bold">{user?.name}</p><p className="text-[10px] capitalize text-muted-foreground">{user?.role.replace('_', ' ')}</p></div></div><Button variant="ghost" size="icon" onClick={logout} aria-label="Đăng xuất"><LogOut className="h-4 w-4" /></Button></div></header><main className="flex-1 p-4 md:p-8"><Outlet /></main></div></div>;
}
