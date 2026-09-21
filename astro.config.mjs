// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://vicente.photo',
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en'],
        routing: {
            prefixDefault: false,
        },
    },
    redirects: {
        '/work': '/work/photographer',
        '/en/work': '/en/work/photographer',
    },
    integrations: [react(), sitemap()],
});
