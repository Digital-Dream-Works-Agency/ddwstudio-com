'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe, Menu, X, Zap, BarChart3, Truck, Building2, Home, Ship, Anchor, Briefcase, Users, ArrowRight, Bot, Database, Cpu, Code2 } from 'lucide-react';
import { useModal } from './ContactForm/ModalContext';

const industryItems = [
  { key: 'logistics',           icon: Truck,     color: 'text-emerald-400', href: '/industries/logistics' },
  { key: 'hvac',                icon: Zap,       color: 'text-amber-400',   href: '/industries/hvac' },
  { key: 'realEstate',          icon: Home,      color: 'text-blue-400',    href: '/industries/real-estate' },
  { key: 'construction',        icon: Building2, color: 'text-orange-400',  href: '/industries/construction' },
  { key: 'franchise',           icon: BarChart3, color: 'text-violet-400',  href: '/industries/franchise' },
  { key: 'marine',              icon: Anchor,    color: 'text-cyan-400',    href: '/industries/marine' },
  { key: 'maritime',            icon: Ship,      color: 'text-indigo-400',  href: '/industries/maritime' },
  { key: 'wealthManagement',    icon: Briefcase, color: 'text-yellow-400',  href: '/industries/wealth-management' },
  { key: 'professionalServices',icon: Users,     color: 'text-pink-400',    href: '/industries/professional-services' },
] as const;

const solutionItems = [
  { key: 'agenticAI',     icon: Bot,      color: 'text-accent-400', href: '/solutions/agentic-ai' },
  { key: 'customERP',     icon: Database, color: 'text-emerald-400', href: '/solutions/custom-erp' },
  { key: 'aiAutomation',  icon: Cpu,      color: 'text-amber-400',   href: '/solutions/ai-automation' },
  { key: 'customSoftware',icon: Code2,    color: 'text-violet-400',  href: '/solutions/custom-software' },
] as const;

export default function Navigation() {
  const { openContactModal } = useModal();
  const [scrolled, setScrolled]           = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen]       = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen]   = useState(false);
  const industriesRef = useRef<HTMLDivElement>(null);
  const solutionsRef  = useRef<HTMLDivElement>(null);

  const t = useTranslations('Navigation');
  const locale  = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setIsLangOpen(false);
        setIndustriesOpen(false);
        setSolutionsOpen(false);
      }
    };
    const handleClick = (e: MouseEvent) => {
      if (industriesRef.current && !industriesRef.current.contains(e.target as Node)) setIndustriesOpen(false);
      if (solutionsRef.current  && !solutionsRef.current.contains(e.target as Node))  setSolutionsOpen(false);
    };
    window.addEventListener('keydown', handleKeydown);
    document.addEventListener('mousedown', handleClick);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const languages = [
    { code: 'en', label: 'English',  flag: '🇬🇧' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  ];

  const dropdownVariants = {
    hidden:  { opacity: 0, y: 10, scale: 0.97 },
    visible: { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.2, ease: 'easeOut' } },
    exit:    { opacity: 0, y: 8,  scale: 0.97, transition: { duration: 0.15 } },
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
      scrolled || mobileMenuOpen
        ? 'bg-black/90 backdrop-blur-xl border-b border-white/5'
        : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="relative w-11 h-11">
              <Image src="/logo.jpeg" alt="DDW Studio Logo" fill sizes="44px"
                className="object-contain transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-tight font-display">{t('brand')}</span>
              <span className="text-[10px] text-accent-400 font-semibold uppercase tracking-[0.2em]">{t('brandSub')}</span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex items-center gap-1">

            {/* Home */}
            <Link href="/" className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-full">
              {t('links.home')}
            </Link>

            {/* Industries dropdown */}
            <div ref={industriesRef} className="relative">
              <button
                onClick={() => { setIndustriesOpen(!industriesOpen); setSolutionsOpen(false); }}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-full"
              >
                {t('links.industries')}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${industriesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {industriesOpen && (
                  <motion.div
                    variants={dropdownVariants} initial="hidden" animate="visible" exit="exit"
                    className="absolute left-0 mt-2 w-72 rounded-2xl bg-zinc-950/95 border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden"
                  >
                    <div className="p-2">
                      <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                        {t('industriesDropdown.title')}
                      </p>
                      {industryItems.map(({ key, icon: Icon, color, href }) => (
                        <Link key={key} href={href as any} onClick={() => setIndustriesOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200 group">
                          <Icon className={`w-4 h-4 ${color} flex-shrink-0`} />
                          <span>{t(`industriesDropdown.${key}` as any)}</span>
                          <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions dropdown */}
            <div ref={solutionsRef} className="relative">
              <button
                onClick={() => { setSolutionsOpen(!solutionsOpen); setIndustriesOpen(false); }}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-full"
              >
                {t('links.solutions')}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    variants={dropdownVariants} initial="hidden" animate="visible" exit="exit"
                    className="absolute left-0 mt-2 w-60 rounded-2xl bg-zinc-950/95 border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden"
                  >
                    <div className="p-2">
                      <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                        {t('solutionsDropdown.title')}
                      </p>
                      {solutionItems.map(({ key, icon: Icon, color, href }) => (
                        <Link key={key} href={href as any} onClick={() => setSolutionsOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200 group">
                          <Icon className={`w-4 h-4 ${color} flex-shrink-0`} />
                          <span>{t(`solutionsDropdown.${key}` as any)}</span>
                          <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About */}
            <Link href="/about" className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-full">
              {t('links.about')}
            </Link>
          </div>

          {/* ── Desktop Actions ── */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm font-medium text-white"
              >
                <Globe className="w-4 h-4 text-accent-400" />
                <span>{locale.toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    variants={dropdownVariants} initial="hidden" animate="visible" exit="exit"
                    className="absolute right-0 mt-2 w-40 overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl backdrop-blur-2xl"
                  >
                    <div className="p-1">
                      {languages.map((lang) => (
                        <Link key={lang.code} href={pathname} locale={lang.code as any}
                          onClick={() => setIsLangOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200 rounded-xl
                            ${locale === lang.code ? 'bg-accent-400/20 text-accent-400' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}>
                          <span className="text-base leading-none">{lang.flag}</span>
                          <span>{lang.label}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Book a call */}
            <a href="https://calendly.com/digi-dreamworks/onboarding-call" target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-accent-400 hover:bg-accent-500 rounded-xl transition-all duration-300 shadow-lg shadow-accent-400/20 hover:shadow-accent-400/30 hover:-translate-y-0.5 flex items-center gap-2 group">
              <span>{t('cta.talkToUs')}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Get Demo */}
            <button onClick={openContactModal}
              className="px-5 py-2.5 text-sm font-semibold text-zinc-900 bg-white rounded-xl hover:bg-accent-100 transition-all duration-300 shadow-lg shadow-white/5 hover:-translate-y-0.5 flex items-center gap-2 group">
              <span>{t('cta.getDemo')}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* ── Mobile Toggle ── */}
          <button className="lg:hidden relative z-50 p-2 text-white hover:bg-white/10 rounded-xl transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="lg:hidden absolute top-20 left-0 right-0 bg-black/97 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
            >
              <div className="px-6 py-8 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-4 text-lg font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-2xl transition-all">
                  {t('links.home')}
                </Link>

                {/* Mobile Industries */}
                <div>
                  <button onClick={() => setIndustriesOpen(!industriesOpen)}
                    className="w-full flex items-center justify-between px-6 py-4 text-lg font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-2xl transition-all">
                    {t('links.industries')}
                    <ChevronDown className={`w-4 h-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {industriesOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4">
                        {industryItems.map(({ key, icon: Icon, color, href }) => (
                          <Link key={key} href={href as any} onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                            <Icon className={`w-4 h-4 ${color}`} />
                            <span>{t(`industriesDropdown.${key}` as any)}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Solutions */}
                <div>
                  <button onClick={() => setSolutionsOpen(!solutionsOpen)}
                    className="w-full flex items-center justify-between px-6 py-4 text-lg font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-2xl transition-all">
                    {t('links.solutions')}
                    <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4">
                        {solutionItems.map(({ key, icon: Icon, color, href }) => (
                          <Link key={key} href={href as any} onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                            <Icon className={`w-4 h-4 ${color}`} />
                            <span>{t(`solutionsDropdown.${key}` as any)}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/about" onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-4 text-lg font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-2xl transition-all">
                  {t('links.about')}
                </Link>

                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="flex items-center gap-3 px-6">
                    {languages.map((lang) => (
                      <Link key={lang.code} href={pathname} locale={lang.code as any}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all
                          ${locale === lang.code ? 'bg-accent-400/20 border-accent-400 text-accent-400' : 'bg-white/5 border-white/10 text-white/60'}`}>
                        <span>{lang.flag}</span>
                        <span className="text-sm font-semibold uppercase">{lang.code}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 px-6">
                    <a href="https://calendly.com/digi-dreamworks/onboarding-call" target="_blank" rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-6 py-4 text-lg font-bold text-center w-full bg-accent-400 text-white rounded-2xl hover:bg-accent-500 transition-all flex items-center justify-center gap-2">
                      <span>{t('cta.talkToUs')}</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                    <button onClick={() => { setMobileMenuOpen(false); openContactModal(); }}
                      className="px-6 py-4 text-lg font-bold text-center w-full bg-white text-zinc-900 rounded-2xl hover:bg-accent-100 transition-all flex items-center justify-center gap-2">
                      <span>{t('cta.getDemo')}</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
