import pl from './pl';
import en from './en';
import de from './de';

export const languages = ['pl', 'en', 'de'] as const;
export type Lang = (typeof languages)[number];
export type PageKey = 'home' | 'offer' | 'gallery' | 'contact' | 'privacy' | 'notFound';

export type Dictionary = typeof pl;

const dictionaries: Record<Lang, Dictionary> = { pl, en, de };

export function useTranslations(lang: Lang): Dictionary {
    return dictionaries[lang];
}

const slugs: Record<Exclude<PageKey, 'notFound'>, string> = {
    home: '',
    offer: 'offer',
    gallery: 'gallery',
    contact: 'contact',
    privacy: 'privacy',
};

/** Adres strony w danym języku, np. ('en', 'offer') -> '/en/offer' */
export function pagePath(lang: Lang, page: Exclude<PageKey, 'notFound'>): string {
    const slug = slugs[page];
    if (lang === 'pl') return slug ? `/${slug}` : '/';
    return slug ? `/${lang}/${slug}` : `/${lang}`;
}

export const site = {
    url: 'https://zalasek.pl',
    phone: '+48889257869',
    phoneDisplay: '889 257 869',
    phone2: '+48889609853',
    phone2Display: '889 609 853',
    email: 'kontakt@zalasek.pl',
    email2: 'zalasek.minizoo@gmail.com',
    address: 'Dobra 98, 34-642 Dobra',
    lat: 49.723903,
    lng: 20.233586,
    instagram: 'https://www.instagram.com/zalasek_dobra/',
    instagramHandle: '@zalasek_dobra',
    facebook: 'https://www.facebook.com/zalasek',
    mapsPlace: 'https://maps.google.com/?cid=9024417473486942959',
    mapsDirections: 'https://www.google.com/maps/dir/?api=1&destination=49.723903,20.233586',
    mapsEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23161.194587563743!2d20.23598181770368!3d49.72426419629043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471605dd8c16b7e7%3A0x7d3d2be0f40472ef!2sNOCLEGI%20i%20MINIZOO%20Gospodarstwo%20Agroturystyczne%20Zalasek!5e0!3m2!1spl!2spl!4v1714592836848!5m2!1spl!2spl',
    booking: {
        pl: 'https://www.booking.com/hotel/pl/gospodarstwo-agroturystyczne-zalasek-dobra12.pl.html',
        en: 'https://www.booking.com/hotel/pl/gospodarstwo-agroturystyczne-zalasek-dobra12.en-gb.html',
        de: 'https://www.booking.com/hotel/pl/gospodarstwo-agroturystyczne-zalasek-dobra12.de.html',
    } satisfies Record<Lang, string>,
    rating: '9,8',
};
