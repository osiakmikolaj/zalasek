import type pl from './pl';

const de: typeof pl = {
    lang: 'de',
    htmlLang: 'de',
    ogLocale: 'de_DE',
    languageName: 'Deutsch',

    nav: {
        home: 'Start',
        offer: 'Apartment & Hof',
        gallery: 'Galerie',
        contact: 'Kontakt',
        book: 'Buchen',
        call: 'Anrufen',
        menu: 'Menü',
        skip: 'Zum Inhalt springen',
        language: 'Sprache wählen',
        homeLink: 'Zalasek – Startseite',
    },

    common: {
        rating: '9,8',
        ratingWord: 'Hervorragend',
        ratingSource: 'Gästebewertung auf Booking.com',
        readReviews: 'Bewertungen lesen',
        checkDates: 'Verfügbarkeit prüfen',
        bookingNote: 'Buchung über Booking.com',
        callUs: 'Anrufen',
        writeUs: 'E-Mail schreiben',
        directions: 'Route planen',
        openMaps: 'In Google Maps öffnen',
        showMap: 'Karte anzeigen',
        mapNote: 'Die Karte wird erst nach einem Klick von Google-Servern geladen.',
        mapTitle: 'Anfahrtskarte zum Hof Zalasek',
        seeOffer: 'Apartment und Ausstattung ansehen',
        seeGallery: 'Zur Galerie',
        languages: 'Wir sprechen Polnisch, Englisch und Deutsch.',
        instagram: 'Instagram',
        facebook: 'Facebook',
        approx: 'ca.',
    },

    meta: {
        home: {
            title: 'Zalasek – Urlaub auf dem Bauernhof mit Alpakas | Dobra, Beskid Wyspowy, Polen',
            description:
                'Privates Apartment mit 70 m² (2 Schlafzimmer, bis zu 6 Personen) mit Pool und Bergblick. Streichelzoo mit Alpakas, Haustiere willkommen. Dobra, Beskid Wyspowy, Südpolen.',
        },
        offer: {
            title: 'Apartment mit Pool und Alpaka-Streichelzoo | Zalasek, Dobra',
            description:
                'Apartment mit 70 m² und eigenem Eingang: 2 Schlafzimmer, Küche, Bad mit Wanne, Terrasse, Pool und Spielplatz. Streichelzoo, Produkte vom Hof, Freiluftkino und die Umgebung.',
        },
        gallery: {
            title: 'Fotogalerie – Tiere, Landschaft und Apartment | Zalasek',
            description: 'Alpakas, Hochlandrinder, ein Pfau und andere Hofbewohner, Ausblicke auf die Beskid Wyspowy zu jeder Jahreszeit und das Apartment.',
        },
        contact: {
            title: 'Kontakt und Anfahrt – Zalasek, Dobra 98, Polen',
            description: 'Tel. +48 889 257 869 oder +48 889 609 853, E-Mail kontakt@zalasek.pl. Dobra 98, 34-642 Dobra, Polen. Karte und GPS-Koordinaten.',
        },
        privacy: {
            title: 'Datenschutzerklärung | Zalasek',
            description: 'Welche Daten wir verarbeiten, wenn Sie zalasek.pl nutzen oder uns kontaktieren.',
        },
        notFound: {
            title: 'Seite nicht gefunden | Zalasek',
            description: 'Diese Seite existiert nicht.',
        },
    },

    home: {
        heroTitle: 'Bauernhof mit Alpakas in den Bergen der Beskid Wyspowy',
        heroLead: 'Ein ganzes Apartment nur für Sie, ein Pool mit Bergblick und Tiere vor dem Fenster. Dobra, am Fuße des Łopień.',
        facts: [
            { icon: 'house', title: 'Privates Apartment', text: '70 m², 2 Schlafzimmer, bis zu 6 Personen, eigener Eingang' },
            { icon: 'waves', title: 'Pool und Spielplatz', text: 'Garten, Terrasse mit Ausblick, Grill' },
            { icon: 'paw-print', title: 'Haustiere willkommen', text: 'Bringen Sie Ihren Hund mit' },
            { icon: 'square-parking', title: 'Parkplatz und WLAN', text: 'Kostenlos, vor Ort' },
        ],
        animalsTitle: 'Unsere Hofbewohner',
        animalsLead:
            'Die Alpakas dürfen Sie füttern und bei einem Spaziergang in den Wald begleiten. Außerdem leben bei uns Kühe, ein Esel, Schafe, Schweine, Kaninchen, eine Ziege, Hühner, Pfauen, Hunde und Katzen.',
        animals: {
            alpacas: 'Alpakas',
            cattle: 'Hochlandrinder',
            peacock: 'Pfau',
            donkey: 'Esel',
            pigs: 'Schweine',
            rabbits: 'Kaninchen',
            goat: 'Ziege',
            kittens: 'Kätzchen',
        },
        apartmentTitle: 'Ein Apartment für die ganze Familie',
        apartmentText:
            'Das Erdgeschoss des Hauses mit eigenem Eingang: zwei Schlafzimmer mit je einem Doppel- und einem Einzelbett, eine voll ausgestattete Küche, ein Bad mit Wanne und Dusche sowie eine Terrasse mit Blick auf Garten und Berge.',
        apartmentPoints: [
            'Kinderbett, Hochstuhl und Spielecke für Kinder',
            'Geschirrspüler, Waschmaschine, TV mit Streaming',
            'Brettspiele, Bücher und Puzzles für Regentage',
        ],
        yearTitle: 'Ein Jahr auf dem Hof Zalasek',
        yearLead: 'Jede Jahreszeit hat hier etwas Eigenes.',
        year: [
            { icon: 'cherry', when: 'Juli', title: 'Himbeerernte', text: 'Himbeeren direkt vom Strauch.' },
            { icon: 'film', when: 'Sommer', title: 'Freiluftkino', text: 'Filme am Abend unter freiem Himmel im Garten.' },
            { icon: 'flame', when: 'August', title: 'Lagerfeuer und Sterne', text: 'Abende am Feuer unter dem Sternenhimmel.' },
            { icon: 'sprout', when: 'September', title: 'Weinlese', text: 'Zeit für die Traubenernte.' },
            { icon: 'trees', when: 'Herbst', title: 'Pilze im Wald', text: 'Maronenröhrlinge, Butterpilze und Steinpilze direkt hinter dem Haus.' },
            { icon: 'snowflake', when: 'Winter', title: 'Schnee und Skifahren', text: 'Weiße Weiden und gute Skibedingungen in der Nähe.' },
        ],
        farmTitle: 'Direkt vom Hof',
        farmText:
            'Wir betreiben einen ökologischen Hof und verwöhnen unsere Gäste mit eigenen Produkten: Milch, Quark, Sahne, Butter, Eiern und Eingemachtem. Gleich nebenan beginnt der Wald von Śnieżnica – ideal zum Wandern und Radfahren.',
        instaTitle: 'Mehr Fotos auf Instagram',
        instaText: 'Den Alltag auf dem Hof, die Tiere und die Ausblicke zeigen wir auf Instagram und Facebook.',
        areaTitle: 'Wo wir sind',
        areaText: 'Dobra liegt im Herzen der Beskid Wyspowy, ca. 17 km von Mszana Dolna und ca. 70 km vom Flughafen Krakau entfernt.',
        finalTitle: 'Besuchen Sie uns',
        finalText: 'Freie Termine finden Sie auf Booking.com. Fragen beantworten wir gerne telefonisch.',
        partnersTitle: 'Unsere Partner',
    },

    offer: {
        title: 'Apartment & Hof',
        lead: 'Alles, was Sie bei uns erwartet: ein voll ausgestattetes Apartment, der Streichelzoo, Produkte vom Hof und die Umgebung.',
        apartmentTitle: 'Das Apartment',
        apartmentText: [
            'Wir bieten ein privates Apartment mit 70 m² im Erdgeschoss des Hauses, mit eigenem Eingang. Es hat zwei Schlafzimmer – jeweils mit Doppel- und Einzelbett, insgesamt bis zu 6 Personen –, eine voll ausgestattete Küche, ein Bad mit Wanne und Dusche sowie eine Terrasse mit Blick auf Garten und Berge.',
            'Unsere Gäste können Pool, Grill, Spielplatz, kostenloses WLAN und kostenlose Parkplätze nutzen. Wir lieben Tiere und wissen, wie schwer es fällt, sie zurückzulassen – deshalb sind Ihre Haustiere bei uns willkommen.',
        ],
        equipmentTitle: 'Ausstattung',
        equipment: [
            {
                title: 'Schlafzimmer',
                items: ['Schlafzimmer 1: Doppel- und Einzelbett', 'Schlafzimmer 2: Doppel- und Einzelbett', 'Extralange Betten (über 2 m)', 'Schlafsofa und Klappbett', 'Bettwäsche, Kleiderschrank, Kleiderbügel'],
            },
            {
                title: 'Küche',
                items: ['Kühlschrank, Backofen, Kochfeld', 'Mikrowelle und Geschirrspüler', 'Wasserkocher, Kaffee- und Teeset', 'Geschirr und Küchenutensilien', 'Esstisch und Essbereich'],
            },
            { title: 'Bad', items: ['Badewanne und Dusche', 'Bidet und WC', 'Handtücher', 'Haartrockner'] },
            {
                title: 'Für Kinder',
                items: ['Kinderbett', 'Hochstuhl', 'Spielecke mit Spielzeug', 'Brettspiele, Puzzles und Bücher', 'Spielplatz im Freien'],
            },
            {
                title: 'Draußen',
                items: ['Pool mit Bergblick', 'Terrasse mit Gartenblick', 'Gartenmöbel und Essbereich im Freien', 'Grill', 'Kostenloser privater Parkplatz'],
            },
            {
                title: 'Sonstiges',
                items: ['Eigener Eingang, Erdgeschoss', 'TV mit Streamingdienst', 'Kostenloses WLAN', 'Waschmaschine, Wäschetrockner, Bügeleisen', 'Heizung und Moskitonetze', 'Nichtraucherunterkunft'],
            },
        ],
        zooTitle: 'Streichelzoo',
        zooText: [
            'Für Tierfreunde bieten wir Spaziergänge mit unseren Alpakas an – eine schöne Art, die Wälder in der Umgebung zu entdecken.',
            'Alpakas und Kühe dürfen gefüttert, Katzen und Hunde gestreichelt werden, und mit etwas Glück sehen Sie einen Pfau, der sein Rad schlägt. Ein Erlebnis für Kinder und Erwachsene.',
        ],
        farmTitle: 'Direkt vom Hof',
        farmText: [
            'Zalasek ist ein ökologischer Bauernhof. Wir verwöhnen unsere Gäste mit eigenen Produkten: Milch, Quark, Sahne, Butter, Eiern und Eingemachtem.',
            'Im Juli laden wir zur Himbeerernte ein, im September zur Weinlese. Der nahe Wald ist reich an Beeren und Pilzen – Maronenröhrlinge, Butterpilze und Steinpilze. Die Abende gehören dem Lagerfeuer und dem Sternenhimmel, besonders im August.',
        ],
        cinemaTitle: 'Freiluftkino',
        cinemaText: 'Im Sommer veranstalten wir ein Kino im Garten – Filme mit Ihren Liebsten unter freiem Himmel.',
        areaTitle: 'Die Umgebung',
        areaText:
            'Der Hof liegt in Dobra, im Herzen der Beskid Wyspowy, am Fuße des Łopień. Die Gegend eignet sich zum Wandern und Radfahren, im Winter zum Skifahren. Entfernungen ca.:',
        distances: [
            ['Restaurant Zajazd', '2 km'],
            ['Fahrrad-Park', '15 km'],
            ['Gutshof Marsów', '16 km'],
            ['Reitstall Parada, Limanowa', '17 km'],
            ['Bahnhof Mszana Dolna', '17 km'],
            ['Schloss Wiśnicz', '37 km'],
            ['Salzbergwerk Wieliczka', '41 km'],
            ['Flughafen Krakau (KRK)', '70 km'],
        ],
        askTitle: 'Fragen zum Termin?',
        askText: 'Rufen Sie an oder schreiben Sie uns – wir sagen Ihnen, ob das Apartment frei ist und was wir für Ihren Aufenthalt vorbereiten können.',
    },

    gallery: {
        title: 'Galerie',
        lead: 'Fotos vom Hof zu verschiedenen Jahreszeiten. Klicken Sie auf ein Foto, um es zu vergrößern.',
        categories: {
            animals: 'Tiere',
            seasons: 'Umgebung und Ausblicke',
            winter: 'Winter',
            home: 'Haus und Apartment',
        },
        close: 'Schließen',
        prev: 'Vorheriges Foto',
        next: 'Nächstes Foto',
        moreOnInstagram: 'Aktuellere Fotos finden Sie auf Instagram.',
    },

    contact: {
        title: 'Kontakt',
        lead: 'Rufen Sie an oder schreiben Sie uns – wir beantworten gerne Fragen zu freien Terminen, zum Aufenthalt mit Hund oder zu Spaziergängen mit den Alpakas.',
        phone: 'Telefon',
        email: 'E-Mail',
        address: 'Adresse',
        gps: 'GPS-Koordinaten',
        region: 'Region',
        regionValue: 'Beskid Wyspowy, Kleinpolen',
        languagesLabel: 'Sprachen',
        languagesValue: 'Polnisch, Englisch, Deutsch',
        travelTitle: 'Anreise',
        travel: [
            'Mit dem Auto: kostenloser privater Parkplatz vor Ort.',
            'Mit dem Zug: nächster Bahnhof Mszana Dolna, ca. 17 km.',
            'Mit dem Flugzeug: Flughafen Krakau (KRK), ca. 70 km.',
        ],
        socialTitle: 'Folgen Sie uns',
    },

    privacy: {
        title: 'Datenschutzerklärung',
        updated: 'Zuletzt aktualisiert: 2. November 2026',
        sections: [
            {
                h: 'Verantwortlicher',
                p: [
                    'Verantwortlich für die Datenverarbeitung ist Gospodarstwo Agroturystyczne Zalasek, Dobra 98, 34-642 Dobra, Polen. Bei Fragen zum Datenschutz schreiben Sie an kontakt@zalasek.pl oder rufen Sie +48 889 257 869 an.',
                ],
            },
            {
                h: 'Welche Daten wir verarbeiten',
                p: [
                    'Diese Website hat keine Formulare, Benutzerkonten oder Analysewerkzeuge und setzt keine Cookies.',
                    'Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir die Daten, die Sie uns mitteilen (z. B. Name, E-Mail-Adresse, Telefonnummer, Reisezeitraum), ausschließlich, um zu antworten und Ihren Aufenthalt zu organisieren (Art. 6 Abs. 1 lit. b und f DSGVO). Die Korrespondenz bewahren wir so lange auf, wie es für Ihre Anfrage und die Abrechnung erforderlich ist.',
                ],
            },
            {
                h: 'Hosting',
                p: [
                    'Die Website wird von Cloudflare gehostet. Wie jeder Webserver verarbeitet Cloudflare technisch Ihre IP-Adresse und grundlegende Browserinformationen, um die Seite auszuliefern und vor Angriffen zu schützen.',
                ],
            },
            {
                h: 'Google Maps und externe Links',
                p: [
                    'Die Google-Karte auf dieser Seite wird erst geladen, wenn Sie auf „Karte anzeigen“ klicken. Dann erhält Google Ihre IP-Adresse und kann gemäß seiner eigenen Datenschutzerklärung Cookies setzen.',
                    'Links zu Booking.com, Facebook, Instagram und Google Maps führen zu externen Diensten mit eigenen Datenschutzbestimmungen.',
                ],
            },
            {
                h: 'Ihre Rechte',
                p: [
                    'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem können Sie sich bei der polnischen Datenschutzbehörde (Prezes Urzędu Ochrony Danych Osobowych, uodo.gov.pl) beschweren.',
                ],
            },
        ],
    },

    notFound: {
        title: 'Seite nicht gefunden',
        text: 'Vielleicht wurde sie verschoben, oder die Adresse enthält einen Tippfehler.',
        back: 'Zur Startseite',
    },

    footer: {
        tagline: 'Echter Urlaub auf dem Bauernhof in der Beskid Wyspowy',
        contact: 'Kontakt',
        pages: 'Seiten',
        follow: 'Folgen Sie uns',
        privacy: 'Datenschutz',
        madeBy: 'Website:',
    },

    alt: {
        aerial: 'Luftaufnahme von Dobra, Wäldern und den Bergketten der Beskid Wyspowy',
        'alpaca-portrait': 'Ein weißes Alpaka mit flauschigem Pony blickt in die Kamera',
        'highland-cattle': 'Zwei rote Hochlandrinder auf der Weide vor den Bergen',
        'highland-snow': 'Ein Hochlandrind mit der Nase im Schnee',
        peacock: 'Ein Pfau mit aufgefächertem, schillerndem Rad',
        'peacock-house': 'Ein Pfau schlägt auf dem Rasen vor dem Haus ein Rad',
        donkey: 'Ein Esel auf einer verschneiten Weide in der Sonne',
        pigs: 'Schwarze Schweine mit Ferkeln im Gehege',
        rabbits: 'Zwei Kaninchen, ein graues und ein rotes, im Heu',
        goat: 'Eine braune Ziege ruht im Stall',
        kittens: 'Kätzchen schlafen in einem Holzfass zwischen Farnen',
        'cat-snow': 'Eine Katze sitzt in der Wintersonne auf einem Zaunpfosten',
        'alpacas-meadow': 'Ein schwarzes und ein weißes Alpaka grasen auf einer grünen Wiese',
        'alpacas-sun': 'Ein weißes und ein braunes Alpaka auf der Wiese in der Nachmittagssonne',
        'alpacas-frost': 'Alpakas auf einer bereiften Wiese im Morgengrauen',
        'alpacas-mist': 'Alpakas auf der Weide, dahinter Berge im Nebel',
        'alpacas-snow': 'Alpakas und ein Pferd auf einer verschneiten Weide',
        'alpaca-donkey-snow': 'Ein Alpaka und ein Esel im Schnee mit Bergblick',
        'alpacas-hay': 'Zwei Alpakas fressen Heu auf der Weide',
        'alpacas-horse-snow': 'Alpakas und ein Pferd auf einer verschneiten Weide mit Bergblick',
        'dog-snow': 'Ein schwarzer Hund spielt im Schnee',
        'house-flowers': 'Das Bauernhaus hinter einem Beet mit blühendem Sonnenhut',
        gazebo: 'Eine Holzlaube mit Tisch im Garten',
        'kitchen-wide': 'Die Küche des Apartments mit Backofen und Kühlschrank, dahinter das Schlafzimmer',
        'kitchen-dining': 'Küche und Esszimmer mit rundem Tisch und Klavier',
        kitchen: 'Küche mit Gaskochfeld und Dunstabzug',
        'dining-piano': 'Esszimmer mit Klavier und Wanduhr',
        'window-winter': 'Ein Holzfenster mit verschneiten Fichten draußen',
        'winter-village': 'Das verschneite Dorf und das Bauernhaus unter blauem Himmel',
        'winter-panorama': 'Winterpanorama der Beskid Wyspowy',
        sunset: 'Sonnenuntergang über Bergen und Wiese',
        'winter-garden': 'Der Garten unter einer dicken Schneedecke',
        'garden-view': 'Blick vom Garten auf grüne Hügel',
        'winter-forest': 'Verschneite Fichten vor dem Himmel',
        'mountains-mist': 'Panorama der Beskid Wyspowy mit Nebel in den Tälern',
        'cows-dog': 'Kühe und ein Hund auf einer grünen Weide',
        'winter-field': 'Verschneite Felder und Wald rund um den Hof',
        cinema: 'Die Leinwand des Freiluftkinos zwischen den Bäumen',
        dining: 'Esszimmer mit Klavier und alten Fotografien an der Wand',
        oven: 'Backofen und Mikrowelle',
        games: 'Regal mit Büchern, Brettspielen und Puzzles',
        stove: 'Ein traditioneller Kohleherd neben einem Gaskochfeld',
        'bedroom-1': 'Bett mit Tagesdecke im Schlafzimmer',
        'bedroom-2': 'Bett mit Schubladen im Schlafzimmer',
        'bedroom-3': 'Ein bezogenes Bett mit Kissen',
        crib: 'Kinderbett',
        'play-corner': 'Spielecke mit weichen Bausteinen und Spielküche',
        washer: 'Waschmaschine im Bad',
        logo: 'Zalasek',
    },
};

export default de;
