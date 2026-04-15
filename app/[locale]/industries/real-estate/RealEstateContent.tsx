'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useModal } from '@/components/ContactForm/ModalContext';
import { Timer, TrendingDown, UserX, Zap, CalendarCheck, Clock, ChevronRight } from 'lucide-react';

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};
const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
};

const painPoints = [
    {
        icon: Timer,
        title: 'Slow Lead Response Kills Conversions',
        description: 'Studies show 78% of buyers go with the first agent who responds. If your team takes hours to reply to an inquiry, that lead is gone — usually to a competitor.',
    },
    {
        icon: TrendingDown,
        title: 'Leads Going Cold in Your Pipeline',
        description: '40% of real estate leads require 5+ follow-ups but most agents stop after 1–2. Without automation, your pipeline fills with cold leads nobody is nurturing.',
    },
    {
        icon: UserX,
        title: 'Unqualified Showings Waste Agent Time',
        description: 'Agents spend hours driving to showings for unqualified buyers. Without pre-qualification automation, your team\'s time goes to tire-kickers, not buyers.',
    },
];

const solutions = [
    {
        icon: Zap,
        title: 'Sub-60-Second Lead Response',
        description: 'An AI agent responds to every inquiry in under 60 seconds — any time of day. It introduces your brand, collects key information, and keeps the lead warm until a human takes over.',
    },
    {
        icon: CalendarCheck,
        title: 'Automated Showing Booking',
        description: 'Qualified leads are automatically offered available showing times and booked directly into your calendar — no back-and-forth, no missed opportunities.',
    },
    {
        icon: Clock,
        title: '24/7 Lead Nurture Sequences',
        description: 'Multi-touch follow-up sequences that run automatically across email, SMS, and CRM — keeping every lead warm until they\'re ready to move forward.',
    },
];

const stats = [
    { number: '<60s', label: 'Lead Response Time' },
    { number: '3x', label: 'More Showings Booked' },
    { number: '40%', label: 'Reduction in Cold Leads' },
    { number: '24/7', label: 'Availability' },
];

export default function RealEstateContent() {
    const { openContactModal } = useModal();

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-black overflow-hidden pt-32 pb-24">
                <div className="noise opacity-20 fixed inset-0 pointer-events-none"></div>
                <div className="fixed top-0 right-0 w-[700px] h-[700px] rounded-full opacity-10 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.3), transparent 70%)' }}></div>

                {/* ── Hero ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
                        <motion.div variants={fadeUp}>
                            <span className="badge mb-6 inline-flex items-center">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                Real Estate — Florida
                            </span>
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-bold text-white font-display mb-8 tracking-tight leading-tight">
                            Your Leads Are Going Cold Because{' '}
                            <span className="bg-gradient-to-r from-emerald-400 to-[#618DC7] bg-clip-text text-transparent">
                                Nobody's Following Up Fast Enough.
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
                            An AI agent that responds to every inquiry in under 60 seconds, qualifies the lead, and books the showing — automatically.
                        </motion.p>
                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                            <button onClick={openContactModal} className="btn-primary flex items-center gap-2 group">
                                Book Discovery Call
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button onClick={openContactModal} className="btn-secondary">Talk to Sales</button>
                        </motion.div>
                    </motion.div>
                </section>

                {/* ── Pain Points ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <motion.div variants={fadeUp} className="text-center mb-16">
                            <span className="badge mb-4 inline-block">The Problem</span>
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">Why Real Estate Leads Go Cold</h2>
                        </motion.div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {painPoints.map((pain, i) => {
                                const Icon = pain.icon;
                                return (
                                    <motion.div key={i} variants={fadeUp}
                                        className="glass-card p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                                        <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                                            <Icon className="w-6 h-6 text-red-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white font-display mb-3">{pain.title}</h3>
                                        <p className="text-zinc-400 leading-relaxed text-sm">{pain.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </section>

                {/* ── Solutions ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <motion.div variants={fadeUp} className="text-center mb-16">
                            <span className="badge mb-4 inline-block">How We Solve It</span>
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">AI-Powered Lead Conversion</h2>
                        </motion.div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {solutions.map((sol, i) => {
                                const Icon = sol.icon;
                                return (
                                    <motion.div key={i} variants={fadeUp}
                                        className="glass-card p-8 border border-[#618DC7]/20 hover:border-[#618DC7]/50 hover:shadow-lg hover:shadow-[#618DC7]/10 transition-all duration-300 group"
                                        whileHover={{ y: -4 }}>
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                                            style={{ background: 'rgba(97,141,199,0.1)' }}>
                                            <Icon className="w-6 h-6" style={{ color: '#618DC7' }} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white font-display mb-3">{sol.title}</h3>
                                        <p className="text-zinc-400 leading-relaxed text-sm">{sol.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </section>

                {/* ── Stats ── */}
                <section className="relative z-10 border-y border-white/5 bg-white/[0.02] py-20 mb-32">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                        className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                            {stats.map((stat, i) => (
                                <motion.div key={i} variants={fadeUp} className="text-center">
                                    <p className="text-4xl sm:text-5xl font-bold font-display mb-2" style={{ color: '#618DC7' }}>{stat.number}</p>
                                    <p className="text-zinc-400 text-sm">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* ── CTA ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="glass-card p-12 sm:p-20 text-center relative overflow-hidden"
                        style={{ border: '1px solid rgba(97,141,199,0.2)' }}>
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#618DC7] to-transparent opacity-50"></div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white font-display mb-6">
                            Stop Losing Leads. Start Booking More Showings.
                        </h2>
                        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                            Book a free Discovery Call. We'll audit your lead response process and show you exactly how much revenue you're leaving on the table.
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
