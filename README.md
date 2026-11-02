# zalasek.pl

Strona gospodarstwa agroturystycznego Zalasek, zbudowana w [Astro](https://astro.build) i hostowana na Cloudflare Pages.

## Uruchomienie

Potrzebny jest Node.js w wersji 22.23 lub nowszej (najlepiej 24).

```bash
npm install
npm run dev      # podgląd na http://localhost:4321
npm run build    # gotowa strona w folderze dist/
npm run preview  # podgląd zbudowanej wersji
```

## Gdzie co jest

| Co chcesz zmienić | Plik |
|---|---|
| Teksty (PL / EN / DE), opisy zdjęć | `src/i18n/pl.ts`, `en.ts`, `de.ts` |
| Telefon, e-mail, linki do Bookingu, Instagrama, mapy | `src/i18n/config.ts` (`site`) |
| Kolory, czcionki, wygląd | `src/styles/global.css` |
| Układ poszczególnych stron | `src/views/*.astro` |
| Nagłówek, stopka, mapa, ikony | `src/components/*.astro` |
| Zdjęcia | `src/assets/photos/`, `src/assets/apartment/` |
| Kolejność zdjęć w galerii | `src/data/photos.ts` |

Strony w `src/pages/` tylko wywołują widoki z odpowiednim językiem.

## Dodanie zdjęcia

1. Wrzuć plik `.jpg` do `src/assets/photos/`, np. `basen-latem.jpg` (bez polskich znaków i spacji).
2. Dodaj opis (alt) w `src/i18n/pl.ts`, `en.ts` i `de.ts` w sekcji `alt`, np. `'basen-latem': 'Basen latem z widokiem na góry'`.
3. Dopisz nazwę w odpowiedniej grupie w `src/data/photos.ts`, żeby pojawiło się w galerii.

Astro samo przygotuje mniejsze wersje w formatach AVIF i WebP.

## Cloudflare Pages

Ustawienia budowania (Settings → Build):

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Wersja Node pochodzi z pliku `.node-version`.
