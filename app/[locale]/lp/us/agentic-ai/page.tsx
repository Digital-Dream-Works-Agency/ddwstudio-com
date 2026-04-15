'use client';

import { motion } from 'framer-motion';
import { useModal } from '@/components/ContactForm/ModalContext';
import { CheckCircle, ChevronRight, Brain } from 'lucide-react';

const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function AgenticAILandingPage() {
    const { openContactModal } = useModal();

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            <div className="noise opacity-20 fixed inset-0 pointer-events-none"></div>
            <div className="fixed top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(97,141,199,0.5), transparent 70%)' }}></div>

            <header className="relative z-20 px-6 py-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#618DC7' }}>
                        <span className="text-white font-bold text-sm">D</span>
                    </div>
                    <span className="text-white font-bold text-lg font-display">DDW Studio</span>
                </div>
            </header>

            <section className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-24 text-center">
                <motion.div initial="hidden" animate="visible" variants={stagger}>
                    <motion.div variants={fadeUp}>
                        <span className="badge mb-6 inline-flex items-center">
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#618DC7' }}></span>
                                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#618DC7' }}></span>
                            </span>
                            Agentic AI — US Businesses
                        </span>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl font-bold font-display mb-6 leading-tight">
                        Your Business Runs on Repetitive Tasks That
                        <span className="block bg-gradient-to-r from-[#618DC7] to-[#7CC6C6] bg-clip-text text-transparent">
                            AI Should Be Handling.
                        </span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        DDW Studio builds agentic AI systems that operate autonomously across your workflows — answering calls, dispatching jobs, processing invoices, and managing follow-up. Your team handles strategy, not admin.
                    </motion.p>
                    <motion.div variants={fadeUp}>
                        <button onClick={openContactModal} className="btn-primary text-lg px-10 py-5 flex items-center gap-2 mx-auto group">
                            Book a Free Discovery Call
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-zinc-500 text-sm mt-4">No commitment. Free 45-minute workflow audit.</p>
                    </motion.div>
                </motion.div>
            </section>

            <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    <motion.h2 variants={fadeUp} className="text-3xl font-bold font-display text-center mb-12">Where Agentic AI Delivers ROI</motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Missed Calls & Leads', desc: 'Every call that goes to voicemail or inquiry that goes unanswered costs you real revenue. AI agents capture 94%+ of inbound opportunities.' },
                            { title: 'Manual Dispatch & Routing', desc: 'Dispatchers spending 60% of their day on phone calls and routing decisions that an AI agent can handle automatically.' },
                            { title: 'Invoice & Document Processing', desc: 'Manual invoice processing, compliance doc management, and report generation that consumes staff hours every week.' },
                        ].map((pain, i) => (
                            <motion.div key={i} variants={fadeUp} className="glass-card p-6 border border-red-500/20">
                                <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                                    <Brain className="w-5 h-5 text-red-400" />
                                </div>
                                <h3 className="font-bold text-white mb-2">{pain.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">{pain.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    <motion.h2 variants={fadeUp} className="text-3xl font-bold font-display text-center mb-12">What We Build</motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'AI Voice Agents', desc: 'Answer calls, qualify leads, and book appointments 24/7 without a human dispatcher. LYRA captures 94% of inbound calls.' },
                            { title: 'Dispatch & Routing AI', desc: 'Fleet-OS handles automated dispatch, route optimization, and driver communications — freeing your team for high-value work.' },
                            { title: 'Document & Invoice Agents', desc: 'Automated invoice generation, compliance tracking, and document processing — no manual entry, no missed deadlines.' },
                        ].map((sol, i) => (
                            <motion.div key={i} variants={fadeUp} className="glass-card p-6 border border-[#618DC7]/20 hover:border-[#618DC7]/40 transition-all">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(97,141,199,0.1)' }}>
                                    <CheckCircle className="w-5 h-5" style={{ color: '#618DC7' }} />
                                </div>
                                <h3 className="font-bold text-white mb-2">{sol.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">{sol.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <section className="relative z-10 border-y border-white/5 bg-white/[0.02] py-16 mb-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {[
                            { n: '30 Days', l: 'Average ROI Timeline' },
                            { n: '94%', l: 'Call Capture Rate' },
                            { n: '31%', l: 'Avg. Cost Reduction' },
                            { n: '24/7', l: 'Autonomous Operation' },
                        ].map((s, i) => (
                            <motion.div key={i} variants={fadeUp}>
                                <p className="text-4xl font-bold font-display mb-1" style={{ color: '#618DC7' }}>{s.n}</p>
                                <p className="text-zinc-400 text-sm">{s.l}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <section className="relative z-10 max-w-3xl mx-auto px-6 pb-24 text-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Ready to Deploy Your First AI Agent?</h2>
                    <p className="text-zinc-400 mb-8">Book a free Discovery Call. We'll identify the highest-ROI agentic automation in your business and show you exactly what we'd build.</p>
                    <button onClick={openContactModal} className="btn-primary text-lg px-10 py-5 flex items-center gap-2 mx-auto group">
                        Book Your Free Discovery Call
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-zinc-600 text-sm mt-4">DDW Studio · Tampa, FL · ddwstudio.com</p>
                </motion.div>
            </section>

        </div>
    );
}
