'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useModal } from '@/components/ContactForm/ModalContext';
import { Database, CheckCircle, ChevronRight } from 'lucide-react';

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};
const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
};

const whatItIs = [
    'Custom-built ERP modules designed around your exact operational model',
    'No per-seat licensing fees or feature gates — you own the software',
    'AI capabilities built in: predictive analytics, automated workflows, smart alerts',
    'Native integration with your existing tools: QuickBooks, Salesforce, industry software',
    'Mobile-first design for field teams, drivers, and remote staff',
    'Built for Florida and Italian regulatory environments (US GAAP + Italian accounting standards)',
];

const howItWorks = [
    {
        step: '01',
        title: 'Deep Ops Discovery',
        description: 'We spend 2–4 weeks embedded in your operations — shadowing your team, mapping every workflow, and documenting exactly how information flows through your business today.',
    },
    {
        step: '02',
        title: 'Architecture & Prototype',
        description: 'We design the ERP architecture, build interactive prototypes, and validate the design with your team before writing a line of production code. You see what you\'re getting before we build it.',
    },
    {
        step: '03',
        title: 'Phased Build & Migration',
        description: 'We build in phases, migrating your data carefully and training your team at each phase. You\'re never left with a big-bang cutover that shuts down operations.',
    },
];

const whoItsFor = [
    'Logistics and fleet companies running outdated or generic dispatch software',
    'HVAC and field service operations needing job management + customer CRM in one place',
    'Construction and GC companies managing complex subcontractor and compliance workflows',
    'Italian businesses needing EU-compliant, Italian-language ERP with SDI integration',
    'Multi-location operations that have outgrown QuickBooks and Salesforce workarounds',
];

export default function ERPContent() {
    const { openContactModal } = useModal();

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-black overflow-hidden pt-32 pb-24">
                <div className="noise opacity-20 fixed inset-0 pointer-events-none"></div>
                <div className="fixed top-0 right-0 w-[700px] h-[700px] rounded-full opacity-10 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(124,198,198,0.4), transparent 70%)' }}></div>

                {/* ── Hero ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
                        <motion.div variants={fadeUp}>
                            <span className="badge mb-6 inline-flex items-center">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                                </span>
                                Custom ERP Systems — DDW Studio
                            </span>
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-bold text-white font-display mb-8 tracking-tight leading-tight">
                            Stop Fitting Your Business to Generic Software.{' '}
                            <span className="bg-gradient-to-r from-[#7CC6C6] to-[#618DC7] bg-clip-text text-transparent">
                                Build Software That Fits Your Business.
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
                            Industry-specific ERP platforms built for your exact operational model — not off-the-shelf software with a thousand features you'll never use and missing the one you actually need.
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
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">Your Business. Your Software.</h2>
                        </motion.div>
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <motion.div variants={fadeUp} className="space-y-4">
                                {whatItIs.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 glass-card p-5 border border-white/5">
                                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#7CC6C6' }} />
                                        <p className="text-zinc-300 leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </motion.div>
                            <motion.div variants={fadeUp} className="glass-card p-10 border border-[#7CC6C6]/20">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(124,198,198,0.1)' }}>
                                        <Database className="w-5 h-5" style={{ color: '#7CC6C6' }} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white font-display">Investment Range</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <p className="text-zinc-400 text-sm mb-1">Project Size</p>
                                        <p className="text-white font-bold text-xl">$40K–$200K+</p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <p className="text-zinc-400 text-sm mb-1">Timeline</p>
                                        <p className="text-white font-bold text-xl">12–24 weeks</p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <p className="text-zinc-400 text-sm mb-1">You Own</p>
                                        <p className="text-white font-bold text-xl">100% of the code</p>
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
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">Discovery to Production</h2>
                        </motion.div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {howItWorks.map((step, i) => (
                                <motion.div key={i} variants={fadeUp}
                                    className="glass-card p-8 border border-[#7CC6C6]/20 hover:border-[#7CC6C6]/40 transition-all duration-300"
                                    whileHover={{ y: -4 }}>
                                    <div className="w-12 h-12 rounded-full border border-[#7CC6C6]/40 flex items-center justify-center mb-6"
                                        style={{ background: 'rgba(124,198,198,0.05)' }}>
                                        <span className="text-sm font-bold" style={{ color: '#7CC6C6' }}>{step.step}</span>
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
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">Custom ERP Is Right If...</h2>
                        </motion.div>
                        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                            {whoItsFor.map((item, i) => (
                                <motion.div key={i} variants={fadeUp}
                                    className="flex items-start gap-3 glass-card p-5 border border-white/5 hover:border-[#7CC6C6]/20 transition-all">
                                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#7CC6C6' }} />
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
                        style={{ border: '1px solid rgba(124,198,198,0.2)' }}>
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7CC6C6] to-transparent opacity-50"></div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white font-display mb-6">
                            Ready to Own Your Operations Software?
                        </h2>
                        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                            Book a free Discovery Call. We'll map your current operations and show you exactly what a custom ERP would look like for your business.
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
