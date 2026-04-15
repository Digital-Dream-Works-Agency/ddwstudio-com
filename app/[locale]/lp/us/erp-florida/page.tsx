'use client';

import { motion } from 'framer-motion';
import { useModal } from '@/components/ContactForm/ModalContext';
import { CheckCircle, ChevronRight, Database } from 'lucide-react';

const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ERPFloridaLandingPage() {
    const { openContactModal } = useModal();

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            <div className="noise opacity-20 fixed inset-0 pointer-events-none"></div>
            <div className="fixed top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(124,198,198,0.4), transparent 70%)' }}></div>

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
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                            </span>
                            Custom ERP — Florida
                        </span>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl font-bold font-display mb-6 leading-tight">
                        Stop Bending Your Operations to Fit
                        <span className="block bg-gradient-to-r from-[#7CC6C6] to-[#618DC7] bg-clip-text text-transparent">
                            Software That Wasn't Built for You.
                        </span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        DDW Studio builds custom ERP systems for Florida businesses — designed around your exact operational model, with AI built in from day one. You own the code. No licensing fees.
                    </motion.p>
                    <motion.div variants={fadeUp}>
                        <button onClick={openContactModal} className="btn-primary text-lg px-10 py-5 flex items-center gap-2 mx-auto group">
                            Book a Free Discovery Call
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-zinc-500 text-sm mt-4">No commitment. We'll map your operations and scope the ERP at no cost.</p>
                    </motion.div>
                </motion.div>
            </section>

            <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    <motion.h2 variants={fadeUp} className="text-3xl font-bold font-display text-center mb-12">Why Generic ERP Fails Florida Operators</motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Built for Everyone = Built for No One', desc: 'Off-the-shelf ERPs have thousands of features you\'ll never use and are missing the workflows that actually matter to your operation.' },
                            { title: 'Per-Seat Licensing That Never Ends', desc: 'SaaS ERP costs compound every year as your team grows. Custom software is a one-time investment you own forever.' },
                            { title: 'AI Bolted On, Not Built In', desc: 'Generic ERPs add AI as an afterthought. Our custom ERPs are designed with AI automation as a core function from day one.' },
                        ].map((pain, i) => (
                            <motion.div key={i} variants={fadeUp} className="glass-card p-6 border border-red-500/20">
                                <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                                    <Database className="w-5 h-5 text-red-400" />
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
                    <motion.h2 variants={fadeUp} className="text-3xl font-bold font-display text-center mb-12">What You Get with DDW Custom ERP</motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Built Around Your Workflows', desc: 'Every module designed around how your business actually operates — not generic best practices that don\'t fit your industry.' },
                            { title: 'Full Code Ownership', desc: 'You own the software. No licensing fees, no feature gates, no vendor lock-in. Scale without paying per seat.' },
                            { title: 'AI Automation Built In', desc: 'Predictive analytics, automated workflows, smart alerts — AI capabilities integrated natively, not added as plugins.' },
                        ].map((sol, i) => (
                            <motion.div key={i} variants={fadeUp} className="glass-card p-6 border border-[#7CC6C6]/20 hover:border-[#7CC6C6]/40 transition-all">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(124,198,198,0.1)' }}>
                                    <CheckCircle className="w-5 h-5" style={{ color: '#7CC6C6' }} />
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
                            { n: '$40K–$200K', l: 'Project Range' },
                            { n: '100%', l: 'Code Ownership' },
                            { n: '12–24 wks', l: 'Build Timeline' },
                            { n: 'AI-Native', l: 'Architecture' },
                        ].map((s, i) => (
                            <motion.div key={i} variants={fadeUp}>
                                <p className="text-3xl font-bold font-display mb-1" style={{ color: '#7CC6C6' }}>{s.n}</p>
                                <p className="text-zinc-400 text-sm">{s.l}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <section className="relative z-10 max-w-3xl mx-auto px-6 pb-24 text-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Ready to Own Your Operations Software?</h2>
                    <p className="text-zinc-400 mb-8">Book a free Discovery Call. We'll map your current operations and show you what a custom ERP would look like for your business.</p>
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
