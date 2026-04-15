'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useModal } from '@/components/ContactForm/ModalContext';
import { Brain, MessageSquare, Zap, Database, ChevronRight, CheckCircle } from 'lucide-react';

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};
const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
};

const whatItIs = [
    'Autonomous AI agents that perform multi-step tasks without human intervention',
    'Multi-agent orchestration — specialized agents that work together toward a goal',
    'Tool-using AI that connects to your existing systems: CRM, calendar, email, ERP',
    'Natural language interfaces for staff to interact with your operations data',
    'Continuous operation — agents run 24/7, handling tasks while your team sleeps',
];

const howItWorks = [
    {
        step: '01',
        title: 'Workflow Mapping',
        description: 'We map every high-friction workflow in your operation — the tasks that consume staff time, create bottlenecks, or require constant human attention. These become candidates for agentic automation.',
    },
    {
        step: '02',
        title: 'Agent Architecture Design',
        description: 'We design a multi-agent system tailored to your workflows. Each agent has a specific role — one handles inbound calls, another updates the CRM, another schedules appointments — and they orchestrate together.',
    },
    {
        step: '03',
        title: 'Deploy, Train & Scale',
        description: 'We deploy the system, run it in parallel with your team to validate accuracy, then hand over control. Your team defines the rules; the agents execute — and we optimize based on real-world performance data.',
    },
];

const whoItsFor = [
    'HVAC, plumbing, and field service companies managing high call volume',
    'Logistics and fleet operations running manual dispatch workflows',
    'Real estate teams losing leads due to slow response times',
    'Professional services firms drowning in document processing',
    'Any operation with repetitive, rule-based workflows consuming staff time',
];

export default function AgenticContent() {
    const { openContactModal } = useModal();

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-black overflow-hidden pt-32 pb-24">
                <div className="noise opacity-20 fixed inset-0 pointer-events-none"></div>
                <div className="fixed top-0 right-0 w-[700px] h-[700px] rounded-full opacity-10 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(97,141,199,0.5), transparent 70%)' }}></div>

                {/* ── Hero ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
                        <motion.div variants={fadeUp}>
                            <span className="badge mb-6 inline-flex items-center">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#618DC7' }}></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#618DC7' }}></span>
                                </span>
                                Agentic AI Systems — DDW Studio
                            </span>
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-bold text-white font-display mb-8 tracking-tight leading-tight">
                            AI That Doesn't Just Assist.{' '}
                            <span className="bg-gradient-to-r from-[#618DC7] to-[#7CC6C6] bg-clip-text text-transparent">
                                AI That Acts.
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
                            Agentic AI systems that operate autonomously across your business workflows — handling dispatch, scheduling, customer communication, and data processing without constant human oversight.
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
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">Beyond Chatbots. Beyond Automation.</h2>
                        </motion.div>
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <motion.div variants={fadeUp} className="space-y-4">
                                {whatItIs.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 glass-card p-5 border border-white/5">
                                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#618DC7' }} />
                                        <p className="text-zinc-300 leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </motion.div>
                            <motion.div variants={fadeUp} className="glass-card p-10 border border-[#618DC7]/20">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(97,141,199,0.1)' }}>
                                        <Brain className="w-5 h-5" style={{ color: '#618DC7' }} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white font-display">Investment Range</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <p className="text-zinc-400 text-sm mb-1">Project Size</p>
                                        <p className="text-white font-bold text-xl">$25K–$150K+</p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <p className="text-zinc-400 text-sm mb-1">Timeline</p>
                                        <p className="text-white font-bold text-xl">8–16 weeks</p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <p className="text-zinc-400 text-sm mb-1">ROI Timeline</p>
                                        <p className="text-white font-bold text-xl">30–90 days</p>
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
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">From Discovery to Autonomous Operation</h2>
                        </motion.div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {howItWorks.map((step, i) => (
                                <motion.div key={i} variants={fadeUp}
                                    className="glass-card p-8 border border-[#618DC7]/20 hover:border-[#618DC7]/40 transition-all duration-300 group"
                                    whileHover={{ y: -4 }}>
                                    <div className="w-12 h-12 rounded-full border border-[#618DC7]/40 flex items-center justify-center mb-6"
                                        style={{ background: 'rgba(97,141,199,0.05)' }}>
                                        <span className="text-sm font-bold" style={{ color: '#618DC7' }}>{step.step}</span>
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
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">Agentic AI Is Right for You If...</h2>
                        </motion.div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                            {whoItsFor.map((item, i) => (
                                <motion.div key={i} variants={fadeUp}
                                    className="flex items-start gap-3 glass-card p-5 border border-white/5 hover:border-[#618DC7]/20 transition-all">
                                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#618DC7' }} />
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
                        style={{ border: '1px solid rgba(97,141,199,0.2)' }}>
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#618DC7] to-transparent opacity-50"></div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white font-display mb-6">
                            Ready to Deploy Your First AI Agent?
                        </h2>
                        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                            Book a free Discovery Call. We'll identify the highest-ROI agentic automation opportunity in your business and show you exactly what we'd build.
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
