'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useModal } from '@/components/ContactForm/ModalContext';
import { Clock, Database, Users, FileText, CalendarCheck, RefreshCw, ChevronRight } from 'lucide-react';

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
        icon: Clock,
        title: '40% of Advisor Time Goes to Reporting',
        description: 'Your top advisors spend nearly half their week on client reporting, performance summaries, and portfolio updates — work that AI should be doing while they focus on relationships.',
    },
    {
        icon: Database,
        title: 'CRM Data Is Always Out of Date',
        description: 'Manual CRM updates get skipped during busy periods, leaving you with stale contact information, missed follow-ups, and gaps in client history that hurt relationship quality.',
    },
    {
        icon: Users,
        title: 'Meeting Prep Takes Hours',
        description: 'Compiling portfolio summaries, recent performance data, and client-specific insights before every meeting consumes time that should go to high-value client interactions.',
    },
];

const solutions = [
    {
        icon: FileText,
        title: 'Automated Client Reporting',
        description: 'AI generates personalized client reports — performance summaries, portfolio analysis, market commentary — automatically and on schedule. Advisors review, not create.',
    },
    {
        icon: CalendarCheck,
        title: 'AI Meeting Prep Agent',
        description: 'Before every client meeting, an AI agent compiles the client\'s portfolio status, recent performance, talking points, and recommended discussion topics — all ready to go.',
    },
    {
        icon: RefreshCw,
        title: 'Always-Current CRM',
        description: 'Automated CRM updates from emails, calls, and meetings ensure your client data is always accurate. Every interaction is logged, every follow-up is tracked.',
    },
];

const stats = [
    { number: '40%', label: 'Time Saved on Reports' },
    { number: '24/7', label: 'Client Portal Access' },
    { number: 'Automated', label: 'Meeting Prep' },
    { number: 'Always', label: 'CRM Up to Date' },
];

export default function WealthContent() {
    const { openContactModal } = useModal();

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-black overflow-hidden pt-32 pb-24">
                <div className="noise opacity-20 fixed inset-0 pointer-events-none"></div>
                <div className="fixed top-0 right-0 w-[700px] h-[700px] rounded-full opacity-10 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.3), transparent 70%)' }}></div>

                {/* ── Hero ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
                        <motion.div variants={fadeUp}>
                            <span className="badge mb-6 inline-flex items-center">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                Wealth Management — US National
                            </span>
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-bold text-white font-display mb-8 tracking-tight leading-tight">
                            Your Advisors Spend 40% of Their Time on Reporting{' '}
                            <span className="bg-gradient-to-r from-indigo-400 to-[#618DC7] bg-clip-text text-transparent">
                                That Should Write Itself.
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
                            Automated client reporting, meeting prep agents, and CRM automation — so your advisors spend time on relationships, not spreadsheets.
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
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">Where Advisor Capacity Gets Wasted</h2>
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
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">AI That Handles the Admin, Not the Advice</h2>
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
                            Give Your Advisors Back 40% of Their Time.
                        </h2>
                        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                            Book a free Discovery Call. We'll audit your current reporting and CRM workflow and show you exactly where automation delivers ROI.
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
