// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://zalasek.pl',
    // Pliki .html bez ukośnika na końcu – Cloudflare Pages serwuje /offer.html jako /offer
    trailingSlash: 'never',
    build: { format: 'file' },
    image: {
        // Zdjęcia generowane w kilku rozmiarach przy budowaniu (sharp)
        responsiveStyles: false,
    },
});
