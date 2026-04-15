import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import ConstructionContent from './ConstructionContent';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default function ConstructionPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params);
    setRequestLocale(locale);
    return <ConstructionContent />;
}
