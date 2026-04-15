'use client';

import { motion } from 'framer-motion';
import { useModal } from '@/components/ContactForm/ModalContext';
import { CheckCircle, ChevronRight, Ship } from 'lucide-react';

const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function PortualeMarittimoLandingPage() {
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
                            Portuale & Marittimo — Italia
                        </span>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl font-bold font-display mb-6 leading-tight">
                        I Port Italiani Gestiscono Milioni di Tonnellate con
                        <span className="block bg-gradient-to-r from-[#618DC7] to-[#7CC6C6] bg-clip-text text-transparent">
                            Software degli Anni &apos;90.
                        </span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        DDW Studio sviluppa sistemi AI per tracking cargo real-time, documentazione doganale automatica e scheduling portuale — in italiano, con conformità EU integrata.
                    </motion.p>
                    <motion.div variants={fadeUp}>
                        <button onClick={openContactModal} className="btn-primary text-lg px-10 py-5 flex items-center gap-2 mx-auto group">
                            Prenota una Discovery Call Gratuita
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-zinc-500 text-sm mt-4">Nessun impegno. Analizziamo le vostre operazioni portuali e identifichiamo le opportunità AI.</p>
                    </motion.div>
                </motion.div>
            </section>

            <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    <motion.h2 variants={fadeUp} className="text-3xl font-bold font-display text-center mb-12">Le Sfide dei Porti Italiani</motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Tracking Cargo Manuale e Impreciso', desc: 'Senza tracking in tempo reale, spedizionieri e autorità doganali ricevono aggiornamenti ritardati che creano colli di bottiglia e ritardi costosi.' },
                            { title: 'Documentazione Doganale a Mano', desc: 'Compilare manualmente manifesti di carico, dichiarazioni doganali e certificati d\'origine richiede ore che potrebbero essere completamente automatizzate.' },
                            { title: 'Scheduling Banchine Inefficiente', desc: 'Senza ottimizzazione AI dello scheduling portuale, le banchine vengono sottoutilizzate e i tempi di attesa erodono la competitività del porto.' },
                        ].map((pain, i) => (
                            <motion.div key={i} variants={fadeUp} className="glass-card p-6 border border-red-500/20">
                                <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                                    <Ship className="w-5 h-5 text-red-400" />
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
                    <motion.h2 variants={fadeUp} className="text-3xl font-bold font-display text-center mb-12">Operazioni Portuali del Futuro</motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Tracking Cargo Real-Time', desc: 'Sistema di tracking in tempo reale con aggiornamenti automatici per tutti gli stakeholder — spedizionieri, clienti, autorità doganali.' },
                            { title: 'Generazione Automatica Documenti', desc: 'AI che genera automaticamente tutta la documentazione doganale — manifesti, certificati, dichiarazioni — conforme normativa italiana e EU.' },
                            { title: 'Scheduling Portuale Ottimizzato', desc: 'Dashboard unificata per gestire banchine, ormeggi e risorse portuali con ottimizzazione AI dello scheduling e visibilità in tempo reale.' },
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
                            { n: 'Real-Time', l: 'Cargo Tracking' },
                            { n: 'Auto', l: 'Document Generation' },
                            { n: 'Unified', l: 'Port Dashboard' },
                            { n: 'EU', l: 'Compliance Built-In' },
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
                    <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Pronti a Modernizzare le Operazioni Portuali?</h2>
                    <p className="text-zinc-400 mb-8">Prenota una Discovery Call gratuita. Analizzeremo le vostre operazioni e mostreremo come l&apos;AI porta efficienza misurabile in 60 giorni.</p>
                    <button onClick={openContactModal} className="btn-primary text-lg px-10 py-5 flex items-center gap-2 mx-auto group">
                        Prenota la Tua Discovery Call
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-zinc-600 text-sm mt-4">DDW Studio · Tampa, FL & Italia · ddwstudio.com</p>
                </motion.div>
            </section>

        </div>
    );
}
