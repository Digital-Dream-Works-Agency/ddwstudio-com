'use client';

import { motion } from 'framer-motion';
import { useModal } from '@/components/ContactForm/ModalContext';
import { Clock, FileX, PhoneOff, CheckCircle, ChevronRight } from 'lucide-react';

const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function LogisticsAILandingPage() {
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
                            Logistics AI — Florida
                        </span>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl font-bold font-display mb-6 leading-tight">
                        Your Dispatchers Spend 60% of Their Day on
                        <span className="block bg-gradient-to-r from-[#618DC7] to-[#7CC6C6] bg-clip-text text-transparent">
                            Tasks That Should Run Automatically.
                        </span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Fleet-OS handles dispatch, routing, invoicing, and driver comms — so your team manages exceptions, not routine. 31% cost reduction in 90 days.
                    </motion.p>
                    <motion.div variants={fadeUp}>
                        <button onClick={openContactModal} className="btn-primary text-lg px-10 py-5 flex items-center gap-2 mx-auto group">
                            Book a Free Discovery Call
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-zinc-500 text-sm mt-4">No commitment. We'll map your dispatch workflow and identify exactly where automation delivers ROI.</p>
                    </motion.div>
                </motion.div>
            </section>

            <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    <motion.h2 variants={fadeUp} className="text-3xl font-bold font-display text-center mb-12">The Problems We Fix</motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Clock, title: 'Manual Dispatch Eating Hours', desc: 'Routing, status calls, driver coordination — your dispatchers are doing work that AI should handle automatically.' },
                            { icon: FileX, title: '28-Day Invoice Cycles', desc: 'Manual invoicing delays your cash flow by weeks. Your team is chasing paperwork instead of growing the business.' },
                            { icon: PhoneOff, title: 'Phone-Based Driver Comms', desc: 'Coordinating drivers via phone leads to errors, compliance gaps, and dispatchers who can\'t scale.' },
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
                    <motion.h2 variants={fadeUp} className="text-3xl font-bold font-display text-center mb-12">How Fleet-OS Solves It</motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Automated Dispatch & Routing', desc: 'Fleet-OS handles routing optimization, dispatch assignments, and real-time tracking — your team manages exceptions, not routine.' },
                            { title: 'Invoice in Days, Not Weeks', desc: 'Automated invoice generation, submission, and follow-up cuts your cycle from 28 days to under 4. Cash flows faster.' },
                            { title: 'Unified Driver Comms', desc: 'All driver communication in one dashboard — no phones, no missed messages, no compliance gaps.' },
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
                            { n: '31%', l: 'Cost Reduction' },
                            { n: '92%', l: 'Fewer Dispatch Errors' },
                            { n: '35%', l: 'Faster Deliveries' },
                            { n: '28→4', l: 'Day Invoice Cycle' },
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
                    <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
                        Ready to Free Up 60% of Your Dispatcher's Day?
                    </h2>
                    <p className="text-zinc-400 mb-8">Book a free Discovery Call. We'll map your current dispatch workflow and show you exactly where Fleet-OS delivers ROI.</p>
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
