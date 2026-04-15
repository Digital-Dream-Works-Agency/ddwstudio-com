import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import MaritimeContent from './MaritimeContent';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default function MaritimePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params);
    setRequestLocale(locale);
    return <MaritimeContent />;
}
