import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SectionHeading({ eyebrow, title, description, link, linkLabel = 'Xem tất cả' }: { eyebrow: string; title: string; description?: string; link?: string; linkLabel?: string }) {
  return <div className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end"><div className="max-w-2xl"><p className="eyebrow mb-3">{eyebrow}</p><h2 className="text-3xl font-bold leading-tight md:text-5xl">{title}</h2>{description && <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">{description}</p>}</div>{link && <Link to={link} className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-primary">{linkLabel}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>}</div>;
}
