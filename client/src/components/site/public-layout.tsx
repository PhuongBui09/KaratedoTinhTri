import { Outlet } from 'react-router-dom';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

export function PublicLayout() { return <div className="min-h-screen"><SiteHeader /><main><Outlet /></main><SiteFooter /></div>; }
