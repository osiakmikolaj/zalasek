import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/{photos,apartment}/*.{jpg,webp}', { eager: true });

/** Zdjęcia dostępne po nazwie pliku bez rozszerzenia, np. photo('alpaca-portrait') */
const bySlug: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(files)) {
    const slug = path.split('/').pop()!.replace(/\.(jpg|webp)$/, '');
    bySlug[slug] = mod.default;
}

export function photo(slug: string): ImageMetadata {
    const img = bySlug[slug];
    if (!img) throw new Error(`Brak zdjęcia: ${slug}`);
    return img;
}

/** Zdjęcia w galerii, w kolejności wyświetlania */
export const galleryGroups = {
    animals: [
        'alpaca-portrait',
        'highland-cattle',
        'peacock',
        'alpacas-meadow',
        'donkey',
        'pigs',
        'alpacas-sun',
        'rabbits',
        'goat',
        'kittens',
        'highland-snow',
        'alpacas-hay',
        'cows-dog',
        'cat-snow',
        'dog-snow',
    ],
    seasons: ['aerial', 'mountains-mist', 'alpacas-mist', 'sunset', 'peacock-house', 'house-flowers', 'garden-view', 'gazebo', 'cinema'],
    winter: ['winter-village', 'alpacas-horse-snow', 'alpaca-donkey-snow', 'alpacas-snow', 'winter-panorama', 'alpacas-frost', 'winter-field', 'winter-garden', 'winter-forest', 'window-winter'],
    home: ['kitchen-dining', 'kitchen-wide', 'kitchen', 'dining-piano', 'dining', 'bedroom-1', 'bedroom-2', 'bedroom-3', 'crib', 'play-corner', 'games', 'stove', 'oven', 'washer'],
} as const;
