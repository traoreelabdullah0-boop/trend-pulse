# Déploiement de Trend Pulse — Healthy Lifestyle

Guide de déploiement sur un hébergement gratuit avec **contrôle complet du HTML public**.

---

## 1. Ce que contient le projet

### Fichiers sources

| Fichier | Rôle |
|---|---|
| `index.html` | Point d'entrée Vite. **C'est ici que se trouvent le titre, la méta-description et les métadonnées.** |
| `src/main.tsx` | Amorçage React |
| `src/App.tsx` | Application complète (5 sections, calculateurs, lecteur d'ebooks, réseaux sociaux) |
| `src/i18n.tsx` | Dictionnaire de traduction FR / EN |
| `src/data/content.ts` | 4 articles bilingues + 3 vidéos |
| `src/data/ebooks.ts` | 4 ebooks (détox FR/EN, sommeil FR/EN), 4 pages chacun |
| `src/pdf/ebookPdf.ts` | Générateur de PDF (jsPDF chargé à la demande) |
| `src/index.css` | Tailwind CSS + styles de base |

### Fichiers de déploiement (créés automatiquement)

| Fichier | Rôle |
|---|---|
| `netlify.toml` | Configuration Netlify (commande de build, dossier `dist`, Node 20) |
| `public/_redirects` | Repli SPA — compatible Netlify **et** Cloudflare Pages |
| `public/_headers` | En-têtes HTTP de sécurité — compatible Netlify **et** Cloudflare Pages |
| `public/robots.txt` | Autorisation d'indexation |

---

## 2. Commandes

```bash
npm install      # installe les dépendances
npm run build    # génère le dossier dist/
npm run preview  # prévisualisation locale du build
```

**Dépendances** : `react`, `react-dom`, `lucide-react` (icônes), `clsx` + `tailwind-merge` (utilitaires), `jspdf` (PDF).

---

## 3. Contenu du dossier `dist/` après le build

```
dist/
├── index.html    ← fichier unique et autonome (≈ 343 Ko)
├── _headers
├── _redirects
└── robots.txt
```

**Point important :** le projet utilise le plugin `vite-plugin-singlefile`.
Ce plugin **intègre tout le JavaScript et tout le CSS directement à l'intérieur du fichier `index.html`**.

Conséquences :
- Il n'y a **pas** de fichier `.js` ni `.css` séparé dans `dist/`. C'est normal et voulu.
- Le site fonctionne avec **un seul fichier** : vous pouvez le déplacer seul et il marchera.
- Le HTML est 100 % sous votre contrôle : vous pouvez modifier le `<head>` à la main.

**Ressources externes chargées à l'exécution :**
- `images.unsplash.com` — les 4 images d'articles
- `cdnjs.cloudflare.com` — la bibliothèque jsPDF, chargée uniquement quand un visiteur clique sur un bouton de téléchargement PDF

> Si vous voulez supprimer ces dépendances externes, il faut télécharger les images dans `public/images/` et rebâtir. Non fait à ce stade.

---

## 4. Vérification du HTML final

Le `<head>` de `dist/index.html` contient, dans l'ordre :

1. `<html lang="fr">`
2. `<title>Trend Pulse — Nutrition, sommeil et bien-être</title>`
3. `<meta name="description">` en français (152 caractères)
4. Open Graph : `og:type`, `og:site_name`, `og:title`, `og:description`, `og:locale` (`fr_FR`), `og:locale:alternate` (`en_US`)
5. Twitter Card : `twitter:card`, `twitter:title`, `twitter:description`
6. Un bloc JSON-LD `schema.org/WebSite` avec `inLanguage: "fr"`
7. Une favicon SVG en data-URI (aucun fichier image à héberger)

Le `<body>` contient un contenu statique français visible **avant** le chargement de JavaScript, puis un `<noscript>` explicatif. React remplace ce contenu au démarrage.

---

## 5. Déploiement sur Netlify

### Option A — Via GitHub (recommandé, le plus fiable)

1. Créez un dépôt sur `github.com` (depuis le navigateur de votre téléphone).
2. Téléversez tous les fichiers du projet via l'interface web GitHub
   (bouton **Add file → Upload files**).
3. Allez sur `app.netlify.com` → **Add new site → Import an existing project**.
4. Connectez GitHub et choisissez le dépôt.
5. Netlify lit `netlify.toml` automatiquement :
   - Build command : `npm run build`
   - Publish directory : `dist`
6. Cliquez sur **Deploy**.

Votre site est publié sur `https://votre-nom.netlify.app`.

### Option B — Netlify Drop (sans GitHub)

1. Allez sur `https://app.netlify.com/drop`.
2. Netlify attend **un dossier ou une archive ZIP** contenant le site.
3. Si vous déposez le dossier `dist/` complet, le site est publié immédiatement
   (aucun build nécessaire, il est déjà compilé).
4. Vous obtenez une URL `*.netlify.app` en quelques secondes.

> Netlify Drop **ne compile pas** le code source. Il faut soit déposer `dist/`, soit passer par GitHub.

---

## 6. Déploiement sur Cloudflare Pages

1. Créez un dépôt GitHub contenant les fichiers du projet.
2. Allez sur `dash.cloudflare.com` → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Sélectionnez le dépôt.
4. Renseignez :
   - **Framework preset** : `Vite`
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
5. Cliquez sur **Save and Deploy**.

Votre site est publié sur `https://votre-nom.pages.dev`.

Les fichiers `_redirects` et `_headers` placés dans `public/` sont automatiquement
copiés dans `dist/` et **interprétés par Cloudflare Pages** — aucune configuration supplémentaire.

---

## 7. Créer une archive ZIP sur Android

Le dossier `dist/` ne fait que 4 fichiers. Pour en faire un ZIP :

**Avec l'application Fichiers (Files by Google)**
1. Ouvrez l'application **Fichiers**.
2. Naviguez jusqu'au dossier contenant le site.
3. Appuyez de façon prolongée sur un fichier pour lancer la sélection.
4. Sélectionnez les 4 fichiers (`index.html`, `_headers`, `_redirects`, `robots.txt`).
5. Appuyez sur le menu **⋮** → **Compresser**.

**Avec ZArchiver ou RAR** (Play Store)
1. Ouvrez l'application.
2. Naviguez jusqu'au dossier.
3. Sélectionnez les fichiers → **Compresser** → format `.zip`.

Vous obtenez un `dist.zip` prêt à déposer sur Netlify Drop.

---

## 8. Après la mise en ligne

À faire une fois l'URL publique connue :

1. **Ajouter un sitemap** — créez `public/sitemap.xml` avec votre vraie URL,
   puis ajoutez `Sitemap: https://votre-url/sitemap.xml` à la fin de `public/robots.txt`.
2. **Compléter l'URL dans le JSON-LD** — le champ `url` a été volontairement omis
   dans `index.html` car l'URL de destination n'était pas encore connue.
3. **Ajouter le lien Instagram** — le bouton est déjà en place dans le pied de page,
   dans `src/App.tsx` (chercher `Instagram link placeholder`).
4. **Relancer PageSpeed Insights** sur la nouvelle URL.
   Contrairement à l'hébergement Arena, vous contrôlez ici tout le HTML :
   la méta-description sera bien lue.

---

## 9. En-têtes HTTP appliqués

Le fichier `public/_headers` envoie :

| En-tête | Valeur |
|---|---|
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), interest-cohort=()` |

**Aucune CSP (`Content-Security-Policy`) n'est définie.**
Une CSP stricte nécessiterait d'autoriser `images.unsplash.com` et
`cdnjs.cloudflare.com`, et n'a pas pu être testée en navigateur. Elle a donc été
volontairement omise. Si vous en souhaitez une, ajoutez dans `public/_headers` :

```
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://images.unsplash.com; font-src 'self' data:; connect-src 'self'; base-uri 'self'; form-action 'self'
```

Testez le site après ajout — un blocage CSP casserait les images et les PDF.
