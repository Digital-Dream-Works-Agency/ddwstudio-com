'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';

export default function DDWDifference() {
    const t = useTranslations('DDWDifference');
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const trustSignals = [
        t('trust1'),
        t('trust2'),
        t('trust3'),
    ];

    return (
        <section ref={ref} className="w-full relative py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-accent-950/20 to-black pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(97,141,199,0.06), transparent 70%)' }} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="badge mb-6 inline-flex">{t('badge')}</div>

                        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-8 leading-tight">
                            {t('h2Line1')}{' '}
                            <span className="text-gradient-vibrant">{t('h2Line2')}</span>
                        </h2>

                        <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                            {t('body')}
                        </p>

                        <p className="text-zinc-300 font-medium leading-relaxed">
                            {t('detail')}
                        </p>
                    </motion.div>

                    {/* Right: trust signals */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        {trustSignals.map((signal, i) => (
                            <motion.div
                                key={i}
                                className="flex items-start gap-4 p-6 rounded-2xl"
                                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                            >
                                <CheckCircle2
                                    className="w-5 h-5 shrink-0 mt-0.5"
                                    style={{ color: '#618DC7' }}
                                    strokeWidth={2}
                                />
                                <p className="text-zinc-200 font-medium leading-snug">{signal}</p>
                            </motion.div>
                        ))}

                        {/* Stat highlight */}
                        <motion.div
                            className="p-6 rounded-2xl text-center"
                            style={{ background: 'rgba(97,141,199,0.08)', border: '1px solid rgba(97,141,199,0.2)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <p className="text-5xl font-bold font-display text-gradient mb-2">7</p>
                            <p className="text-zinc-400 text-sm">Years. Florida & Rome. Our own platform.</p>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
