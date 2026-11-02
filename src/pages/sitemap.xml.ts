import type { APIRoute } from 'astro';
import { languages, pagePath, site } from '../i18n/config';

const pages = ['home', 'offer', 'gallery', 'contact', 'privacy'] as const;

export const GET: APIRoute = () => {
    const today = new Date().toISOString().slice(0, 10);
    const urls = pages.flatMap((page) =>
        languages.map((lang) => {
            const alternates = languages
                .map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${site.url}${pagePath(l, page)}"/>`)
                .join('');
            return `<url><loc>${site.url}${pagePath(lang, page)}</loc><lastmod>${today}</lastmod>${alternates}</url>`;
        }),
    );
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>\n`;
    return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
