// components/SolutionsSection.tsx
// Homepage section — 4 solution types with animated reveal and 3D card effects
// Translation paths: Solutions.solutions.{camelKey}.name / .description / .dealSize / .timeline / .cta

'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useModal } from './ContactForm/ModalContext';
import {
    Bot,
    Database,
    Zap,
    Code2,
    ArrowRight,
    Clock,
    DollarSign,
} from 'lucide-react';

const solutions = [
    {
        key: 'agenticAI',
        slug: 'agentic-ai',
        icon: Bot,
        gradient: 'from-accent-400 via-accent-500 to-accent-700',
        glow: 'rgba(97,141,199,0.3)',
        border: 'border-accent-400/25',
        featured: true,
    },
    {
        key: 'customSoftware',
        slug: 'custom-software',
        icon: Code2,
        gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
        glow: 'rgba(16,185,129,0.3)',
        border: 'border-emerald-500/25',
        featured: false,
    },
    {
        key: 'vibeCoding',
        slug: 'agentic-ai',
        icon: Zap,
        gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
        glow: 'rgba(139,92,246,0.3)',
        border: 'border-violet-500/25',
        featured: false,
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring' as const,
            stiffness: 70,
            damping: 18,
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

export default function SolutionsSection() {
    // Translation paths: Solutions.badge, Solutions.h2, Solutions.h2Highlight
    // Solutions.solutions.{key}.name / .description / .dealSize / .timeline / .cta
    const t = useTranslations('Solutions');
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { openContactModal } = useModal();

    return (
        <section ref={sectionRef} className="w-full relative py-32 overflow-hidden">
            {/* Backgrounds */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-accent-950/30 to-black pointer-events-none" />
            <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-accent-400/30 to-transparent" />

            <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20"
                    variants={headerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <div className="badge mb-6">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        {t('badge')}
                    </div>
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                        {t('h2')}{' '}
                        <span className="text-gradient-vibrant">{t('h2Highlight')}</span>
                    </h2>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                        No generic playbooks. Every engagement is scoped to your operation and built on our own AI infrastructure.
                    </p>
                </motion.div>

                {/* Solutions Grid */}
                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {solutions.map((solution, index) => {
                        const Icon = solution.icon;
                        const isHovered = hoveredIndex === index;

                        // JSON paths: Solutions.solutions.{key}.name / .description / .dealSize / .timeline / .cta
                        const name = t(`solutions.${solution.key}.name`);
                        const description = t(`solutions.${solution.key}.description`);
                        const dealSize = t(`solutions.${solution.key}.dealSize`);
                        const timeline = t(`solutions.${solution.key}.timeline`);

                        return (
                            <motion.div
                                key={solution.key}
                                variants={cardVariants}
                                className="relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Glow */}
                                <div
                                    className="absolute -inset-3 rounded-3xl blur-3xl transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: solution.glow,
                                        opacity: isHovered ? 0.4 : 0,
                                    }}
                                />

                                <div className={`relative glass-card p-8 rounded-2xl border ${solution.border} transition-all duration-500 h-full flex flex-col ${isHovered ? 'bg-white/[0.06]' : 'bg-white/[0.03]'}`}>
                                    {/* Featured pill */}
                                    {solution.featured && (
                                        <div className="absolute top-6 right-6">
                                            <span className="px-3 py-1 text-xs font-bold tracking-wider text-accent-300 bg-accent-400/10 border border-accent-400/20 rounded-full uppercase">
                                                Featured
                                            </span>
                                        </div>
                                    )}

                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-8 shadow-2xl transition-transform duration-500 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
                                        <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-2xl font-bold text-white font-display mb-4">
                                        {name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-zinc-400 leading-relaxed mb-8 flex-1">
                                        {description}
                                    </p>

                                    {/* Deal size + timeline chips */}
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-400 font-medium">
                                            <DollarSign className="w-3 h-3 text-accent-400" strokeWidth={2} />
                                            {dealSize}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-400 font-medium">
                                            <Clock className="w-3 h-3 text-accent-400" strokeWidth={2} />
                                            {timeline}
                                        </span>
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        href={`/solutions/${solution.slug}` as any}
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 group w-fit"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA Band */}
                <motion.div
                    className="mt-20 relative rounded-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-800 via-accent-700 to-accent-800" />
                    <div className="absolute inset-0 opacity-20 grid-pattern" />
                    <div className="relative px-10 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <p className="text-sm text-accent-300 font-semibold tracking-wider uppercase mb-2">
                                Fixed price · No scope creep
                            </p>
                            <h3 className="text-2xl font-bold text-white font-display">
                                Get a proposal in 48 hours.
                            </h3>
                        </div>
                        <button
                            onClick={openContactModal}
                            className="shrink-0 btn-primary px-8 py-4 text-base"
                        >
                            Book a Discovery Call
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
