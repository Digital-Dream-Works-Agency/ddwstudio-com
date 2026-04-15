'use client';

import { motion } from 'framer-motion';
import { useModal } from '@/components/ContactForm/ModalContext';
import { DollarSign, Clock, FileWarning, CheckCircle, ChevronRight } from 'lucide-react';

const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ConstructionAILandingPage() {
    const { openContactModal } = useModal();

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            <div className="noise opacity-20 fixed inset-0 pointer-events-none"></div>
            <div className="fixed top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(234,179,8,0.4), transparent 70%)' }}></div>

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
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                            </span>
                            Construction AI — Florida
                        </span>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl font-bold font-display mb-6 leading-tight">
                        General Contractors Lose $420K+ Annually to
                        <span className="block bg-gradient-to-r from-yellow-400 to-[#618DC7] bg-clip-text text-transparent">
                            Payment Disputes and Missed Compliance Deadlines.
                        </span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        An agentic operations system that tracks payments, manages subcontractor relationships, and keeps compliance docs current — automatically.
                    </motion.p>
                    <motion.div variants={fadeUp}>
                        <button onClick={openContactModal} className="btn-primary text-lg px-10 py-5 flex items-center gap-2 mx-auto group">
                            Book a Free Discovery Call
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-zinc-500 text-sm mt-4">No commitment. We'll audit your subcontractor tracking and compliance process.</p>
                    </motion.div>
                </motion.div>
            </section>

            <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    <motion.h2 variants={fadeUp} className="text-3xl font-bold font-display text-center mb-12">Where GCs Bleed Money</motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: DollarSign, title: 'Payment Dispute Costs', desc: 'Subcontractor disputes cost GCs $420K+ annually on average in legal fees, project delays, and lost business relationships.' },
                            { icon: Clock, title: 'Missed Compliance Deadlines', desc: 'Missing permit renewals, insurance certifications, or safety docs can shut down a project mid-construction. Manual tracking fails.' },
                            { icon: FileWarning, title: 'Document Chaos', desc: 'Contracts, change orders, lien waivers, RFIs — disorganized documentation creates disputes worth hundreds of thousands.' },
                        ].map((pain, i) => {
                            const Icon = pain.icon;
                            return (
                                <motion.div key={i} variants={fadeUp} className="glass-card p-6 border border-red-500/20">
                                    <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                                        <Icon className="w-5 h-5 text-red-400" />
                                    </div>
                                    <h3 className="font-bold text-white mb-2">{pain.title}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{pain.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </section>

            <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    <motion.h2 variants={fadeUp} className="text-3xl font-bold font-display text-center mb-12">Agentic Ops for General Contractors</motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Automated Payment Tracking', desc: 'Track every payment, lien waiver, and conditional release automatically. Get alerts before disputes happen — not after.' },
                            { title: 'Compliance Automation', desc: 'Automated deadline tracking, document expiration alerts, and audit trails for every project. Zero missed deadlines guaranteed.' },
                            { title: 'Subcontractor Management', desc: 'Centralized tracking of subcontractor performance, compliance status, and communication history — all in one place.' },
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
                            { n: '$420K+', l: 'Saved Annually' },
                            { n: 'Zero', l: 'Missed Deadlines' },
                            { n: '80%', l: 'Faster Doc Processing' },
                            { n: 'Full', l: 'Compliance Audit Trail' },
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
                    <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Stop Losing $420K to Disputes and Missed Deadlines.</h2>
                    <p className="text-zinc-400 mb-8">Book a free Discovery Call. We'll audit your subcontractor and compliance tracking and show you exactly where the money is leaking.</p>
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
