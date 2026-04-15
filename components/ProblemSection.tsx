'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ProblemSection() {
    const t = useTranslations('Problem');
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const lines: string[] = [
        t('lines.0'),
        t('lines.1'),
        t('lines.2'),
        t('lines.3'),
        t('lines.4'),
    ];

    return (
        <section ref={ref} className="w-full relative py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/50 to-black pointer-events-none" />
            <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

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

                {/* H2 */}
                <motion.h2
                    className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    {t('h2Line1')}{' '}
                    <span className="text-gradient-vibrant">{t('h2Line2')}</span>
                </motion.h2>

                {/* Lines */}
                <div className="space-y-0 mb-16">
                    {lines.map((line, i) => (
                        <motion.div
                            key={i}
                            className="flex items-start gap-4 py-5 border-b border-white/5 group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                        >
                            <span className="text-zinc-700 font-mono text-sm mt-0.5 w-6 shrink-0 group-hover:text-accent-400 transition-colors">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <p className="text-xl sm:text-2xl text-zinc-300 font-medium leading-snug group-hover:text-white transition-colors">
                                {line}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Closing */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.8 }}
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
