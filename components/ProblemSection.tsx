'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ProblemSection() {
    const t = useTranslations('Problem');
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    // Subtle parallax on the section background
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

    const lines: string[] = [
        t('lines.0'),
        t('lines.1'),
        t('lines.2'),
        t('lines.3'),
        t('lines.4'),
    ];

    return (
        <section ref={ref} className="w-full relative py-32 overflow-hidden">
            {/* Parallax background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/50 to-black pointer-events-none"
                style={{ y: bgY }}
            />
            <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Scan line effect */}
            {isInView && (
                <div
                    className="absolute top-0 left-0 w-[2px] h-full pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, transparent, #618DC7, transparent)',
                        animation: 'scan 3s ease-in-out 0.5s 1',
                    }}
                />
            )}

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Badge */}
                <motion.div
                    className="flex justify-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="badge">{t('badge')}</div>
                </motion.div>

                {/* H2 — clip-path reveal */}
                <div className="text-center mb-20 overflow-hidden">
                    <motion.h2
                        className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
                        initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0, y: 30 }}
                        animate={isInView ? { clipPath: 'inset(0 0 0% 0)', opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {t('h2Line1')}{' '}
                        <span className="text-gradient-vibrant">{t('h2Line2')}</span>
                    </motion.h2>
                </div>

                {/* Lines — staggered with left-slide + number glow */}
                <div className="space-y-0 mb-16">
                    {lines.map((line, i) => (
                        <motion.div
                            key={i}
                            className="relative flex items-start gap-4 py-5 border-b border-white/5 group"
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.55, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Hover accent line */}
                            <motion.div
                                className="absolute left-0 bottom-0 h-[1px] bg-accent-400/40"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                style={{ originX: 0 }}
                                transition={{ duration: 0.3 }}
                            />

                            <span className="text-zinc-700 font-mono text-sm mt-0.5 w-6 shrink-0 group-hover:text-accent-400 transition-colors duration-300">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <p className="text-xl sm:text-2xl text-zinc-300 font-medium leading-snug group-hover:text-white transition-colors duration-300">
                                {line}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Closing box — scale-in */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div
                        className="inline-block rounded-2xl px-8 py-6"
                        style={{ background: 'rgba(97,141,199,0.07)', border: '1px solid rgba(97,141,199,0.2)' }}
                    >
                        <p className="text-zinc-400 text-lg leading-relaxed mb-2">{t('closingLine1')}</p>
                        <p className="text-white text-xl font-semibold">{t('closingLine2')}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
