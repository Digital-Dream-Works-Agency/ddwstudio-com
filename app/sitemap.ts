// app/sitemap.ts — Auto-generated XML sitemap for ddwstudio.com + ddwstudio.it
// Next.js will serve this at /sitemap.xml automatically

import { MetadataRoute } from 'next';

const BASE_EN = 'https://ddwstudio.com';
const BASE_IT = 'https://ddwstudio.it';

// All routes available in both locales
const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/portfolio', priority: 0.8, changeFrequency: 'weekly' as const },

    // Products (redirect pages — lower priority)
    { path: '/products/lyra', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/products/fleet-os', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/products/hr-os', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/products/proposal-gen', priority: 0.6, changeFrequency: 'monthly' as const },

    // Industries hub + verticals
    { path: '/industries', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/industries/logistics', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/industries/hvac', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/industries/real-estate', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/industries/construction', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/industries/franchise', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/industries/marine', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/industries/maritime', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/industries/wealth-management', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/industries/professional-services', priority: 0.85, changeFrequency: 'monthly' as const },

    // Solutions hub + types
    { path: '/solutions', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/solutions/agentic-ai', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/solutions/custom-erp', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/solutions/ai-automation', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/solutions/custom-software', priority: 0.85, changeFrequency: 'monthly' as const },

    // Legal
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly' as const },
];

// US LP routes (EN only)
const usLpRoutes = [
    '/lp/us/hvac-ai',
    '/lp/us/logistics-ai',
    '/lp/us/real-estate-ai',
    '/lp/us/construction-ai',
    '/lp/us/agentic-ai',
    '/lp/us/erp-florida',
];

// IT LP routes (IT only)
const itLpRoutes = [
    '/lp/it/sistemi-agentici',
    '/lp/it/erp-italia',
    '/lp/it/logistica-ai',
    '/lp/it/portuale-marittimo',
    '/lp/it/automazione-pmi',
];

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = [];

    // Bilingual routes
    for (const route of routes) {
        entries.push({
            url: `${BASE_EN}${route.path}`,
            lastModified: new Date(),
            changeFrequency: route.changeFrequency,
            priority: route.priority,
            alternates: {
                languages: {
                    en: `${BASE_EN}${route.path}`,
                    it: `${BASE_IT}${route.path}`,
                },
            },
        });
    }

    // US LP pages (EN only)
    for (const path of usLpRoutes) {
        entries.push({
            url: `${BASE_EN}${path}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        });
    }

    // IT LP pages (IT only)
    for (const path of itLpRoutes) {
        entries.push({
            url: `${BASE_IT}${path}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        });
    }

    return entries;
}
