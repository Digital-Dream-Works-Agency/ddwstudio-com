'use client';

import { motion } from 'framer-motion';
import { useModal } from '@/components/ContactForm/ModalContext';
import { CheckCircle, ChevronRight, Brain } from 'lucide-react';

const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function SistemiAgenticiLandingPage() {
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
                            Sistemi Agentici AI — Italia
                        </span>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl font-bold font-display mb-6 leading-tight">
                        La Tua Azienda Spreca Ore Ogni Giorno su
                        <span className="block bg-gradient-to-r from-[#618DC7] to-[#7CC6C6] bg-clip-text text-transparent">
                            Compiti che l&apos;AI Dovrebbe Gestire.
                        </span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        DDW Studio sviluppa sistemi AI agentici per aziende italiane — agenti autonomi che gestiscono comunicazioni, documenti, scheduling e reportistica senza intervento umano costante.
                    </motion.p>
                    <motion.div variants={fadeUp}>
                        <button onClick={openContactModal} className="btn-primary text-lg px-10 py-5 flex items-center gap-2 mx-auto group">
                            Prenota una Discovery Call Gratuita
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-zinc-500 text-sm mt-4">Nessun impegno. 45 minuti per mappare i tuoi processi e identificare dove l&apos;AI genera ROI.</p>
                    </motion.div>
                </motion.div>
            </section>

            <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    <motion.h2 variants={fadeUp} className="text-3xl font-bold font-display text-center mb-12">Dove le Aziende Italiane Perdono Tempo</motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Pratiche e Documenti Manuali', desc: 'Elaborazione manuale di fatture, contratti, report e comunicazioni che potrebbero essere automatizzate con agenti AI specifici.' },
                            { title: 'Comunicazioni Cliente Dispersive', desc: 'Email, telefonate e WhatsApp non integrati creano inefficienze e rischio di perdere richieste importanti dei clienti.' },
                            { title: 'Scadenze e Compliance a Rischio', desc: 'Gestire scadenze fiscali, certificazioni e adempimenti per molti clienti manualmente è inefficiente e rischioso.' },
                        ].map((pain, i) => (
                            <motion.div key={i} variants={fadeUp} className="glass-card p-6 border border-red-500/20">
                                <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                                    <Brain className="w-5 h-5 text-red-400" />
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
                    <motion.h2 variants={fadeUp} className="text-3xl font-bold font-display text-center mb-12">Cosa Costruiamo per le Aziende Italiane</motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Agenti per Elaborazione Documenti', desc: 'Agenti AI che elaborano fatture, contratti e documenti automaticamente — integrati con i vostri sistemi esistenti, conformi normativa italiana.' },
                            { title: 'Agenti di Comunicazione Cliente', desc: 'Gestione automatica delle comunicazioni email e SMS con i clienti — risposte, aggiornamenti e follow-up senza intervento manuale.' },
                            { title: 'Agenti per Scadenze e Compliance', desc: 'Monitoraggio automatico di scadenze fiscali, certificazioni e adempimenti con alert proattivi e documentazione automatica.' },
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
                            { n: '80%', l: 'Riduzione Elaborazione Documenti' },
                            { n: 'Zero', l: 'Scadenze Mancate' },
                            { n: '24/7', l: 'Operatività Autonoma' },
                            { n: 'EU', l: 'Compliance Integrata' },
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
                    <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Pronti a Liberare il Vostro Team dalla Burocrazia?</h2>
                    <p className="text-zinc-400 mb-8">Prenota una Discovery Call gratuita. Analizzeremo i vostri processi e identificheremo le opportunità di automazione AI con ROI misurabile in 30-60 giorni.</p>
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
