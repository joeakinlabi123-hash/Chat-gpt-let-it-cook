import { motion, useScroll, useTransform } from 'framer-motion';

export function FadeIn({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-12 max-w-4xl px-6 text-center lg:px-10">
      {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{title}</h2>
      {subtitle ? <p className="mx-auto mt-4 max-w-3xl text-lg text-slate">{subtitle}</p> : null}
    </div>
  );
}

export function ParallaxGlow({ reduceMotion }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '26%']);

  if (reduceMotion) {
    return <div className="pointer-events-none absolute inset-0 bg-noise" />;
  }

  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <motion.div style={{ y }} className="pointer-events-none absolute left-1/2 top-8 h-80 w-80 -translate-x-1/2 rounded-full bg-electric/20 blur-[120px]" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-16%']) }} className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-gold/15 blur-[110px]" />
    </>
  );
}
