'use client';

import { motion } from 'framer-motion';
import { useModal } from '@/components/ContactForm/ModalContext';
import { PhoneOff, CalendarX, Bell, CheckCircle, ChevronRight } from 'lucide-react';

const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function HVACAILandingPage() {
    const { openContactModal } = useModal();

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            <div className="noise opacity-20 fixed inset-0 pointer-events-none"></div>
            <div className="fixed top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.5), transparent 70%)' }}></div>

            {/* Logo-only header */}
            <header className="relative z-20 px-6 py-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#618DC7' }}>
                        <span className="text-white font-bold text-sm">D</span>
                    </div>
                    <span className="text-white font-bold text-lg font-display">DDW Studio</span>
                </div>
            </header>

            {/* Hero */}
            <section className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-24 text-center">
                <motion.div initial="hidden" animate="visible" variants={stagger}>
                    <motion.div variants={fadeUp}>
                        <span className="badge mb-6 inline-flex items-center">
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                            </span>
                            HVAC AI — Florida
                        </span>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl font-bold font-display mb-6 leading-tight">
                        38% of HVAC Calls Go Unanswered.
                        <span className="block bg-gradient-to-r from-orange-400 to-[#618DC7] bg-clip-text text-transparent">
                            That's $800–$2,400 Lost Per Call.
                        </span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        LYRA answers every call, books every job, and updates your CRM — without you touching a phone. 94% call capture rate. ROI in 30 days.
                    </motion.p>
                    <motion.div variants={fadeUp}>
                        <button
                            onClick={openContactModal}
                            className="btn-primary text-lg px-10 py-5 flex items-center gap-2 mx-auto group"
                        >
                            Book a Free Discovery Call
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-zinc-500 text-sm mt-4">No commitment. 45-minute call. We'll audit your current call capture rate.</p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Pain Points */}
            <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    <motion.h2 variants={fadeUp} className="text-3xl font-bold font-display text-center mb-12">
                        Sound Familiar?
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: PhoneOff, title: 'Calls Going to Voicemail', desc: 'During peak season, your phones are ringing and nobody is answering. Every missed call is a job going to your competitor.' },
                            { icon: CalendarX, title: 'Scheduling Chaos', desc: '4–10 technicians, manual scheduling, double-bookings and routing gaps that kill daily revenue and frustrate customers.' },
                            { icon: Bell, title: 'Follow-Up Falling Through', desc: 'Customers who didn\'t book on the first call never hear from you again. Your pipeline leaks revenue every single day.' },
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

            {/* Solutions */}
            <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    <motion.h2 variants={fadeUp} className="text-3xl font-bold font-display text-center mb-12">
                        How LYRA Fixes It
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: '24/7 Call Answering', desc: 'LYRA answers every call, qualifies the job, and books the appointment — even at 2 AM during a summer AC emergency.' },
                            { title: 'Smart Scheduling', desc: 'AI optimizes your technician schedule in real-time — no double-bookings, no routing inefficiency, no manual calendar work.' },
                            { title: 'Automated Follow-Up', desc: 'Every unclosed lead gets a follow-up sequence. No manual effort. No leads slipping through the cracks.' },
                        ].map((sol, i) => (
                            <motion.div key={i} variants={fadeUp}
                                className="glass-card p-6 border border-[#618DC7]/20 hover:border-[#618DC7]/40 transition-all">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                                    style={{ background: 'rgba(97,141,199,0.1)' }}>
                                    <CheckCircle className="w-5 h-5" style={{ color: '#618DC7' }} />
                                </div>
                                <h3 className="font-bold text-white mb-2">{sol.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">{sol.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="relative z-10 border-y border-white/5 bg-white/[0.02] py-16 mb-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {[
                            { n: '94%', l: 'Call Capture Rate' },
                            { n: '3x', l: 'Jobs Booked/Dispatcher' },
                            { n: '30 Days', l: 'Avg. ROI Timeline' },
                            { n: '$799/mo', l: 'Starting Price' },
                        ].map((s, i) => (
                            <motion.div key={i} variants={fadeUp}>
                                <p className="text-4xl font-bold font-display mb-1" style={{ color: '#618DC7' }}>{s.n}</p>
                                <p className="text-zinc-400 text-sm">{s.l}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Bottom CTA */}
            <section className="relative z-10 max-w-3xl mx-auto px-6 pb-24 text-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
                        Stop Losing $800–$2,400 Every Time Your Phone Goes Unanswered.
                    </h2>
                    <p className="text-zinc-400 mb-8">
                        Book a free 45-minute Discovery Call. We'll audit your call capture rate and show you exactly how much revenue you're leaving on the table.
                    </p>
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
