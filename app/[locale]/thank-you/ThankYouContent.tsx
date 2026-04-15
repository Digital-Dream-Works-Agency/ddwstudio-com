'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { CheckCircle2, ArrowLeft, Sparkles, Mail, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ThankYouContent() {
    const t = useTranslations('ThankYou');
    const [isVerified, setIsVerified] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Verify that the user actually submitted the form
    useEffect(() => {
        const submitted = sessionStorage.getItem('contact_form_submitted');
        if (submitted === 'true') {
            setIsVerified(true);
            // Clear the flag so refreshing the page won't show it again
            sessionStorage.removeItem('contact_form_submitted');
        }
        setIsLoading(false);
    }, []);

    // Show loading state briefly
    if (isLoading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    // If user navigated here directly without submitting the form, redirect them
    if (!isVerified) {
        return (
            <>
                <Navigation />
                <main className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
                    {/* Background */}
                    <div className="absolute inset-0 hero-gradient opacity-30" />
                    <div className="absolute inset-0 grid-pattern" />

                    <div className="relative z-10 text-center px-4 max-w-lg mx-auto">
                        <div className="glass-card p-12">
                            <Shield className="w-16 h-16 text-red-400 mx-auto mb-6" />
                            <h1 className="text-2xl font-bold text-white font-display mb-4">
                                {t('unauthorizedTitle')}
                            </h1>
                            <p className="text-zinc-400 font-sans mb-8">
                                {t('unauthorizedSubtitle')}
                            </p>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 btn-primary px-8 py-4 text-white font-bold font-display rounded-xl"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                {t('backHome')}
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    const features = [
        { icon: Mail, labelKey: 'featureConfirmation' },
        { icon: Clock, labelKey: 'featureResponse' },
        { icon: Sparkles, labelKey: 'featureDemo' },
    ];

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-black relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 hero-gradient opacity-40" />
                <div className="absolute inset-0 grid-pattern" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[100px]" />

                {/* Floating Orbs */}
                <div className="absolute top-20 left-10 w-2 h-2 bg-indigo-400/40 rounded-full animate-float" />
                <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-float-slow" />
                <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-pink-400/30 rounded-full animate-float delay-300" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-32">
                    <div className="max-w-3xl mx-auto text-center">
                        {/* Success Icon */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                            className="mb-8"
                        >
                            <div className="relative inline-flex">
                                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse-glow" />
                                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-500/10 border border-green-400/30 flex items-center justify-center">
                                    <CheckCircle2 className="w-12 h-12 text-green-400" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-green-500/10 border border-green-500/20 text-green-300 backdrop-blur-sm mb-8">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                {t('badge')}
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display tracking-tight mt-6 mb-6"
                        >
                            {t('title')}
                            <span className="block text-gradient-vibrant mt-2">
                                {t('titleHighlight')}
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-lg text-zinc-400 font-sans max-w-xl mx-auto mb-12"
                        >
                            {t('subtitle')}
                        </motion.p>

                        {/* What Happens Next Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.labelKey}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                                    className="glass-card p-6 text-center group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-6 h-6 text-indigo-400" />
                                    </div>
                                    <p className="text-sm text-zinc-300 font-sans">
                                        {t(feature.labelKey)}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 btn-primary px-8 py-4 text-white font-bold font-display rounded-xl text-lg"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                {t('backHome')}
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 btn-secondary px-8 py-4 text-white font-medium font-display rounded-xl text-lg"
                            >
                                {t('learnMore')}
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
