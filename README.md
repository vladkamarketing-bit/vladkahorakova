# vladkahorakova.cz

Web Vladky Horákové – marketingová strategie, poradenství, kurzy a školení.
Designem navazuje na [vladkahorakova-weby.cz](https://www.vladkahorakova-weby.cz).

## Administrace

Na adrese `/admin/` se přihlásíte účtem GitHub. Upravíte tam:

- **Kurzy a školení** – přidání kurzu, termíny, ceny, program, skrytí kurzu
- **Služby** – texty jednotlivých služeb
- **Stránky a texty** – úvodní stránka, reference, FAQ, stránka kurzů, kontakty

Změny se uloží do tohoto repozitáře a web se sám znovu sestaví (asi do minuty).

## Formuláře

Kontaktní formulář i objednávky kurzů chodí přes FormSubmit na e-mail z nastavení
(`src/data/site.json`). Při prvním odeslání přijde od FormSubmit potvrzovací e-mail – je potřeba ho jednou potvrdit.

## Struktura

```
src/data/            texty úvodní stránky, stránky kurzů a kontakty (JSON)
src/content/sluzby/  služby – jeden soubor = jedna stránka /sluzby/<název>/
src/content/kurzy/   kurzy – jeden soubor = jedna stránka /kurzy/<název>/ s objednávkou
src/pages/oauth*     přihlášení do administrace přes GitHub
```

## Nasazení (Vercel)

Proměnné prostředí pro přihlášení do administrace (GitHub OAuth App):

- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

Callback URL v OAuth App: `https://<doména>/oauth/callback`

## Vývoj

```
npm install
npx astro dev
```
