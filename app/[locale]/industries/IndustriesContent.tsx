'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useModal } from '@/components/ContactForm/ModalContext';
import {
    Truck, Thermometer, Building2, HardHat, Store, Anchor, Ship, TrendingUp, Briefcase,
    ChevronRight, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};
const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
};
const slideInLeft = {
    hidden: { x: -80, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 1 } }
};
const slideInRight = {
    hidden: { x: 80, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 1 } }
};

const usIndustries = [
    {
        slug: 'logistics',
        icon: Truck,
        name: 'Logistics & Fleet',
        market: 'US — Florida',
        painPoint: 'Dispatchers spend 60% of their day on manual tasks that should run automatically.',
        solution: 'Fleet-OS handles dispatch, routing, invoicing, and driver comms end-to-end.',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        glow: 'hover:border-blue-500/50 hover:shadow-blue-500/10',
    },
    {
        slug: 'hvac',
        icon: Thermometer,
        name: 'HVAC & Field Service',
        market: 'US — Florida',
        painPoint: '38% of HVAC calls go unanswered during peak season — that\'s $800–$2,400 lost per call.',
        solution: 'LYRA answers every call, books every job, and updates your CRM automatically.',
        color: 'text-orange-400',
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/20',
        glow: 'hover:border-orange-500/50 hover:shadow-orange-500/10',
    },
    {
        slug: 'real-estate',
        icon: Building2,
        name: 'Real Estate',
        market: 'US — Florida',
        painPoint: 'Leads go cold because nobody is following up fast enough.',
        solution: 'AI agent responds to every inquiry in under 60 seconds, qualifies leads, books showings.',
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
        glow: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
    },
    {
        slug: 'construction',
        icon: HardHat,
        name: 'Construction & GC',
        market: 'US — Florida',
        painPoint: 'General contractors lose $420K+ annually to payment disputes and missed compliance deadlines.',
        solution: 'Agentic system tracks payments, subcontractor relationships, and compliance docs.',
        color: 'text-yellow-400',
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/20',
        glow: 'hover:border-yellow-500/50 hover:shadow-yellow-500/10',
    },
    {
        slug: 'franchise',
        icon: Store,
        name: 'Franchise Operations',
        market: 'US — National',
        painPoint: '30 locations means 30 operational problems unless you automate the routine.',
        solution: 'One centralized agentic system that standardizes operations across every location.',
        color: 'text-purple-400',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/20',
        glow: 'hover:border-purple-500/50 hover:shadow-purple-500/10',
    },
    {
        slug: 'marine',
        icon: Anchor,
        name: 'Marine & Marina',
        market: 'US — Florida',
        painPoint: 'Florida boat owners don\'t tolerate bad service. Your booking system should match that standard.',
        solution: 'Agentic booking, service scheduling, parts inventory, and customer comms for marinas.',
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/20',
        glow: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
    },
    {
        slug: 'wealth-management',
        icon: TrendingUp,
        name: 'Wealth Management',
        market: 'US — National',
        painPoint: 'Advisors spend 40% of their time on reporting that should write itself.',
        solution: 'Automated client reporting, meeting prep agents, and CRM automation.',
        color: 'text-indigo-400',
        bg: 'bg-indigo-500/10',
        border: 'border-indigo-500/20',
        glow: 'hover:border-indigo-500/50 hover:shadow-indigo-500/10',
    },
];

const italyIndustries = [
    {
        slug: 'maritime',
        icon: Ship,
        name: 'Portuale & Marittimo',
        market: 'Italy',
        painPoint: 'I port italiani gestiscono milioni di tonnellate con software degli anni \'90.',
        solution: 'Sistemi AI per tracking cargo, documentazione doganale automatica e scheduling portuale.',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        glow: 'hover:border-blue-500/50 hover:shadow-blue-500/10',
    },
    {
        slug: 'professional-services',
        icon: Briefcase,
        name: 'Servizi Professionali',
        market: 'Italy',
        painPoint: 'I commercialisti italiani perdono settimane in pratiche burocratiche automatizzabili.',
        solution: 'Agenti AI per elaborazione documenti, comunicazione clienti e gestione scadenze fiscali.',
        color: 'text-rose-400',
        bg: 'bg-rose-500/10',
        border: 'border-rose-500/20',
        glow: 'hover:border-rose-500/50 hover:shadow-rose-500/10',
    },
];

function IndustryCard({ industry, index }: { industry: typeof usIndustries[0]; index: number }) {
    const Icon = industry.icon;
    return (
        <motion.div variants={fadeUp}>
            <Link href={`/industries/${industry.slug}`}>
                <motion.div
                    className={`glass-card p-8 h-full border ${industry.border} ${industry.glow} hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                    whileHover={{ y: -6, rotateX: 2, rotateY: 2 }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <div className="flex items-start justify-between mb-6">
                        <div className={`w-12 h-12 ${industry.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <Icon className={`w-6 h-6 ${industry.color}`} />
                        </div>
                        <span className="badge text-xs">{industry.market}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-[#618DC7] transition-colors">
                        {industry.name}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">{industry.painPoint}</p>
                    <div className={`h-px w-full bg-gradient-to-r from-transparent ${industry.bg} to-transparent mb-4`}></div>
                    <p className="text-zinc-300 text-sm leading-relaxed mb-6">{industry.solution}</p>
                    <div className={`flex items-center ${industry.color} text-sm font-medium group-hover:gap-2 transition-all`}>
                        <span>Explore Solutions</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
}

export default function IndustriesContent() {
    const { openContactModal } = useModal();

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-black overflow-hidden pt-32 pb-24">
                <div className="noise opacity-20 fixed inset-0 pointer-events-none"></div>

                {/* Orb backgrounds */}
                <div className="fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(97,141,199,0.4), transparent 70%)' }}></div>
                <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-8 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(7,35,75,0.6), transparent 70%)' }}></div>

                {/* ── Hero ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div variants={fadeUp}>
                            <span className="badge mb-6 inline-flex items-center">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#618DC7' }}></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#618DC7' }}></span>
                                </span>
                                Industries We Serve
                            </span>
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl font-bold text-white font-display mb-8 tracking-tight">
                            We Go Deep,{' '}
                            <span className="bg-gradient-to-r from-[#618DC7] to-[#7CC6C6] bg-clip-text text-transparent">
                                Not Wide
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl sm:text-2xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                            We specialize in a focused set of industries where operational complexity is high,
                            margins are tight, and AI can deliver measurable ROI in 30–90 days.
                        </motion.p>
                    </motion.div>
                </section>

                {/* ── US Industries Grid ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-24">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideInLeft}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <div className="h-px flex-1 bg-gradient-to-r from-[#618DC7]/50 to-transparent"></div>
                            <span className="badge px-4">🇺🇸 United States — Florida & National</span>
                            <div className="h-px flex-1 bg-gradient-to-l from-[#618DC7]/50 to-transparent"></div>
                        </div>
                        <p className="text-center text-zinc-500 text-sm mt-3">
                            Headquartered in Tampa, FL — serving Florida-based businesses and national franchise brands
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {usIndustries.map((industry, i) => (
                            <IndustryCard key={industry.slug} industry={industry} index={i} />
                        ))}
                    </motion.div>
                </section>

                {/* ── Italy Industries Grid ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideInRight}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <div className="h-px flex-1 bg-gradient-to-r from-[#07234B]/50 to-transparent"></div>
                            <span className="badge px-4">🇮🇹 Italy — Mercato Italiano</span>
                            <div className="h-px flex-1 bg-gradient-to-l from-[#07234B]/50 to-transparent"></div>
                        </div>
                        <p className="text-center text-zinc-500 text-sm mt-3">
                            DDW Studio sviluppa soluzioni AI per aziende italiane — in italiano, con conformità EU
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
                    >
                        {italyIndustries.map((industry, i) => (
                            <IndustryCard key={industry.slug} industry={industry} index={i} />
                        ))}
                    </motion.div>
                </section>

                {/* ── CTA Band ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="glass-card p-12 sm:p-20 text-center relative overflow-hidden group"
                        style={{ border: '1px solid rgba(97,141,199,0.2)' }}
                    >
                        <div className="absolute inset-0 opacity-5 pointer-events-none"
                            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(97,141,199,0.8), transparent 70%)' }}></div>
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#618DC7] to-transparent opacity-50"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display mb-6">
                                Ready to see what we'd build for your industry?
                            </h2>
                            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                                Every engagement starts with a free Discovery Call.
                                We'll map your operations, identify the highest-ROI automation opportunities,
                                and show you exactly what we'd build.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button
                                    onClick={openContactModal}
                                    className="btn-primary flex items-center gap-2 group"
                                >
                                    Book Discovery Call
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={openContactModal}
                                    className="btn-secondary"
                                >
                                    Talk to Sales
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}
