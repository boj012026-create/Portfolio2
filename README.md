# Portfolio – Jan Olav Berg

Personlig portfolio for en junior fullstack-utvikler som søker praksisplass i eller rundt Bergen.
Siden viser hvem jeg er og en håndfull prosjekter, hver med demo og kildekode.

## Teknologi

- Ren HTML, CSS og JavaScript, uten rammeverk og uten byggesteg
- Neumorfisk design styrt av CSS-variabler


## Kjøre lokalt

Åpne `index.html` i nettleseren, eller start en enkel server i mappen:

```bash
python3 -m http.server 8000
```

og gå til http://localhost:8000.

## Endre innhold

**E-post:** bytt `EMAIL` øverst i `main.js`. Alle lenker med klassen
`action-send-email` får adressen derfra.

**Legge til et prosjekt:**

1. Legg et skjermbilde i `assets/` med prosjektets id som filnavn, for eksempel `MittProsjekt.jpg`.
2. Legg til et objekt i listen `projects` i `main.js`:

```js
{
  id: 'MittProsjekt',          // repo-navn og bildefil
  title: 'Mitt prosjekt',
  description: 'Kort beskrivelse.',
  tags: ['React'],             // valgfritt
  account: 'Martialcart',      // valgfritt, hvis repoet ligger på en annen konto
  pageUrl: 'https://...',      // valgfritt, hvis demoen ikke ligger på GitHub Pages
}
```

Demo-lenken blir `https://<konto>.github.io/<id>/`, og kodelenken blir
`https://github.com/<konto>/<id>`.

## Design og CSS

- **Variabler:** avstander, farger, radius og skygger ligger øverst i `style.css`.
  Endre dem der for å justere hele siden.
- **Klassenavn:** hver del har egne navn i BEM-stil (`navbar__link`, `repo-card__title`).
- **Knapper:** `.btn` bestemmer utseendet, og `.action-*` sier hva knappen gjør.
  `action-*`-klassene har ingen stil og brukes av JavaScript.
- **Brytningspunkt:** ett punkt for mobil og pc, ved 52rem.
