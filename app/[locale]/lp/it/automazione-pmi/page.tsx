'use client';

import { motion } from 'framer-motion';
import { useModal } from '@/components/ContactForm/ModalContext';
import { CheckCircle, ChevronRight, Zap } from 'lucide-react';

const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function AutomazionePMILandingPage() {
    const { openContactModal } = useModal();

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            <div className="noise opacity-20 fixed inset-0 pointer-events-none"></div>
            <div className="fixed top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(99,239,147,0.3), transparent 70%)' }}></div>

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
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Automazione AI per PMI — Italia
                        </span>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl font-bold font-display mb-6 leading-tight">
                        Le PMI Italiane che Non Automatizzano
                        <span className="block bg-gradient-to-r from-[#63EF93] to-[#618DC7] bg-clip-text text-transparent">
                            Stanno Regalando Vantaggio Competitivo ai Competitor.
                        </span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        DDW Studio porta automazione AI accessibile alle PMI italiane — senza grandi investimenti iniziali, senza sostituire i sistemi esistenti, con ROI in 30-60 giorni.
                    </motion.p>
                    <motion.div variants={fadeUp}>
                        <button onClick={openContactModal} className="btn-primary text-lg px-10 py-5 flex items-center gap-2 mx-auto group">
                            Prenota una Discovery Call Gratuita
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-zinc-500 text-sm mt-4">Nessun impegno. 45 minuti per identificare le opportunità di automazione AI nella vostra PMI.</p>
                    </motion.div>
                </motion.div>
            </section>

            <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    <motion.h2 variants={fadeUp} className="text-3xl font-bold font-display text-center mb-12">Dove le PMI Perdono Efficienza</motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Processi Manuali che Consumano Ore', desc: 'Fatturazione, preventivi, comunicazioni cliente, elaborazione ordini — processi ripetitivi che il vostro team esegue manualmente ogni giorno.' },
                            { title: 'Dati Sparsi Ovunque', desc: 'CRM, fogli Excel, email, WhatsApp — i dati aziendali sono frammentati e inaccessibili. Le decisioni vengono prese senza visibilità completa.' },
                            { title: 'Follow-Up che non Avviene', desc: 'Lead che non vengono contattati in tempo, clienti che non ricevono aggiornamenti, scadenze che vengono dimenticate. L\'azienda perde opportunità ogni giorno.' },
                        ].map((pain, i) => (
                            <motion.div key={i} variants={fadeUp} className="glass-card p-6 border border-red-500/20">
                                <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                                    <Zap className="w-5 h-5 text-red-400" />
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
                    <motion.h2 variants={fadeUp} className="text-3xl font-bold font-display text-center mb-12">Automazione AI Accessibile per le PMI</motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Automazione Processi Specifici', desc: 'Iniziamo da 1-2 processi ad alto impatto — fatturazione, follow-up clienti, elaborazione ordini — con risultati misurabili in 30 giorni.' },
                            { title: 'Integrazione con i Sistemi Esistenti', desc: 'Non sostituiamo quello che già funziona. Aggiungiamo automazione AI sopra i vostri sistemi esistenti — nessuna migrazione costosa.' },
                            { title: 'ROI Prima di Scalare', desc: 'Dimostriamo il valore economico dell\'automazione sul primo progetto, poi scaliamo. Nessun grande investimento iniziale senza prova di ROI.' },
                        ].map((sol, i) => (
                            <motion.div key={i} variants={fadeUp} className="glass-card p-6 border border-[#63EF93]/20 hover:border-[#63EF93]/40 transition-all">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(99,239,147,0.1)' }}>
                                    <CheckCircle className="w-5 h-5" style={{ color: '#63EF93' }} />
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
                            { n: '30 gg', l: 'ROI Medio Primo Progetto' },
                            { n: '80%', l: 'Riduzione Elaborazione Docs' },
                            { n: 'Zero', l: 'Scadenze Mancate' },
                            { n: '24/7', l: 'Operatività Automatica' },
                        ].map((s, i) => (
                            <motion.div key={i} variants={fadeUp}>
                                <p className="text-4xl font-bold font-display mb-1" style={{ color: '#63EF93' }}>{s.n}</p>
                                <p className="text-zinc-400 text-sm">{s.l}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <section className="relative z-10 max-w-3xl mx-auto px-6 pb-24 text-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Pronti a Portare l&apos;AI nella Vostra PMI?</h2>
                    <p className="text-zinc-400 mb-8">Prenota una Discovery Call gratuita. Identifichiamo il processo ad alto impatto da automatizzare per primo e mostriamo il ROI atteso.</p>
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
