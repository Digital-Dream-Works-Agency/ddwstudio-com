'use client';

import { motion } from 'framer-motion';
import { useModal } from '@/components/ContactForm/ModalContext';
import { CheckCircle, ChevronRight, Database } from 'lucide-react';

const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ERPItaliaLandingPage() {
    const { openContactModal } = useModal();

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            <div className="noise opacity-20 fixed inset-0 pointer-events-none"></div>
            <div className="fixed top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(124,198,198,0.4), transparent 70%)' }}></div>

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
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                            </span>
                            ERP Personalizzato — Italia
                        </span>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl font-bold font-display mb-6 leading-tight">
                        Il Tuo Business Non si Adatta a Software Generico.
                        <span className="block bg-gradient-to-r from-[#7CC6C6] to-[#618DC7] bg-clip-text text-transparent">
                            Il Software si Adatta al Tuo Business.
                        </span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        DDW Studio sviluppa ERP personalizzati per aziende italiane — progettati intorno ai vostri processi operativi reali, con fatturazione elettronica SDI, conformità EU e AI nativa.
                    </motion.p>
                    <motion.div variants={fadeUp}>
                        <button onClick={openContactModal} className="btn-primary text-lg px-10 py-5 flex items-center gap-2 mx-auto group">
                            Prenota una Discovery Call Gratuita
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-zinc-500 text-sm mt-4">Nessun impegno. Mappiamo le vostre operazioni e proponiamo la soluzione senza costi.</p>
                    </motion.div>
                </motion.div>
            </section>

            <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    <motion.h2 variants={fadeUp} className="text-3xl font-bold font-display text-center mb-12">Perché l&apos;ERP Generico non Funziona per le PMI Italiane</motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Mille Funzioni che Non Usi', desc: 'I software ERP generici hanno funzionalità per ogni settore — ma nessuna ottimizzata per il tuo. Paghi per ciò che non usi e manca quello che ti serve.' },
                            { title: 'Costi Licenza che Crescono', desc: 'Le licenze SaaS per ERP crescono ogni anno con il team. Un software personalizzato è un investimento una tantum che rimane vostro.' },
                            { title: 'Normativa Italiana Non Integrata', desc: 'Fatturazione elettronica SDI, contabilità italiana, adempimenti fiscali — i software generici richiedono moduli aggiuntivi costosi e complessi.' },
                        ].map((pain, i) => (
                            <motion.div key={i} variants={fadeUp} className="glass-card p-6 border border-red-500/20">
                                <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                                    <Database className="w-5 h-5 text-red-400" />
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
                    <motion.h2 variants={fadeUp} className="text-3xl font-bold font-display text-center mb-12">L&apos;ERP DDW Studio per Aziende Italiane</motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Costruito sui Vostri Processi', desc: 'Ogni modulo progettato intorno a come opera realmente la vostra azienda — non su best practice generiche che non si adattano al vostro settore.' },
                            { title: 'SDI + Conformità EU Nativa', desc: 'Fatturazione elettronica SDI, contabilità italiana, IVA, dichiarazioni fiscali — tutto integrato nativamente senza moduli aggiuntivi.' },
                            { title: 'AI Integrata dal Primo Giorno', desc: 'Analisi predittive, workflow automatici, alert intelligenti — l\'AI non viene aggiunta dopo, è progettata come funzione core del sistema.' },
                        ].map((sol, i) => (
                            <motion.div key={i} variants={fadeUp} className="glass-card p-6 border border-[#7CC6C6]/20 hover:border-[#7CC6C6]/40 transition-all">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(124,198,198,0.1)' }}>
                                    <CheckCircle className="w-5 h-5" style={{ color: '#7CC6C6' }} />
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
                            { n: 'SDI', l: 'Fatturazione Elettronica Nativa' },
                            { n: '100%', l: 'Proprietà del Codice' },
                            { n: 'EU', l: 'Compliance Integrata' },
                            { n: 'AI', l: 'Nativa dal Primo Giorno' },
                        ].map((s, i) => (
                            <motion.div key={i} variants={fadeUp}>
                                <p className="text-4xl font-bold font-display mb-1" style={{ color: '#7CC6C6' }}>{s.n}</p>
                                <p className="text-zinc-400 text-sm">{s.l}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <section className="relative z-10 max-w-3xl mx-auto px-6 pb-24 text-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Pronti a Possedere il Vostro Software Gestionale?</h2>
                    <p className="text-zinc-400 mb-8">Prenota una Discovery Call gratuita. Mappiamo le vostre operazioni e mostriamo esattamente come sarebbe un ERP personalizzato per la vostra azienda.</p>
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
