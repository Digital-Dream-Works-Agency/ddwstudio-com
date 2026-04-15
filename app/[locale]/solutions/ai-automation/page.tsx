import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import AutomationContent from './AutomationContent';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default function AutomationPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params);
    setRequestLocale(locale);
    return <AutomationContent />;
}
