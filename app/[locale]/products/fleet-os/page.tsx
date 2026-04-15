// app/[locale]/products/fleet-os/page.tsx
// Redirects to the dedicated Fleet-OS domain (locale-aware)

import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function FleetOSPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    redirect(locale === 'it' ? 'https://www.fleetosbyddw.it' : 'https://www.fleetosbyddw.com');
}
