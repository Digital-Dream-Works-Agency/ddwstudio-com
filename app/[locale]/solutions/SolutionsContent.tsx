'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useModal } from '@/components/ContactForm/ModalContext';
import { Brain, Database, Zap, Code2, ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};
const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
};

const solutions = [
    {
        slug: 'agentic-ai',
        icon: Brain,
        name: 'Agentic AI Systems',
        description: 'Multi-agent AI systems that operate autonomously across your business workflows — dispatching, scheduling, communicating, and processing without human intervention.',
        dealSize: '$25K–$150K+',
        timeline: '8–16 weeks',
        accent: '#618DC7',
        accentBg: 'rgba(97,141,199,0.1)',
        border: 'border-[#618DC7]/20',
        hover: 'hover:border-[#618DC7]/50 hover:shadow-[#618DC7]/10',
        tag: 'Most Popular',
    },
    {
        slug: 'custom-erp',
        icon: Database,
        name: 'Custom ERP Systems',
        description: 'Industry-specific ERP platforms built for your exact operational model — not generic software you\'ll spend years customizing. Built for Florida and Italian markets.',
        dealSize: '$40K–$200K+',
        timeline: '12–24 weeks',
        accent: '#7CC6C6',
        accentBg: 'rgba(124,198,198,0.1)',
        border: 'border-[#7CC6C6]/20',
        hover: 'hover:border-[#7CC6C6]/50 hover:shadow-[#7CC6C6]/10',
        tag: 'Enterprise',
    },
    {
        slug: 'ai-automation',
        icon: Zap,
        name: 'AI Process Automation',
        description: 'Targeted automation of specific high-friction workflows — call answering, invoice processing, report generation, compliance tracking — with measurable ROI in 30 days.',
        dealSize: '$5K–$30K',
        timeline: '2–6 weeks',
        accent: '#63EF93',
        accentBg: 'rgba(99,239,147,0.1)',
        border: 'border-[#63EF93]/20',
        hover: 'hover:border-[#63EF93]/50 hover:shadow-[#63EF93]/10',
        tag: 'Fast ROI',
    },
    {
        slug: 'custom-software',
        icon: Code2,
        name: 'Custom Software Development',
        description: 'Full-stack web and mobile applications, client portals, internal tools, and SaaS products — built to enterprise quality standards with AI capabilities built in from day one.',
        dealSize: '$15K–$100K+',
        timeline: '6–20 weeks',
        accent: '#A78BFA',
        accentBg: 'rgba(167,139,250,0.1)',
        border: 'border-violet-500/20',
        hover: 'hover:border-violet-500/50 hover:shadow-violet-500/10',
        tag: 'Full Stack',
    },
];

export default function SolutionsContent() {
    const { openContactModal } = useModal();

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-black overflow-hidden pt-32 pb-24">
                <div className="noise opacity-20 fixed inset-0 pointer-events-none"></div>
                <div className="fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(97,141,199,0.4), transparent 70%)' }}></div>

                {/* ── Hero ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center max-w-4xl mx-auto">
                        <motion.div variants={fadeUp}>
                            <span className="badge mb-6 inline-flex items-center">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#618DC7' }}></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#618DC7' }}></span>
                                </span>
                                What We Build
                            </span>
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl font-bold text-white font-display mb-8 tracking-tight">
                            Four Solutions.{' '}
                            <span className="bg-gradient-to-r from-[#618DC7] to-[#7CC6C6] bg-clip-text text-transparent">
                                One Standard.
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl sm:text-2xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                            From targeted AI automation to full enterprise ERP systems — every engagement
                            is scoped to deliver measurable ROI and built to enterprise quality standards.
                        </motion.p>
                    </motion.div>
                </section>

                {/* ── Solutions Grid ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {solutions.map((sol) => {
                            const Icon = sol.icon;
                            return (
                                <motion.div key={sol.slug} variants={fadeUp}>
                                    <Link href={`/solutions/${sol.slug}`}>
                                        <motion.div
                                            className={`glass-card p-10 h-full border ${sol.border} ${sol.hover} hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden`}
                                            whileHover={{ y: -6, rotateX: 1, rotateY: 1 }}
                                            style={{ transformStyle: 'preserve-3d' }}
                                        >
                                            {sol.tag && (
                                                <div className="absolute top-6 right-6">
                                                    <span className="badge text-xs px-3 py-1">{sol.tag}</span>
                                                </div>
                                            )}
                                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform"
                                                style={{ background: sol.accentBg }}>
                                                <Icon className="w-7 h-7" style={{ color: sol.accent }} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white font-display mb-4 group-hover:text-[#618DC7] transition-colors">
                                                {sol.name}
                                            </h3>
                                            <p className="text-zinc-400 leading-relaxed mb-8">{sol.description}</p>
                                            <div className="grid grid-cols-2 gap-4 mb-8">
                                                <div className="bg-white/5 rounded-xl p-4">
                                                    <p className="text-xs text-zinc-500 mb-1">Deal Size</p>
                                                    <p className="text-white font-semibold text-sm">{sol.dealSize}</p>
                                                </div>
                                                <div className="bg-white/5 rounded-xl p-4">
                                                    <p className="text-xs text-zinc-500 mb-1">Timeline</p>
                                                    <p className="text-white font-semibold text-sm">{sol.timeline}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center text-sm font-medium group-hover:gap-2 transition-all" style={{ color: sol.accent }}>
                                                <span>Learn More</span>
                                                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </section>

                {/* ── Process Band ── */}
                <section className="relative z-10 border-y border-white/5 bg-white/[0.02] py-20 mb-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="text-center mb-16"
                        >
                            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white font-display">
                                Every Engagement Starts the Same Way
                            </motion.h2>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-4 gap-8"
                        >
                            {[
                                { step: '01', title: 'Discovery Call', desc: 'Free 45-minute call to map your operations and identify ROI opportunities.' },
                                { step: '02', title: 'Scoping & Proposal', desc: 'Detailed project scope, timeline, and fixed-price proposal. No surprises.' },
                                { step: '03', title: 'Build & Deploy', desc: 'Agile development with weekly demos. You see progress every week.' },
                                { step: '04', title: 'Support & Scale', desc: 'Ongoing support, optimization, and feature additions as your business grows.' },
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="text-center">
                                    <div className="w-12 h-12 rounded-full border border-[#618DC7]/30 flex items-center justify-center mx-auto mb-4"
                                        style={{ background: 'rgba(97,141,199,0.05)' }}>
                                        <span className="text-sm font-bold" style={{ color: '#618DC7' }}>{item.step}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white font-display mb-2">{item.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="glass-card p-12 sm:p-20 text-center relative overflow-hidden"
                        style={{ border: '1px solid rgba(97,141,199,0.2)' }}
                    >
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#618DC7] to-transparent opacity-50"></div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white font-display mb-6">
                            Not Sure Which Solution Fits?
                        </h2>
                        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                            Book a free Discovery Call. We'll listen to your operational challenges and recommend the right solution — without trying to oversell you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={openContactModal} className="btn-primary flex items-center gap-2 group">
                                Book Discovery Call
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button onClick={openContactModal} className="btn-secondary">Talk to Sales</button>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}
