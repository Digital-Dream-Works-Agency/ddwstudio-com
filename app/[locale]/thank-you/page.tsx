// app/[locale]/thank-you/page.tsx
// ─────────────────────────────────────────────────────────────────────
// Thank You page — shown after successful contact form submission
//
// Route structure:
//   EN → /thank-you
//   IT → /it/thank-you
// ─────────────────────────────────────────────────────────────────────

import { use } from 'react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import ThankYouContent from './ThankYouContent';

// ── Static params for build-time rendering ──
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

// ── Page-specific metadata for SEO ──
export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'ThankYou' });

    return {
        title: t('metaTitle'),
        description: t('metaDescription'),
        robots: {
            index: false,
            follow: false,
        },
    };
}

// ── Page component ──
export default function ThankYouPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = use(params);
    setRequestLocale(locale);

    return <ThankYouContent />;
}
