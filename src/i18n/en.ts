import type pl from './pl';

const en: typeof pl = {
    lang: 'en',
    htmlLang: 'en',
    ogLocale: 'en_GB',
    languageName: 'English',

    nav: {
        home: 'Home',
        offer: 'Apartment & farm',
        gallery: 'Gallery',
        contact: 'Contact',
        book: 'Book',
        call: 'Call',
        menu: 'Menu',
        skip: 'Skip to content',
        language: 'Choose language',
        homeLink: 'Zalasek – home page',
    },

    common: {
        rating: '9.8',
        ratingWord: 'Exceptional',
        ratingSource: 'guest rating on Booking.com',
        readReviews: 'Read the reviews',
        checkDates: 'Check availability',
        bookingNote: 'Booking via Booking.com',
        callUs: 'Call us',
        writeUs: 'Email us',
        directions: 'Get directions',
        openMaps: 'Open in Google Maps',
        showMap: 'Show map',
        mapNote: 'The map loads from Google servers only after you click.',
        mapTitle: 'Map with directions to Zalasek farm',
        seeOffer: 'See the apartment and amenities',
        seeGallery: 'See the gallery',
        languages: 'We speak Polish, English and German.',
        instagram: 'Instagram',
        facebook: 'Facebook',
        approx: 'approx.',
    },

    meta: {
        home: {
            title: 'Zalasek – farm stay with alpacas | Dobra, Beskid Wyspowy, Poland',
            description:
                'A private 70 m² apartment (2 bedrooms, up to 6 guests) with a pool and mountain views. Petting zoo with alpacas, pets welcome. Dobra, Beskid Wyspowy mountains, southern Poland.',
        },
        offer: {
            title: 'Apartment with pool and alpaca petting zoo | Zalasek, Dobra',
            description:
                'A 70 m² apartment with its own entrance: 2 bedrooms, kitchen, bathroom with bath, terrace, pool and playground. Petting zoo, farm produce, outdoor cinema and the Beskid Wyspowy area.',
        },
        gallery: {
            title: 'Photo gallery – animals, landscapes and the apartment | Zalasek',
            description: 'Alpacas, Highland cattle, a peacock and other farm residents, Beskid Wyspowy views in every season and the apartment interior.',
        },
        contact: {
            title: 'Contact and directions – Zalasek, Dobra 98, Poland',
            description: 'Phone +48 889 257 869 or +48 889 609 853, email kontakt@zalasek.pl. Dobra 98, 34-642 Dobra, Poland. Map and GPS coordinates.',
        },
        privacy: {
            title: 'Privacy policy | Zalasek',
            description: 'What data we process when you use zalasek.pl or contact us.',
        },
        notFound: {
            title: 'Page not found | Zalasek',
            description: 'This page does not exist.',
        },
    },

    home: {
        heroTitle: 'A farm stay with alpacas in the Beskid Wyspowy mountains',
        heroLead: 'A whole apartment to yourselves, a pool with mountain views and animals outside the window. Dobra, at the foot of Mount Łopień.',
        facts: [
            { icon: 'house', title: 'Private apartment', text: '70 m², 2 bedrooms, up to 6 guests, own entrance' },
            { icon: 'waves', title: 'Pool and playground', text: 'Garden, terrace with a view, barbecue' },
            { icon: 'paw-print', title: 'Pets welcome', text: 'Bring your dog along' },
            { icon: 'square-parking', title: 'Parking and Wi-Fi', text: 'Free, on site' },
        ],
        animalsTitle: 'Meet the residents',
        animalsLead:
            'You can feed the alpacas and take them for a walk in the woods. You will also meet cows, a donkey, sheep, pigs, rabbits, a goat, chickens, peacocks, dogs and cats.',
        animals: {
            alpacas: 'Alpacas',
            cattle: 'Highland cattle',
            peacock: 'Peacock',
            donkey: 'Donkey',
            pigs: 'Pigs',
            rabbits: 'Rabbits',
            goat: 'Goat',
            kittens: 'Kittens',
        },
        apartmentTitle: 'An apartment for the whole family',
        apartmentText:
            'The ground floor of the house with its own entrance: two bedrooms, each with a double and a single bed, a fully equipped kitchen, a bathroom with bath and shower, and a terrace overlooking the garden and the mountains.',
        apartmentPoints: [
            'Cot, high chair and a play corner for children',
            'Dishwasher, washing machine, TV with streaming',
            'Board games, books and puzzles for rainy days',
        ],
        yearTitle: 'A year at Zalasek',
        yearLead: 'Every season brings something of its own.',
        year: [
            { icon: 'cherry', when: 'July', title: 'Raspberry picking', text: 'Raspberries straight from the bush.' },
            { icon: 'film', when: 'Summer', title: 'Outdoor cinema', text: 'Evening films under the open sky in the garden.' },
            { icon: 'flame', when: 'August', title: 'Bonfire and stars', text: 'Evenings by the fire under a starry sky.' },
            { icon: 'sprout', when: 'September', title: 'Grape harvest', text: 'Time to pick the grapes.' },
            { icon: 'trees', when: 'Autumn', title: 'Mushrooms in the forest', text: 'Bay boletes, slippery jacks and porcini right behind the house.' },
            { icon: 'snowflake', when: 'Winter', title: 'Snow and skiing', text: 'White pastures and good skiing conditions nearby.' },
        ],
        farmTitle: 'Straight from the farm',
        farmText:
            'We run an organic farm and treat our guests to our own produce: milk, cottage cheese, cream, butter, eggs and preserves. The Śnieżnica forest starts right next door – a great place for hiking and cycling.',
        instaTitle: 'More photos on Instagram',
        instaText: 'We share everyday farm life, the animals and the views on Instagram and Facebook.',
        areaTitle: 'Where we are',
        areaText: 'Dobra lies in the heart of the Beskid Wyspowy mountains, about 17 km from Mszana Dolna and about 70 km from Kraków airport.',
        finalTitle: 'Come and stay with us',
        finalText: 'Check available dates on Booking.com. We are happy to answer any questions by phone.',
        partnersTitle: 'Our partners',
    },

    offer: {
        title: 'Apartment & farm',
        lead: 'Everything you will find here: a fully equipped apartment, the petting zoo, farm produce and the surrounding area.',
        apartmentTitle: 'The apartment',
        apartmentText: [
            'We offer a private 70 m² apartment on the ground floor of the house, with its own entrance. It has two bedrooms – each with a double and a single bed, up to 6 guests in total – a fully equipped kitchen, a bathroom with bath and shower, and a terrace overlooking the garden and the mountains.',
            'Guests can use the pool, barbecue, playground, free Wi-Fi and free parking. We love animals and know how hard it is to leave them behind, so your pets are welcome too.',
        ],
        equipmentTitle: 'Amenities',
        equipment: [
            {
                title: 'Bedrooms',
                items: ['Bedroom 1: double and single bed', 'Bedroom 2: double and single bed', 'Extra-long beds (over 2 m)', 'Sofa bed and folding bed', 'Bed linen, wardrobe, hangers'],
            },
            {
                title: 'Kitchen',
                items: ['Fridge, oven, hob', 'Microwave and dishwasher', 'Kettle, tea and coffee set', 'Kitchenware and utensils', 'Dining table and dining area'],
            },
            { title: 'Bathroom', items: ['Bath and shower', 'Bidet and toilet', 'Towels', 'Hairdryer'] },
            {
                title: 'For children',
                items: ['Cot', 'High chair', 'Play corner with toys', 'Board games, puzzles and books', 'Outdoor playground'],
            },
            {
                title: 'Outdoors',
                items: ['Pool with mountain views', 'Terrace overlooking the garden', 'Garden furniture and outdoor dining area', 'Barbecue', 'Free private parking'],
            },
            {
                title: 'Other',
                items: ['Private entrance, ground floor', 'TV with streaming service', 'Free Wi-Fi', 'Washing machine, clothes dryer, iron', 'Heating and mosquito nets', 'Non-smoking property'],
            },
        ],
        zooTitle: 'Petting zoo',
        zooText: [
            'Animal lovers can go for a walk with our alpacas – a lovely way to explore the nearby woods.',
            'You can feed the alpacas and cows, stroke the cats and dogs and, with a bit of luck, see a peacock with its tail spread. Fun for children and adults alike.',
        ],
        farmTitle: 'Straight from the farm',
        farmText: [
            'Zalasek is an organic farm. We treat our guests to our own produce: milk, cottage cheese, cream, butter, eggs and preserves.',
            'In July we invite you to pick raspberries, and in September grapes. The nearby forest is full of berries and mushrooms – bay boletes, slippery jacks and porcini. Evenings are for the bonfire and the starry sky, especially in August.',
        ],
        cinemaTitle: 'Outdoor cinema',
        cinemaText: 'In summer we set up a cinema in the garden, so you can watch films with your loved ones under the open sky.',
        areaTitle: 'The area',
        areaText:
            'The farm is in Dobra, in the heart of the Beskid Wyspowy mountains, at the foot of Mount Łopień. The area is great for hiking and cycling, and for skiing in winter. Approximate distances:',
        distances: [
            ['Zajazd restaurant', '2 km'],
            ['Bike park', '15 km'],
            ['Marsów manor house', '16 km'],
            ['Parada riding stables, Limanowa', '17 km'],
            ['Mszana Dolna railway station', '17 km'],
            ['Wiśnicz Castle', '37 km'],
            ['Wieliczka Salt Mine', '41 km'],
            ['Kraków airport (KRK)', '70 km'],
        ],
        askTitle: 'Questions about dates?',
        askText: 'Call or email us – we will tell you whether the apartment is free and what we can prepare for your stay.',
    },

    gallery: {
        title: 'Gallery',
        lead: 'Photos from the farm in different seasons. Click a photo to enlarge it.',
        categories: {
            animals: 'Animals',
            seasons: 'Area and views',
            winter: 'Winter',
            home: 'House and apartment',
        },
        close: 'Close',
        prev: 'Previous photo',
        next: 'Next photo',
        moreOnInstagram: 'You will find more recent photos on Instagram.',
    },

    contact: {
        title: 'Contact',
        lead: 'Call or email us – we are happy to answer questions about available dates, staying with a dog or walking with the alpacas.',
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
        gps: 'GPS coordinates',
        region: 'Region',
        regionValue: 'Beskid Wyspowy mountains, Lesser Poland',
        languagesLabel: 'Languages',
        languagesValue: 'Polish, English, German',
        travelTitle: 'Getting here',
        travel: [
            'By car: free private parking on site.',
            'By train: the nearest station is Mszana Dolna, about 17 km away.',
            'By plane: Kraków airport (KRK), about 70 km away.',
        ],
        socialTitle: 'Follow us',
    },

    privacy: {
        title: 'Privacy policy',
        updated: 'Last updated: 2 November 2026',
        sections: [
            {
                h: 'Who is responsible for your data',
                p: [
                    'The data controller is Gospodarstwo Agroturystyczne Zalasek, Dobra 98, 34-642 Dobra, Poland. For any data protection matters, email kontakt@zalasek.pl or call +48 889 257 869.',
                ],
            },
            {
                h: 'What data we process',
                p: [
                    'This website has no forms, user accounts or analytics tools and does not set cookies.',
                    'When you email or call us, we process the data you give us (such as your name, email address, phone number and dates of stay) only to reply and arrange your stay (Art. 6(1)(b) and (f) GDPR). We keep correspondence for as long as needed to handle your enquiry and settle your stay.',
                ],
            },
            {
                h: 'Hosting',
                p: [
                    'The website is hosted by Cloudflare. Like any web server, Cloudflare technically processes your IP address and basic browser information to deliver the site and protect it from attacks.',
                ],
            },
            {
                h: 'Google Maps and external links',
                p: [
                    'The Google map on this site loads only after you click “Show map”. Google then receives your IP address and may set cookies under its own privacy policy.',
                    'Links to Booking.com, Facebook, Instagram and Google Maps lead to external services with their own data policies.',
                ],
            },
            {
                h: 'Your rights',
                p: [
                    'You have the right to access, rectify and erase your data, to restrict and object to processing, and to data portability. You can also lodge a complaint with the Polish supervisory authority, the President of the Personal Data Protection Office (uodo.gov.pl).',
                ],
            },
        ],
    },

    notFound: {
        title: 'Page not found',
        text: 'It may have moved, or there may be a typo in the address.',
        back: 'Go to the home page',
    },

    footer: {
        tagline: 'A real farm stay in the Beskid Wyspowy mountains',
        contact: 'Contact',
        pages: 'Pages',
        follow: 'Follow us',
        privacy: 'Privacy policy',
        madeBy: 'Website:',
    },

    alt: {
        aerial: 'Aerial view of Dobra, forests and the Beskid Wyspowy ranges',
        'alpaca-portrait': 'A white alpaca with a fluffy fringe looking at the camera',
        'highland-cattle': 'Two red Highland cows in a pasture with mountains behind',
        'highland-snow': 'A Highland cow with its nose in the snow',
        peacock: 'A peacock with its shimmering tail spread',
        'peacock-house': 'A peacock with its tail spread on the lawn in front of the house',
        donkey: 'A donkey in a snowy pasture in the sunshine',
        pigs: 'Black pigs with piglets in their pen',
        rabbits: 'Two rabbits, one grey and one ginger, on hay',
        goat: 'A brown goat resting in the barn',
        kittens: 'Kittens asleep in a wooden barrel among ferns',
        'cat-snow': 'A cat sitting on a fence post in the winter sun',
        'alpacas-meadow': 'A black and a white alpaca grazing on a green meadow',
        'alpacas-sun': 'A white and a brown alpaca on a meadow in the afternoon sun',
        'alpacas-frost': 'Alpacas on a frosty meadow at dawn',
        'alpacas-mist': 'Alpacas in a pasture with misty mountains behind',
        'alpacas-snow': 'Alpacas and a horse in a snowy pasture',
        'alpaca-donkey-snow': 'An alpaca and a donkey in the snow with mountain views',
        'alpacas-hay': 'Two alpacas eating hay in the pasture',
        'alpacas-horse-snow': 'Alpacas and a horse in a snowy pasture with mountain views',
        'dog-snow': 'A black dog playing in the snow',
        'house-flowers': 'The farmhouse behind a bed of flowering coneflowers',
        gazebo: 'A wooden gazebo with a table in the garden',
        'kitchen-wide': 'The apartment kitchen with oven and fridge, bedroom in the background',
        'kitchen-dining': 'Kitchen and dining room with a round table and a piano',
        kitchen: 'Kitchen with a gas hob and extractor hood',
        'dining-piano': 'Dining room with a piano and a wall clock',
        'window-winter': 'A wooden window with snow-covered spruces outside',
        'winter-village': 'The snowy village and farmhouse under a blue sky',
        'winter-panorama': 'Winter panorama of the Beskid Wyspowy mountains',
        sunset: 'Sunset over the mountains and the meadow',
        'winter-garden': 'The garden under a thick layer of snow',
        'garden-view': 'View from the garden to green hills',
        'winter-forest': 'Snow-covered spruces against the sky',
        'mountains-mist': 'Panorama of the Beskid Wyspowy mountains with mist in the valleys',
        'cows-dog': 'Cows and a dog in a green pasture',
        'winter-field': 'Snowy fields and forest around the farm',
        cinema: 'The outdoor cinema screen set up among the trees',
        dining: 'Dining room with a piano and old photographs on the wall',
        oven: 'Oven and microwave',
        games: 'Shelves with books, board games and puzzles',
        stove: 'A traditional coal stove next to a gas hob',
        'bedroom-1': 'Bed with a bedspread in the bedroom',
        'bedroom-2': 'Bed with drawers in the bedroom',
        'bedroom-3': 'A made bed with pillows',
        crib: 'Baby cot',
        'play-corner': 'Play corner with soft blocks and a toy kitchen',
        washer: 'Washing machine in the bathroom',
        logo: 'Zalasek',
    },
};

export default en;
