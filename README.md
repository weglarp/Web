# Strona o OT i automatyce — Piotr Węglarski

To repo zawiera prostą, responsywną stronę WWW (HTML/CSS/JS) z motywem jasnym/ciemnym.

## Struktura

```
ot_site/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── logo.svg
    ├── hero.svg
    └── favicon.svg
```

## Uruchomienie lokalne

Otwórz `index.html` w przeglądarce.

## Publikacja (3 proste opcje)

### 1) GitHub Pages
1. Utwórz repozytorium, np. `ot-website`.
2. Skopiuj pliki do repo i zrób `Commit`.
3. W ustawieniach repo → **Pages** → **Deploy from branch** → wybierz `main` i katalog `/root`.
4. Po chwili strona będzie dostępna pod adresem `https://twoj-login.github.io/ot-website/`.

### 2) Netlify (drag & drop)
1. Wejdź na https://app.netlify.com/drop i upuść folder `ot_site`.
2. Gotowe — otrzymasz publiczny URL.

### 3) Azure Static Web Apps
1. W Azure Portal utwórz **Static Web App**.
2. Połącz z repo (lub wybierz upload) i wskaż katalog źródłowy (`/`).
3. Zatwierdź — wdrożenie ruszy automatycznie.

## Dostosowanie
- Zmień meta tagi w `<head>` dla SEO.
- Podmień `mailto:` w sekcji Kontakt na swój email lub skonfiguruj usługę formularza.
- Edytuj sekcje, projekty i wpisy blogowe zgodnie z potrzebami.

## Licencja
MIT — używaj, modyfikuj, publikuj bez ograniczeń.
