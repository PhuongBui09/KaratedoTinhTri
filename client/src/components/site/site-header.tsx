import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const links = [{ label: 'Giới thiệu', to: '/gioi-thieu' }, { label: 'Huấn luyện viên', to: '/huan-luyen-vien' }, { label: 'Cơ sở', to: '/co-so' }, { label: 'Tin tức', to: '/tin-tuc' }, { label: 'Thư viện', to: '/thu-vien-anh' }];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-lg"><div className="container flex h-20 items-center justify-between"><Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}><span className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary font-black text-white">TT</span><span className="hidden text-xs font-extrabold leading-tight tracking-[0.14em] sm:block">VÕ ĐƯỜNG<br />TỊNH TRÌ</span></Link><nav className="hidden items-center gap-7 lg:flex">{links.map((link) => <NavLink key={link.to} to={link.to} className={({ isActive }) => `text-sm font-semibold transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>{link.label}</NavLink>)}</nav><div className="hidden items-center gap-3 lg:flex"><Link to="/lich-hoc" className="text-sm font-bold">Lịch học</Link><Button size="sm" onClick={() => { window.location.href = '/lien-he'; }}>Đăng ký tập <ArrowUpRight className="h-4 w-4" /></Button></div><button className="flex h-10 w-10 items-center justify-center rounded-md border lg:hidden" aria-label="Mở menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>{open && <div className="border-t bg-background px-5 pb-6 pt-3 lg:hidden"><nav className="flex flex-col gap-1">{links.concat([{ label: 'Lịch học', to: '/lich-hoc' }, { label: 'Học phí', to: '/hoc-phi' }, { label: 'Liên hệ', to: '/lien-he' }]).map((link) => <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className="border-b py-3 text-sm font-semibold">{link.label}</NavLink>)}</nav></div>}</header>;
}
