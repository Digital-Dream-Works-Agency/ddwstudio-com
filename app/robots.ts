// app/robots.ts — Generates /robots.txt via Next.js Metadata API

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/_next/',
                    '/lp/', // no-index LP pages handled via page metadata
                ],
            },
        ],
        sitemap: [
            'https://ddwstudio.com/sitemap.xml',
            'https://ddwstudio.it/sitemap.xml',
        ],
        host: 'https://ddwstudio.com',
    };
}
