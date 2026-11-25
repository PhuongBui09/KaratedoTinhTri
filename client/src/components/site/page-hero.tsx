import { motion } from 'framer-motion';

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="relative overflow-hidden bg-foreground py-20 text-background md:py-28"><div className="grid-pattern absolute inset-0 opacity-60" /><div className="noise absolute inset-0" /><div className="container relative"><motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow text-primary">{eyebrow}</motion.p><motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-7xl">{title}</motion.h1><motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-6 max-w-2xl text-base leading-7 text-background/70 md:text-lg">{description}</motion.p></div></section>;
}
