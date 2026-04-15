'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useModal } from '@/components/ContactForm/ModalContext';
import { AlertTriangle, FileX, Clock, MapPin, FileCheck, LayoutDashboard, ChevronRight } from 'lucide-react';

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};
const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
};

const painPoints = [
    {
        icon: AlertTriangle,
        title: 'Software degli Anni \'90 in un Porto del 2024',
        description: 'I sistemi portuali italiani gestiscono milioni di tonnellate con software obsoleto, fogli Excel e processi manuali che creano ritardi, errori e perdite di efficienza.',
    },
    {
        icon: FileX,
        title: 'Documentazione Doganale Manuale',
        description: 'La compilazione manuale di documentazione doganale, certificati d\'origine e dichiarazioni doganali richiede ore di lavoro che potrebbero essere automatizzate completamente.',
    },
    {
        icon: Clock,
        title: 'Scheduling Portuale Inefficiente',
        description: 'La gestione manuale delle banchine, degli ormeggi e dei servizi portuali porta a colli di bottiglia, tempi di attesa estesi e perdita di competitività rispetto ad altri porti EU.',
    },
];

const solutions = [
    {
        icon: MapPin,
        title: 'Real-Time Cargo Tracking',
        description: 'Sistema di tracking cargo in tempo reale con aggiornamenti automatici per spedizionieri, clienti e autorità doganali — elimina le chiamate di status update.',
    },
    {
        icon: FileCheck,
        title: 'Generazione Automatica Documenti',
        description: 'AI che genera automaticamente documentazione doganale, manifesti di carico, certificati d\'origine e dichiarazioni — conformità EU garantita, in italiano.',
    },
    {
        icon: LayoutDashboard,
        title: 'Dashboard Portuale Unificata',
        description: 'Un\'unica piattaforma per gestire banchine, ormeggi, risorse portuali e scheduling — con visibilità in tempo reale su tutte le operazioni.',
    },
];

const stats = [
    { number: 'Real-Time', label: 'Cargo Tracking' },
    { number: 'Auto', label: 'Document Generation' },
    { number: 'Unified', label: 'Port Dashboard' },
    { number: 'EU', label: 'Compliance Built-In' },
];

export default function MaritimeContent() {
    const { openContactModal } = useModal();

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-black overflow-hidden pt-32 pb-24">
                <div className="noise opacity-20 fixed inset-0 pointer-events-none"></div>
                <div className="fixed top-0 right-0 w-[700px] h-[700px] rounded-full opacity-10 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(97,141,199,0.4), transparent 70%)' }}></div>

                {/* ── Hero ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
                        <motion.div variants={fadeUp}>
                            <span className="badge mb-6 inline-flex items-center">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#618DC7' }}></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#618DC7' }}></span>
                                </span>
                                Portuale & Marittimo — Italia
                            </span>
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-bold text-white font-display mb-8 tracking-tight leading-tight">
                            I Port Italiani Gestiscono Milioni di Tonnellate con{' '}
                            <span className="bg-gradient-to-r from-[#618DC7] to-[#7CC6C6] bg-clip-text text-transparent">
                                Software degli Anni &apos;90.
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
                            DDW Studio sviluppa sistemi AI per tracking cargo, documentazione doganale automatica e scheduling portuale — in italiano, con conformità EU integrata.
                        </motion.p>
                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                            <button onClick={openContactModal} className="btn-primary flex items-center gap-2 group">
                                Prenota una Discovery Call
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button onClick={openContactModal} className="btn-secondary">Parla con il Team</button>
                        </motion.div>
                    </motion.div>
                </section>

                {/* ── Pain Points ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <motion.div variants={fadeUp} className="text-center mb-16">
                            <span className="badge mb-4 inline-block">Il Problema</span>
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">Dove i Porti Italiani Perdono Efficienza</h2>
                        </motion.div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {painPoints.map((pain, i) => {
                                const Icon = pain.icon;
                                return (
                                    <motion.div key={i} variants={fadeUp}
                                        className="glass-card p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                                        <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                                            <Icon className="w-6 h-6 text-red-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white font-display mb-3">{pain.title}</h3>
                                        <p className="text-zinc-400 leading-relaxed text-sm">{pain.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </section>

                {/* ── Solutions ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <motion.div variants={fadeUp} className="text-center mb-16">
                            <span className="badge mb-4 inline-block">La Nostra Soluzione</span>
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">Operazioni Portuali del Futuro</h2>
                        </motion.div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {solutions.map((sol, i) => {
                                const Icon = sol.icon;
                                return (
                                    <motion.div key={i} variants={fadeUp}
                                        className="glass-card p-8 border border-[#618DC7]/20 hover:border-[#618DC7]/50 hover:shadow-lg hover:shadow-[#618DC7]/10 transition-all duration-300 group"
                                        whileHover={{ y: -4 }}>
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                                            style={{ background: 'rgba(97,141,199,0.1)' }}>
                                            <Icon className="w-6 h-6" style={{ color: '#618DC7' }} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white font-display mb-3">{sol.title}</h3>
                                        <p className="text-zinc-400 leading-relaxed text-sm">{sol.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </section>

                {/* ── Stats ── */}
                <section className="relative z-10 border-y border-white/5 bg-white/[0.02] py-20 mb-32">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                        className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                            {stats.map((stat, i) => (
                                <motion.div key={i} variants={fadeUp} className="text-center">
                                    <p className="text-4xl sm:text-5xl font-bold font-display mb-2" style={{ color: '#618DC7' }}>{stat.number}</p>
                                    <p className="text-zinc-400 text-sm">{stat.label}</p>
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
                            Pronti a Modernizzare le Vostre Operazioni Portuali?
                        </h2>
                        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                            Prenota una Discovery Call gratuita. Analizzeremo le vostre operazioni e mostreremo esattamente come l&apos;AI può portare efficienza misurabile in 60 giorni.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={openContactModal} className="btn-primary flex items-center gap-2 group">
                                Prenota una Discovery Call
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button onClick={openContactModal} className="btn-secondary">Parla con il Team</button>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}
