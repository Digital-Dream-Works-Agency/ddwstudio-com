'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useModal } from '@/components/ContactForm/ModalContext';
import { Zap, CheckCircle, ChevronRight } from 'lucide-react';

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};
const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
};

const whatItIs = [
    'Targeted automation of specific, high-friction workflows — not full system overhauls',
    'LYRA AI receptionist: answers calls, qualifies leads, books appointments automatically',
    'Invoice processing automation: extract, validate, and post invoices without manual entry',
    'Report generation: automated weekly/monthly reports delivered to stakeholders',
    'Compliance tracking: monitor deadlines, generate alerts, and document completion',
    'CRM automation: log calls, update records, and trigger follow-up sequences automatically',
];

const howItWorks = [
    {
        step: '01',
        title: 'Workflow Audit',
        description: 'We identify 3–5 specific workflows that consume the most staff time or create the highest friction in your operation. These become the automation targets.',
    },
    {
        step: '02',
        title: 'Rapid Build',
        description: 'We build and deploy the automation in 2–6 weeks. Fast implementation means you start seeing ROI quickly — typically within 30 days of go-live.',
    },
    {
        step: '03',
        title: 'Measure & Optimize',
        description: 'We track the impact — time saved, errors reduced, revenue captured — and optimize the automation based on real performance data from your operations.',
    },
];

const whoItsFor = [
    'Businesses that want to test AI automation before committing to a full system build',
    'Operations with one clear bottleneck: missed calls, manual invoicing, slow reports',
    'Companies that need fast ROI — 30-day results, not 6-month projects',
    'Teams that want AI benefits without replacing their existing software stack',
];

export default function AutomationContent() {
    const { openContactModal } = useModal();

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-black overflow-hidden pt-32 pb-24">
                <div className="noise opacity-20 fixed inset-0 pointer-events-none"></div>
                <div className="fixed top-0 right-0 w-[700px] h-[700px] rounded-full opacity-10 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(99,239,147,0.3), transparent 70%)' }}></div>

                {/* ── Hero ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
                        <motion.div variants={fadeUp}>
                            <span className="badge mb-6 inline-flex items-center">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                AI Process Automation — DDW Studio
                            </span>
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-bold text-white font-display mb-8 tracking-tight leading-tight">
                            Fast ROI. No{' '}
                            <span className="bg-gradient-to-r from-[#63EF93] to-[#618DC7] bg-clip-text text-transparent">
                                Big-Bang Overhaul Required.
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
                            Targeted automation of your highest-friction workflows — call answering, invoice processing, report generation, compliance tracking — with measurable ROI in 30 days.
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

                {/* ── What It Is ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <motion.div variants={fadeUp} className="mb-12">
                            <span className="badge mb-4 inline-block">What It Is</span>
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">Precision Automation. Immediate Results.</h2>
                        </motion.div>
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <motion.div variants={fadeUp} className="space-y-4">
                                {whatItIs.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 glass-card p-5 border border-white/5">
                                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#63EF93' }} />
                                        <p className="text-zinc-300 leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </motion.div>
                            <motion.div variants={fadeUp} className="glass-card p-10 border border-[#63EF93]/20">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(99,239,147,0.1)' }}>
                                        <Zap className="w-5 h-5" style={{ color: '#63EF93' }} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white font-display">Investment Range</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <p className="text-zinc-400 text-sm mb-1">Project Size</p>
                                        <p className="text-white font-bold text-xl">$5K–$30K</p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <p className="text-zinc-400 text-sm mb-1">Timeline</p>
                                        <p className="text-white font-bold text-xl">2–6 weeks</p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <p className="text-zinc-400 text-sm mb-1">ROI Timeline</p>
                                        <p className="text-white font-bold text-xl">30 days avg.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                {/* ── How It Works ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <motion.div variants={fadeUp} className="text-center mb-16">
                            <span className="badge mb-4 inline-block">How It Works</span>
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">Audit → Build → Measure</h2>
                        </motion.div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {howItWorks.map((step, i) => (
                                <motion.div key={i} variants={fadeUp}
                                    className="glass-card p-8 border border-[#63EF93]/20 hover:border-[#63EF93]/40 transition-all duration-300"
                                    whileHover={{ y: -4 }}>
                                    <div className="w-12 h-12 rounded-full border border-[#63EF93]/40 flex items-center justify-center mb-6"
                                        style={{ background: 'rgba(99,239,147,0.05)' }}>
                                        <span className="text-sm font-bold" style={{ color: '#63EF93' }}>{step.step}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white font-display mb-3">{step.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed text-sm">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* ── Who It's For ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <motion.div variants={fadeUp} className="text-center mb-16">
                            <span className="badge mb-4 inline-block">Who It's For</span>
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">Start Here If...</h2>
                        </motion.div>
                        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                            {whoItsFor.map((item, i) => (
                                <motion.div key={i} variants={fadeUp}
                                    className="flex items-start gap-3 glass-card p-5 border border-white/5 hover:border-[#63EF93]/20 transition-all">
                                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#63EF93' }} />
                                    <p className="text-zinc-300 text-sm leading-relaxed">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* ── CTA ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="glass-card p-12 sm:p-20 text-center relative overflow-hidden"
                        style={{ border: '1px solid rgba(99,239,147,0.2)' }}>
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#63EF93] to-transparent opacity-50"></div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white font-display mb-6">
                            Ready to See ROI in 30 Days?
                        </h2>
                        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                            Book a free Discovery Call. We'll identify your highest-friction workflow and scope an automation project that delivers results fast.
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
