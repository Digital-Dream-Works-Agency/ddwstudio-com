'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useModal } from '@/components/ContactForm/ModalContext';
import {
    ChevronRight, Phone, Truck, Users, FileText,
    CheckCircle2, ArrowRight, Zap, Clock, Shield,
    BarChart3, Calendar, BrainCircuit, Bot
} from 'lucide-react';

// ─── SaaS Products — shown as full showcase strips ───────────────────────────
const products = [
    {
        id: 'lyra',
        name: 'LYRA',
        tagline: 'AI Voice Receptionist',
        description: 'Every inbound call answered, qualified, and booked — 24/7. No hold music. No missed revenue. LYRA handles your phone line so your team handles the work.',
        market: 'US — HVAC, Marine, Field Services',
        accentColor: '#A78BFA',
        accentBg: 'rgba(167,139,250,0.08)',
        borderColor: 'rgba(167,139,250,0.25)',
        glowColor: 'rgba(167,139,250,0.15)',
        Icon: Phone,
        stats: [
            { value: '94%', label: 'Call capture rate' },
            { value: '3×', label: 'Jobs booked per dispatcher' },
            { value: '$2,400+', label: 'Monthly revenue recovered' },
        ],
        features: [
            { Icon: Phone, text: 'Answers every call in under 2 seconds' },
            { Icon: Calendar, text: 'Books appointments directly into your CRM' },
            { Icon: BrainCircuit, text: 'Qualifies leads — only routes real opportunities to your team' },
            { Icon: Clock, text: 'Runs 24/7 including nights, weekends, holidays' },
            { Icon: BarChart3, text: 'Full call analytics dashboard — know your conversion rate' },
        ],
        proof: '38% of HVAC & field service calls go unanswered during peak season — each worth $800–$2,400 in lost revenue. LYRA closes that gap entirely.',
        cta: 'Book a LYRA Demo',
        url: 'https://www.lyrabyddw.com',
    },
    {
        id: 'fleet-os',
        name: 'Fleet-OS',
        tagline: 'AI-Powered Fleet & Dispatch Platform',
        description: 'End manual routing, paper logs, and 28-day invoice cycles. Fleet-OS gives mid-size fleets a full dispatch OS with real-time tracking and automated billing.',
        market: 'US — Logistics, Trucking, Marine',
        accentColor: '#618DC7',
        accentBg: 'rgba(97,141,199,0.08)',
        borderColor: 'rgba(97,141,199,0.25)',
        glowColor: 'rgba(97,141,199,0.15)',
        Icon: Truck,
        stats: [
            { value: '31%', label: 'Cost reduction' },
            { value: '92%', label: 'Fewer dispatch errors' },
            { value: '4 days', label: 'Invoice cycle (was 28)' },
        ],
        features: [
            { Icon: Zap, text: 'AI routing optimization — fewer miles, faster deliveries' },
            { Icon: Phone, text: 'Automated driver comms via SMS/WhatsApp' },
            { Icon: FileText, text: 'Invoice automation — close jobs, bill automatically' },
            { Icon: BarChart3, text: 'Real-time fleet dashboard — every asset, every status' },
            { Icon: Shield, text: 'Compliance document management built in' },
        ],
        proof: 'Florida logistics companies were losing 60%+ of dispatcher time to manual routing and phone calls. Fleet-OS replaced that entirely.',
        cta: 'Book a Fleet-OS Demo',
        url: 'https://www.fleetosbyddw.com',
    },
    {
        id: 'hr-os',
        name: 'HR-OS',
        tagline: 'AI-Powered HR Operations Platform',
        description: 'Stop managing hiring, onboarding, and compliance in spreadsheets. HR-OS gives SMBs a full HR stack — from first application to day-90 — with zero legal exposure.',
        market: 'US — SMBs, Franchise Groups',
        accentColor: '#34D399',
        accentBg: 'rgba(52,211,153,0.08)',
        borderColor: 'rgba(52,211,153,0.25)',
        glowColor: 'rgba(52,211,153,0.15)',
        Icon: Users,
        stats: [
            { value: '60%', label: 'Faster time-to-hire' },
            { value: '100%', label: 'Compliance documentation' },
            { value: '0', label: 'Manual onboarding tasks' },
        ],
        features: [
            { Icon: Users, text: 'Applicant tracking with AI-assisted resume screening' },
            { Icon: CheckCircle2, text: 'Automated onboarding — offer → docs → day-1 checklist' },
            { Icon: Shield, text: 'Compliance documentation generated automatically' },
            { Icon: BarChart3, text: 'Employee lifecycle management in one dashboard' },
            { Icon: Bot, text: 'AI interview scheduling — no back-and-forth' },
        ],
        proof: 'SMBs were spending weeks per hire on manual processes across email and spreadsheets. HR-OS collapses that to days with zero compliance risk.',
        cta: 'Book an HR-OS Demo',
        url: null,
    },
];

// ─── Client Work & White Label case studies ───────────────────────────────────
const caseStudies = [
    {
        id: 'marina-booking',
        categoryLabel: 'Client Work',
        market: 'US — Florida',
        name: 'Tampa Bay Marina Group',
        tagline: 'Agentic Booking & Service Operations for Multi-Location Marina',
        problem: 'A 3-location Florida marina was managing slip reservations and service appointments via phone and paper — losing bookings and customers daily.',
        built: 'Custom agentic booking platform with real-time slip availability, automated service scheduling, parts inventory tracking, and SMS/email customer comms.',
        results: '94% booking capture | Zero double-bookings | 45% fewer inbound status calls',
        techStack: ['Next.js', 'Supabase', 'Twilio', 'OpenAI', 'Stripe'],
        accentColor: '#22D3EE',
        borderColor: 'rgba(34,211,238,0.2)',
        accentBg: 'rgba(34,211,238,0.08)',
    },
    {
        id: 'gc-ops',
        categoryLabel: 'Client Work',
        market: 'US — Florida',
        name: 'Suncoast GC Partners',
        tagline: 'Agentic Operations System for General Contractor',
        problem: 'A mid-size Tampa GC was losing $400K+ annually to subcontractor payment disputes and missed compliance deadlines across 12+ active projects.',
        built: 'Full agentic ops platform: subcontractor payment tracking, lien waiver automation, compliance deadlines, RFI tracking, and project-level financial dashboards.',
        results: '$400K+ annual savings | Zero compliance violations in 18 months | 80% faster document processing',
        techStack: ['Next.js', 'PostgreSQL', 'OpenAI', 'DocuSign', 'QuickBooks API'],
        accentColor: '#FBBF24',
        borderColor: 'rgba(251,191,36,0.2)',
        accentBg: 'rgba(251,191,36,0.08)',
    },
    {
        id: 'porto-tracking',
        categoryLabel: 'Client Work — Italy',
        market: 'Italy',
        name: 'Porto Operazioni AI',
        tagline: 'Real-Time Cargo Tracking & Port Operations Platform',
        problem: 'An Italian port operator was managing cargo and customs documentation with legacy software — creating delays and EU compliance risk.',
        built: 'Real-time cargo tracking with automated customs document generation, port scheduling optimization, and a unified EU-compliant dashboard.',
        results: 'Real-time cargo visibility | 80% faster document processing | Full EU compliance audit trail',
        techStack: ['Next.js', 'PostgreSQL', 'OpenAI', 'Python', 'REST APIs'],
        accentColor: '#60A5FA',
        borderColor: 'rgba(96,165,250,0.2)',
        accentBg: 'rgba(96,165,250,0.08)',
    },
    {
        id: 'wm-reporting',
        categoryLabel: 'Client Work',
        market: 'US — National',
        name: 'Apex Wealth Advisors',
        tagline: 'Automated Client Reporting & Meeting Prep for RIA Firm',
        problem: 'A 12-advisor RIA was spending 40% of advisor time on manual client report generation and meeting prep — time that belonged to clients.',
        built: 'AI-powered reporting engine, meeting prep agent, and CRM automation layer integrated with existing portfolio management systems.',
        results: '40% advisor time recovered | Automated briefs for 100% of client meetings | CRM always current',
        techStack: ['Next.js', 'OpenAI', 'Salesforce API', 'Python', 'PostgreSQL'],
        accentColor: '#818CF8',
        borderColor: 'rgba(129,140,248,0.2)',
        accentBg: 'rgba(129,140,248,0.08)',
    },
    {
        id: 'franchise-ops',
        categoryLabel: 'White Label',
        market: 'US — National',
        name: 'FranchiOS Platform',
        tagline: 'White-Label Franchise Operations Platform (45 Locations)',
        problem: 'A national franchise brand had no unified system — each location ran differently, compliance was tracked via email chains, corporate had zero visibility.',
        built: 'White-label multi-location platform with standardized process templates, real-time compliance dashboards, location analytics, and automated corporate reporting.',
        results: 'All 45 locations unified | 90% fewer ops escalations | Real-time visibility across all locations',
        techStack: ['Next.js', 'PostgreSQL', 'OpenAI', 'Vercel', 'Stripe'],
        accentColor: '#C084FC',
        borderColor: 'rgba(192,132,252,0.2)',
        accentBg: 'rgba(192,132,252,0.08)',
    },
];

const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, bounce: 0.2, duration: 0.8 } },
};
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Product Showcase Strip ───────────────────────────────────────────────────
function ProductStrip({ product, index }: { product: typeof products[0]; index: number }) {
    const { openContactModal } = useModal();
    const isReversed = index % 2 === 1;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="relative mb-6"
        >
            {/* Glow */}
            <div
                className="absolute -inset-4 rounded-3xl blur-3xl pointer-events-none opacity-40"
                style={{ background: `radial-gradient(ellipse, ${product.glowColor}, transparent 70%)` }}
            />

            <div
                className="relative rounded-2xl overflow-hidden"
                style={{ background: product.accentBg, border: `1px solid ${product.borderColor}` }}
            >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-px"
                    style={{ background: `linear-gradient(to right, transparent, ${product.accentColor}, transparent)` }} />

                <div className={`grid lg:grid-cols-2 gap-0`}>

                    {/* ── Left: Product identity + stats ── */}
                    <div className={`p-10 lg:p-14 flex flex-col justify-between ${isReversed ? 'lg:order-2' : ''}`}>
                        <div>
                            {/* Icon + name */}
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                                    style={{ background: `linear-gradient(135deg, ${product.accentColor}30, ${product.accentColor}10)`, border: `1px solid ${product.accentColor}40` }}
                                >
                                    <product.Icon className="w-7 h-7" style={{ color: product.accentColor }} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: product.accentColor }}>SaaS Product</p>
                                    <h3 className="text-3xl font-bold text-white font-display">{product.name}</h3>
                                </div>
                            </div>

                            <p className="text-sm font-semibold mb-3" style={{ color: product.accentColor }}>{product.tagline}</p>
                            <p className="text-zinc-300 leading-relaxed mb-8">{product.description}</p>

                            {/* Proof line */}
                            <div className="rounded-xl p-4 mb-8" style={{ background: `${product.accentColor}10`, border: `1px solid ${product.accentColor}20` }}>
                                <p className="text-sm text-zinc-400 italic leading-relaxed">{product.proof}</p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {product.stats.map((s) => (
                                <div key={s.label} className="text-center">
                                    <p className="text-2xl font-bold font-display" style={{ color: product.accentColor }}>{s.value}</p>
                                    <p className="text-xs text-zinc-500 mt-1 leading-tight">{s.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={openContactModal}
                                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 group"
                                style={{
                                    background: product.accentColor,
                                    color: '#000',
                                }}
                            >
                                {product.cta}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            {product.url && (
                                <a
                                    href={product.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-300 hover:bg-white/5"
                                    style={{ borderColor: `${product.accentColor}40`, color: product.accentColor }}
                                >
                                    Visit Product Site
                                </a>
                            )}
                        </div>
                    </div>

                    {/* ── Right: Features ── */}
                    <div
                        className={`p-10 lg:p-14 border-t lg:border-t-0 flex flex-col justify-center ${isReversed ? 'lg:order-1 lg:border-r' : 'lg:border-l'}`}
                        style={{ borderColor: product.borderColor }}
                    >
                        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-6">What It Does</p>
                        <div className="space-y-5">
                            {product.features.map((feat, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="flex items-start gap-4"
                                >
                                    <div
                                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                                        style={{ background: `${product.accentColor}15`, border: `1px solid ${product.accentColor}25` }}
                                    >
                                        <feat.Icon className="w-4 h-4" style={{ color: product.accentColor }} strokeWidth={1.5} />
                                    </div>
                                    <p className="text-zinc-300 text-sm leading-relaxed pt-1">{feat.text}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-10 flex items-center gap-2 text-xs text-zinc-600">
                            <span
                                className="px-2 py-1 rounded-md text-xs"
                                style={{ background: `${product.accentColor}10`, color: product.accentColor }}
                            >
                                {product.market}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Case Study Card ──────────────────────────────────────────────────────────
function CaseStudyCard({ study }: { study: typeof caseStudies[0] }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8 relative overflow-hidden flex flex-col h-full group"
            style={{ border: `1px solid ${study.borderColor}` }}
        >
            <div className="absolute top-0 left-0 w-full h-px"
                style={{ background: `linear-gradient(to right, transparent, ${study.accentColor}, transparent)` }} />

            <div className="flex gap-2 flex-wrap mb-5">
                <span className="badge text-xs">{study.categoryLabel}</span>
                <span className="badge text-xs">{study.market}</span>
            </div>

            <h3 className="text-xl font-bold text-white font-display mb-1 group-hover:text-[#618DC7] transition-colors">
                {study.name}
            </h3>
            <p className="text-sm font-medium mb-6" style={{ color: study.accentColor }}>
                {study.tagline}
            </p>

            <div className="space-y-4 mb-6 flex-1">
                <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Problem</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">{study.problem}</p>
                </div>
                <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">What We Built</p>
                    <p className="text-zinc-300 text-sm leading-relaxed">{study.built}</p>
                </div>
                <div className="rounded-xl p-4" style={{ background: study.accentBg }}>
                    <p className="text-xs uppercase tracking-wider mb-1" style={{ color: study.accentColor }}>Results</p>
                    <p className="text-white text-sm font-medium leading-relaxed">{study.results}</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {study.techStack.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400">
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function PortfolioContent() {
    const { openContactModal } = useModal();

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-black overflow-hidden pt-32 pb-24">
                <div className="noise opacity-20 fixed inset-0 pointer-events-none" />
                <div className="fixed top-0 left-1/3 w-[600px] h-[600px] rounded-full opacity-8 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(97,141,199,0.3), transparent 70%)' }} />

                {/* ── Hero ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-24">
                    <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center max-w-4xl mx-auto">
                        <motion.div variants={fadeUp}>
                            <span className="badge mb-6 inline-flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#618DC7]" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#618DC7]" />
                                </span>
                                Built. Deployed. Running.
                            </span>
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl font-bold text-white font-display mb-6 tracking-tight">
                            Products That{' '}
                            <span className="bg-gradient-to-r from-[#618DC7] to-[#7CC6C6] bg-clip-text text-transparent">
                                Operate in the Field.
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                            Three SaaS products. Five client deployments. Every number below comes from a live system running in a real business.
                        </motion.p>
                    </motion.div>
                </section>

                {/* ── Products Showcase ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-12"
                    >
                        <div className="h-px flex-1 bg-white/10" />
                        <span className="text-xs uppercase tracking-widest text-zinc-500 px-4">Our SaaS Products</span>
                        <div className="h-px flex-1 bg-white/10" />
                    </motion.div>

                    <div className="space-y-8">
                        {products.map((product, i) => (
                            <ProductStrip key={product.id} product={product} index={i} />
                        ))}
                    </div>
                </section>

                {/* ── Client Work ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-12"
                    >
                        <div className="h-px flex-1 bg-white/10" />
                        <span className="text-xs uppercase tracking-widest text-zinc-500 px-4">Client Work & White Label</span>
                        <div className="h-px flex-1 bg-white/10" />
                    </motion.div>

                    <AnimatePresence mode="popLayout">
                        <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {caseStudies.map((study) => (
                                <CaseStudyCard key={study.id} study={study} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </section>

                {/* ── Bottom CTA ── */}
                <section className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="glass-card p-12 sm:p-20 text-center relative overflow-hidden"
                        style={{ border: '1px solid rgba(97,141,199,0.25)' }}
                    >
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#618DC7] to-transparent opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#618DC7]/5 to-transparent pointer-events-none" />

                        <div className="relative">
                            <p className="text-xs uppercase tracking-widest text-[#618DC7] mb-4">Free Discovery Call — No Pitch</p>
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display mb-4">
                                Want to Be Our Next Case Study?
                            </h2>
                            <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
                                Tell us your operation. We'll show you exactly what we'd build — and the results you can expect. Fixed price. 48-hour proposal.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={openContactModal}
                                    className="btn-primary flex items-center justify-center gap-2 group px-8 py-4"
                                >
                                    Book Discovery Call
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button onClick={openContactModal} className="btn-secondary px-8 py-4">
                                    Talk to Sales
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}
