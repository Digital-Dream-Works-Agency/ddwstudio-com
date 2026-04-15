import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import MarineContent from './MarineContent';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default function MarinePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params);
    setRequestLocale(locale);
    return <MarineContent />;
}
