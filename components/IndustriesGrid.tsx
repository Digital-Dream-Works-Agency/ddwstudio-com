// components/IndustriesGrid.tsx
// Homepage section — 9 industry verticals grid with scroll-triggered animations
// Translation paths: Industries.industries.{key}.name / .pain

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import {
    Truck,
    Thermometer,
    Building2,
    HardHat,
    Store,
    Anchor,
    Ship,
    TrendingUp,
    Briefcase,
    ArrowRight,
} from 'lucide-react';

const industries = [
    {
        key: 'logistics',
        slug: 'logistics',
        icon: Truck,
        color: 'from-blue-500 to-cyan-500',
        glow: 'rgba(59,130,246,0.25)',
        border: 'border-blue-500/20',
    },
    {
        key: 'hvac',
        slug: 'hvac',
        icon: Thermometer,
        color: 'from-orange-500 to-red-500',
        glow: 'rgba(249,115,22,0.25)',
        border: 'border-orange-500/20',
    },
    {
        key: 'realEstate',
        slug: 'real-estate',
        icon: Building2,
        color: 'from-emerald-500 to-teal-500',
        glow: 'rgba(16,185,129,0.25)',
        border: 'border-emerald-500/20',
    },
    {
        key: 'construction',
        slug: 'construction',
        icon: HardHat,
        color: 'from-yellow-500 to-amber-500',
        glow: 'rgba(234,179,8,0.25)',
        border: 'border-yellow-500/20',
    },
    {
        key: 'franchise',
        slug: 'franchise',
        icon: Store,
        color: 'from-violet-500 to-purple-500',
        glow: 'rgba(139,92,246,0.25)',
        border: 'border-violet-500/20',
    },
    {
        key: 'marine',
        slug: 'marine',
        icon: Anchor,
        color: 'from-sky-500 to-blue-600',
        glow: 'rgba(14,165,233,0.25)',
        border: 'border-sky-500/20',
    },
    {
        key: 'maritime',
        slug: 'maritime',
        icon: Ship,
        color: 'from-indigo-500 to-blue-500',
        glow: 'rgba(99,102,241,0.25)',
        border: 'border-indigo-500/20',
    },
    {
        key: 'wealthManagement',
        slug: 'wealth-management',
        icon: TrendingUp,
        color: 'from-green-500 to-emerald-400',
        glow: 'rgba(34,197,94,0.25)',
        border: 'border-green-500/20',
    },
    {
        key: 'professionalServices',
        slug: 'professional-services',
        icon: Briefcase,
        color: 'from-accent-400 to-accent-600',
        glow: 'rgba(97,141,199,0.25)',
        border: 'border-accent-400/20',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring' as const,
            stiffness: 80,
            damping: 20,
        },
    },
};

const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
};

export default function IndustriesGrid() {
    // Translation paths use 'Industries' namespace:
    // Industries.badge, Industries.h2, Industries.h2Highlight, Industries.subtitle
    // Industries.industries.{key}.name, Industries.industries.{key}.pain
    const t = useTranslations('Industries');
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section ref={sectionRef} className="w-full relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-900/10 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent-400/5 rounded-full blur-[180px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20"
                    variants={headerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <div className="badge mb-6">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {t('badge')}
                    </div>
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                        {t('h2')}{' '}
                        <span className="text-gradient">{t('h2Highlight')}</span>
                    </h2>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                        {t('subtitle')}
                    </p>
                </motion.div>

                {/* Industries Grid */}
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {industries.map((industry) => {
                        const Icon = industry.icon;
                        // JSON path: Industries.industries.{key}.name / .pain
                        const name = t(`industries.${industry.key}.name`);
                        const pain = t(`industries.${industry.key}.pain`);

                        return (
                            <motion.div key={industry.key} variants={cardVariants}>
                                <Link
                                    href={`/industries/${industry.slug}` as any}
                                    className={`group relative flex flex-col p-8 rounded-2xl bg-white/[0.03] border ${industry.border} hover:bg-white/[0.06] transition-all duration-500 overflow-hidden`}
                                    style={{ boxShadow: '0 0 0 0 transparent' }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${industry.glow}`;
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 0 transparent';
                                    }}
                                >
                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                        <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                                    </div>

                                    {/* Text */}
                                    <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-accent-300 transition-colors duration-300">
                                        {name}
                                    </h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed flex-1 group-hover:text-zinc-400 transition-colors duration-300">
                                        {pain}
                                    </p>

                                    {/* Arrow */}
                                    <div className="mt-6 flex items-center gap-2 text-accent-400 text-sm font-semibold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                        Explore
                                        <ArrowRight className="w-4 h-4" />
                                    </div>

                                    {/* Corner glow */}
                                    <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none`} />
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA Row */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <Link
                        href="/industries"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-accent-400/40 transition-all duration-300 group"
                    >
                        View All Industries
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
