'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useModal } from '@/components/ContactForm/ModalContext';
import { Code2, CheckCircle, ChevronRight } from 'lucide-react';

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};
const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
};

const whatItIs = [
    'Full-stack web applications built with Next.js, React, and modern frameworks',
    'Mobile apps (iOS and Android) with native performance using React Native',
    'Client portals and internal tools that replace manual processes',
    'SaaS product development — from MVP to production-ready platform',
    'White-label software solutions for agencies and resellers',
    'AI capabilities built in from day one — not bolted on as an afterthought',
];

const howItWorks = [
    {
        step: '01',
        title: 'Product Discovery',
        description: 'We scope the product with you: user stories, feature prioritization, technology decisions, and a phased build plan that gets you to MVP fast without over-engineering.',
    },
    {
        step: '02',
        title: 'Agile Build',
        description: 'Weekly sprints with demo checkpoints. You see working software every week — not a big reveal after months of development. Scope changes are managed, not avoided.',
    },
    {
        step: '03',
        title: 'Launch & Support',
        description: 'We handle deployment, performance optimization, and ongoing feature development. You get enterprise-quality software with ongoing support from the team that built it.',
    },
];

const whoItsFor = [
    'Businesses that need a custom client portal or internal operations tool',
    'Entrepreneurs building a SaaS product and need a technical co-founder partner',
    'Agencies that need white-label software for their clients',
    'Operators who have outgrown no-code tools and need a real software solution',
    'Companies that want AI-native software, not retrofitted AI features',
];

export default function CustomSoftwareContent() {
    const { openContactModal } = useModal();

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-black overflow-hidden pt-32 pb-24">
                <div className="noise opacity-20 fixed inset-0 pointer-events-none"></div>
                <div className="fixed top-0 right-0 w-[700px] h-[700px] rounded-full opacity-10 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.3), transparent 70%)' }}></div>

                {/* ── Hero ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
                        <motion.div variants={fadeUp}>
                            <span className="badge mb-6 inline-flex items-center">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                                </span>
                                Custom Software Development — DDW Studio
                            </span>
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-bold text-white font-display mb-8 tracking-tight leading-tight">
                            Enterprise-Quality Software.{' '}
                            <span className="bg-gradient-to-r from-violet-400 to-[#618DC7] bg-clip-text text-transparent">
                                Built for the Way You Actually Operate.
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
                            Full-stack web and mobile applications, client portals, internal tools, and SaaS products — built to enterprise quality with AI capabilities built in from day one.
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
                            <span className="badge mb-4 inline-block">What We Build</span>
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">Full-Stack. AI-Native. Enterprise Quality.</h2>
                        </motion.div>
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <motion.div variants={fadeUp} className="space-y-4">
                                {whatItIs.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 glass-card p-5 border border-white/5">
                                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-violet-400" />
                                        <p className="text-zinc-300 leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </motion.div>
                            <motion.div variants={fadeUp} className="glass-card p-10 border border-violet-500/20">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-violet-500/10">
                                        <Code2 className="w-5 h-5 text-violet-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white font-display">Investment Range</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <p className="text-zinc-400 text-sm mb-1">Project Size</p>
                                        <p className="text-white font-bold text-xl">$15K–$100K+</p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <p className="text-zinc-400 text-sm mb-1">Timeline</p>
                                        <p className="text-white font-bold text-xl">6–20 weeks</p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <p className="text-zinc-400 text-sm mb-1">Ownership</p>
                                        <p className="text-white font-bold text-xl">Full IP transfer</p>
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
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">Idea to Production</h2>
                        </motion.div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {howItWorks.map((step, i) => (
                                <motion.div key={i} variants={fadeUp}
                                    className="glass-card p-8 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300"
                                    whileHover={{ y: -4 }}>
                                    <div className="w-12 h-12 rounded-full border border-violet-500/40 bg-violet-500/5 flex items-center justify-center mb-6">
                                        <span className="text-sm font-bold text-violet-400">{step.step}</span>
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
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">Custom Software Is Right If...</h2>
                        </motion.div>
                        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                            {whoItsFor.map((item, i) => (
                                <motion.div key={i} variants={fadeUp}
                                    className="flex items-start gap-3 glass-card p-5 border border-white/5 hover:border-violet-500/20 transition-all">
                                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-violet-400" />
                                    <p className="text-zinc-300 text-sm leading-relaxed">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* ── CTA ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="glass-card p-12 sm:p-20 text-center relative overflow-hidden border border-violet-500/20">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-50"></div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white font-display mb-6">
                            Have a Software Vision? Let's Build It.
                        </h2>
                        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                            Book a free Discovery Call. We'll scope your project, validate the approach, and give you a fixed-price proposal — no surprises.
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
