# WebCraft Portfolio

Portofoliu static premium pentru prezentarea serviciilor WebCraft și a patru concepte vizuale distincte, construite pentru nișe diferite: restaurant, corporate, fashion e-commerce și cabinet de avocatură.

Proiectul este realizat integral în HTML, CSS și JavaScript vanilla, fără build step, fără framework și fără dependințe locale de instalat.

## Ce conține

| Fișier | Rol |
| --- | --- |
| `index.html` | Pagina principală a portofoliului WebCraft |
| `portfolio.html` | Redirect compatibil către pagina principală |
| `1-restaurant-la-dolce-vita.html` | Concept premium pentru restaurant / fine dining |
| `2-nexus-corp.html` | Concept corporate pentru consultanță strategică |
| `3-velvet-store.html` | Concept e-commerce fashion / catalog premium |
| `4-lex-partner.html` | Concept pentru cabinet de avocatură |
| `forms.js` | Logică reutilizabilă pentru trimiterea formularelor prin FormSubmit |

## Ce oferă proiectul

- 5 pagini statice, independente, ușor de prezentat sau adaptat
- direcții vizuale complet diferite pentru fiecare industrie
- layout responsive pentru desktop, tabletă și mobil
- animații și micro-interacțiuni în JavaScript vanilla
- formulare trimise asincron, fără refresh de pagină
- elemente SEO de bază: meta tags, Open Graph și JSON-LD
- navigație mobilă cu stare deschis/închis și suport pentru tasta `Escape`

## Structura proiectului

```text
.
├── README.md
├── index.html
├── portfolio.html
├── 1-restaurant-la-dolce-vita.html
├── 2-nexus-corp.html
├── 3-velvet-store.html
├── 4-lex-partner.html
└── forms.js
```

## Stack real din repo

Acest repository folosește:

- HTML5
- CSS inline în fiecare pagină
- JavaScript vanilla
- `fetch()` pentru formulare
- FormSubmit pentru trimiterea mesajelor

Important:
Textul din portofoliu menționează și alte tehnologii precum React, Next.js, WordPress sau Supabase, dar acestea sunt prezentate ca parte din oferta WebCraft, nu ca stack folosit efectiv în acest repo.

## Cum pornești proiectul local

Nu ai nevoie de `npm install` sau alt setup.

1. Intră în folderul proiectului:

```bash
cd /Users/lidiadobos/Desktop/webcraft
```

2. Pornește un server static local:

```bash
python3 -m http.server 8000
```

3. Deschide în browser:

```text
http://localhost:8000/
```

Dacă vrei doar o verificare rapidă, poți deschide și fișierele HTML direct în browser, dar pentru testarea formularelor și a comportamentului apropiat de producție este recomandat un server local.

## Pagina principală

Punctul de intrare al proiectului este `index.html`, unde găsești:

- hero section cu efecte animate și call-to-action
- secțiuni pentru servicii, proces, portofoliu, prețuri și tehnologii
- formular principal de contact
- linkuri către cele 4 pagini demo

## Pagini demo incluse

### 1. La Dolce Vita

Concept de restaurant premium cu:

- meniu de sezon
- galerie atmosferică
- formular de rezervare
- testimoniale

### 2. Nexus Corp

Concept corporate pentru consultanță, axat pe:

- poziționare executivă
- servicii și proces de lucru
- prezentare business curată
- secțiune finală de tip CTA

### 3. Velvet Store

Concept de magazin online fashion cu:

- listare produse și filtre vizuale
- secțiune featured collection
- bară de asigurări comerciale
- formular newsletter

### 4. Lex Partner

Concept juridic premium cu:

- servicii și arii de practică
- testimoniale
- date de contact structurate
- formular pentru evaluare inițială

## Formulare și integrarea cu FormSubmit

Formularele din proiect folosesc `forms.js`, care:

- caută automat orice formular cu atributul `data-formsubmit`
- trimite datele prin `fetch()` către endpoint-ul FormSubmit
- afișează mesaje de loading, succes și eroare
- dezactivează temporar butonul de submit în timpul trimiterii

În acest moment, formularele trimit către:

```text
https://formsubmit.co/lidiadobos03@gmail.com
```

Dacă vrei să schimbi adresa de destinație, înlocuiește această valoare în paginile care conțin formulare:

- `index.html`
- `1-restaurant-la-dolce-vita.html`
- `3-velvet-store.html`
- `4-lex-partner.html`

Notă:
La prima utilizare a FormSubmit, serviciul poate cere confirmarea adresei de email din inbox înainte ca formularele să funcționeze complet.

## Resurse externe folosite

Proiectul se bazează pe câteva resurse livrate extern:

- Google Fonts pentru fonturile de display și text
- imagini hostate pe Unsplash
- FormSubmit pentru trimiterea formularelor

Asta înseamnă că pentru experiența completă este nevoie de conexiune la internet.

## Personalizare rapidă

Dacă vrei să adaptezi proiectul pentru un client sau pentru propriul brand, cele mai importante zone de modificat sunt:

- textele de brand, contact și ofertă din fiecare pagină HTML
- culorile și fonturile definite în `:root` în fiecare fișier
- imaginile de fundal din variabilele CSS
- adresele de email și subiectele formularelor
- linkurile interne dintre proiecte

Fiindcă stilurile sunt incluse direct în fiecare pagină, fiecare demo poate fi editat independent, fără să afecteze restul showcase-ului.

## Publicare

Proiectul poate fi publicat pe orice hosting de fișiere statice:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- hosting clasic cu upload FTP / cPanel

Nu există comandă de build.

Pagina principală este deja servită automat din `index.html`, deci proiectul este pregătit pentru GitHub Pages direct din rădăcina repo-ului.

## Observații utile

- Repo-ul nu are momentan structură de tip componentă sau assets separate; totul este self-contained.
- Fiecare pagină include propriul stil și propriile interacțiuni JS inline.
- `forms.js` este singurul fișier JavaScript comun între mai multe pagini.

## Potrivit pentru

Acest proiect este bun ca:

- portofoliu de prezentare pentru web design
- bază de plecare pentru site-uri demo pe nișe diferite
- showcase pentru vânzare de servicii web
- colecție de landing pages statice premium
