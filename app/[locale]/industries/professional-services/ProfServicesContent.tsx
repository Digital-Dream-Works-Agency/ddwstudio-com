'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useModal } from '@/components/ContactForm/ModalContext';
import { FileStack, Clock, MessageSquare, Cpu, Bell, Receipt, ChevronRight } from 'lucide-react';

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
        icon: FileStack,
        title: 'Pratiche Burocratiche che Consumano Settimane',
        description: 'Commercialisti e professionisti italiani perdono settimane ogni anno in pratiche burocratiche, elaborazione documenti e adempimenti fiscali che potrebbero essere completamente automatizzati.',
    },
    {
        icon: Clock,
        title: 'Scadenze Fiscali Sempre in Agguato',
        description: 'Gestire manualmente scadenze F24, dichiarazioni IVA, comunicazioni Agenzia delle Entrate e adempimenti previdenziali per decine di clienti è rischioso e inefficiente.',
    },
    {
        icon: MessageSquare,
        title: 'Comunicazione Cliente Lenta e Dispersiva',
        description: 'Le comunicazioni con i clienti avvengono via email, telefono e WhatsApp in modo disorganizzato, creando inefficienze e rischio di perdere richieste importanti.',
    },
];

const solutions = [
    {
        icon: Cpu,
        title: 'AI per Elaborazione Documenti',
        description: 'Agenti AI che elaborano automaticamente documenti fiscali, fatture, F24 e pratiche burocratiche — riducendo dell\'80% il tempo di elaborazione manuale.',
    },
    {
        icon: Bell,
        title: 'Gestione Automatica Scadenze',
        description: 'Sistema che monitora tutte le scadenze fiscali per ogni cliente, invia alert automatici e genera i documenti necessari in anticipo — zero scadenze mancate.',
    },
    {
        icon: Receipt,
        title: 'Fatturazione Elettronica Automatizzata',
        description: 'Integrazione completa con il Sistema di Interscambio per la fatturazione elettronica — generazione, invio e riconciliazione automatica, conforme alle normative italiane.',
    },
];

const stats = [
    { number: '80%', label: 'Faster Doc Processing' },
    { number: 'Zero', label: 'Missed Deadlines' },
    { number: 'Auto', label: 'Client Communications' },
    { number: 'SDI', label: 'Fatturazione Elettronica Ready' },
];

export default function ProfServicesContent() {
    const { openContactModal } = useModal();

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-black overflow-hidden pt-32 pb-24">
                <div className="noise opacity-20 fixed inset-0 pointer-events-none"></div>
                <div className="fixed top-0 right-0 w-[700px] h-[700px] rounded-full opacity-10 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(244,63,94,0.3), transparent 70%)' }}></div>

                {/* ── Hero ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
                        <motion.div variants={fadeUp}>
                            <span className="badge mb-6 inline-flex items-center">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                                </span>
                                Servizi Professionali — Italia
                            </span>
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-bold text-white font-display mb-8 tracking-tight leading-tight">
                            Ogni Anno i Commercialisti Italiani Perdono Settimane in{' '}
                            <span className="bg-gradient-to-r from-rose-400 to-[#618DC7] bg-clip-text text-transparent">
                                Pratiche Burocratiche Automatizzabili.
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
                            Agenti AI per elaborazione documenti, comunicazione clienti automatizzata e gestione scadenze fiscali — pensati per il mercato italiano.
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
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">Dove i Professionisti Perdono Tempo</h2>
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
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">AI per Professionisti Italiani</h2>
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
                            Pronti ad Automatizzare la Vostra Burocrazia?
                        </h2>
                        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                            Prenota una Discovery Call gratuita. Analizzeremo i vostri processi e mostreremo esattamente quanto tempo potete recuperare con l&apos;AI.
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
