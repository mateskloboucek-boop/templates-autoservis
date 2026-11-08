# Dílna 28 — šablona webu autoservisu

Responzivní jednostránkový web pro autoservis. Postavený v čistém HTML, CSS a JavaScriptu bez instalace balíčků. Vizuální směr je inspirovaný skutečnou dílnou: střídmá typografie, pracovní fotografie, přímé texty a jasný kontakt.

## Spuštění

Otevřete `index.html` v prohlížeči. Pro vývoj ve VS Code lze použít libovolný lokální HTTP server.

## Publikování přes GitHub Pages

Soubory webu (`index.html`, `styles.css` a `script.js`) jsou v kořeni repozitáře. Na GitHubu otevřete **Settings → Pages** a v části **Build and deployment** nastavte:

- **Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/(root)`

Po uložení bude web dostupný na adrese `https://mateskloboucek-boop.github.io/4/` (název účtu nebo repozitáře v adrese změňte, pokud se liší). Publikace po odeslání změn na GitHub může několik minut trvat.

## Před předáním konkrétnímu servisu upravte

- Název, logo, město, adresu, telefon a otevírací dobu v `index.html`.
- Rozsah služeb, popisy a texty podle skutečného provozu.
- Fotografie: nyní se načítají z Unsplash jako ukázkové snímky. Ideálně je nahraďte vlastními fotkami dílny a týmu; ověřte si licenci a případné požadavky na uvedení autora.
- Formulář v `script.js`: aktuálně pouze ukazuje potvrzení v prohlížeči, poptávku nikam neposílá. Před nasazením jej napojte na e-mail, backend nebo rezervační systém.
- Informace o zpracování osobních údajů podle skutečného způsobu provozu.

Telefon, adresa, název a popisy v ukázce jsou smyšlené. Google Fonts i demonstrační fotografie vyžadují internetové připojení.
