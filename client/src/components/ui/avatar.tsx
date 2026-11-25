import { cn } from '@/lib/utils';

export function Avatar({ src, alt, fallback, className }: { src?: string; alt: string; fallback: string; className?: string }) {
  return <div className={cn('flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10 text-sm font-bold text-primary', className)}>{src ? <img src={src} alt={alt} className="h-full w-full object-cover" /> : fallback}</div>;
}
