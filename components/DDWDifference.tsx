'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';

export default function DDWDifference() {
    const t = useTranslations('DDWDifference');
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    // Parallax for background glow
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const glowY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
    const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

    const trustSignals = [
        t('trust1'),
        t('trust2'),
        t('trust3'),
    ];

    return (
        <section ref={ref} className="w-full relative py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-accent-950/20 to-black pointer-events-none" />

            {/* Parallax glow orb */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none"
                style={{
                    y: glowY,
                    scale: glowScale,
                    background: 'radial-gradient(ellipse, rgba(97,141,199,0.08), transparent 70%)',
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: copy — clip-path reveal */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            className="badge mb-6 inline-flex"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                        >
                            {t('badge')}
                        </motion.div>

                        {/* H2 with clip-path reveal */}
                        <div className="overflow-hidden mb-8">
                            <motion.h2
                                className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
                                initial={{ clipPath: 'inset(0 0 100% 0)', y: 40 }}
                                animate={isInView ? { clipPath: 'inset(0 0 0% 0)', y: 0 } : {}}
                                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {t('h2Line1')}{' '}
                                <span className="text-gradient-vibrant">{t('h2Line2')}</span>
                            </motion.h2>
                        </div>

                        <motion.p
                            className="text-zinc-400 text-lg leading-relaxed mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            {t('body')}
                        </motion.p>

                        <motion.p
                            className="text-zinc-300 font-medium leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.45 }}
                        >
                            {t('detail')}
                        </motion.p>
                    </motion.div>

                    {/* Right: trust signals */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {trustSignals.map((signal, i) => (
                            <motion.div
                                key={i}
                                className="flex items-start gap-4 p-6 rounded-2xl group cursor-default"
                                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                                initial={{ opacity: 0, y: 24 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.55, delay: 0.25 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{
                                    background: 'rgba(97,141,199,0.06)',
                                    borderColor: 'rgba(97,141,199,0.2)',
                                    y: -3,
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <CheckCircle2
                                    className="w-5 h-5 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                                    style={{ color: '#618DC7' }}
                                    strokeWidth={2}
                                />
                                <p className="text-zinc-200 font-medium leading-snug">{signal}</p>
                            </motion.div>
                        ))}

                        {/* Stat highlight — pulse animation */}
                        <motion.div
                            className="p-6 rounded-2xl text-center relative overflow-hidden"
                            style={{ background: 'rgba(97,141,199,0.08)', border: '1px solid rgba(97,141,199,0.2)' }}
                            initial={{ opacity: 0, y: 24, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        >
                            {/* Shimmer sweep on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                style={{ background: 'linear-gradient(90deg, transparent, rgba(97,141,199,0.1), transparent)', backgroundSize: '200% 100%' }} />
                            <p className="text-5xl font-bold font-display text-gradient mb-2">7</p>
                            <p className="text-zinc-400 text-sm">{t('statLabel')}</p>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
