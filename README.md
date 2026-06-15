# The Adire Store Limited — Website v3

Premium e-commerce storefront for authentic Nigerian Adire clothing.  
Static HTML/CSS/JS — no framework, no build step, deploys anywhere.

---

## File Structure

```
adirestore-v3/
├── index.html              ← Landing page (hero, about, featured, testimonials)
├── catalogue.html          ← Full store catalogue (search, filter, sort)
├── store-admin-panel.html  ← Hidden admin panel (NOT linked publicly)
├── css/
│   └── styles.css          ← Master stylesheet
├── js/
│   ├── store.js            ← Product data store (localStorage + defaults)
│   ├── security.js         ← Redirect/injection protection layer
│   └── analytics.js        ← Amplitude event tracking
├── vercel.json             ← Deployment config + security headers
└── README.md               ← This file
```

---

## Before Going Live — Customize These

### 1. WhatsApp Number
Open `js/store.js` and change line 6:
```js
const PHONE = '2348000000000'; // ← Your real WhatsApp number
```

### 2. Amplitude API Key
Open `js/analytics.js` and change line 6:
```js
const AMPLITUDE_API_KEY = 'YOUR_AMPLITUDE_API_KEY'; // ← Your key
```
Get a free key at [amplitude.com](https://amplitude.com)

### 3. Admin Panel Credentials
Open `store-admin-panel.html` and change the credentials near the top of the script:
```js
const ADMIN_USER = 'adireadmin';    // ← Change this
const ADMIN_PASS = 'adire2024!';    // ← Change this
```

### 4. Domain & Social Links
Search and replace across all HTML files:
- `theadirestore.com` → your real domain
- `instagram.com/theadirestore` → your real Instagram
- `facebook.com/theadirestore` → your real Facebook

---

## Deployment

### Vercel (Recommended)
1. Push this folder to a GitHub repo
2. Import the repo on [vercel.com](https://vercel.com)
3. Deploy — that's it. `vercel.json` handles headers automatically.

### Netlify
1. Push to GitHub
2. Import on [netlify.com](https://netlify.com)
3. Set publish directory to the repo root

### GitHub Pages
1. Push to a GitHub repo
2. Go to Settings → Pages → Deploy from branch
3. Select main branch, root folder

### Any Static Host
Just upload all files. No build step needed.

---

## Features

- **Pexels Free Images** — All product images from pexels.com (free for commercial use)
- **Responsive Design** — Mobile-first, works on all devices
- **Product Data Store** — localStorage-backed, survives page refreshes
- **Catalogue Page** — Search, category filters, sorting, deep-link via `?cat=`
- **Admin Panel** — Hidden page for inventory management (add/edit/delete products)
- **Amplitude Analytics** — Page views, product views, orders, searches, CTA clicks
- **Security Layer** — Redirect protection, DOM injection blocking, CSP headers, input sanitization
- **WhatsApp Ordering** — One-tap ordering with pre-filled messages
- **SEO** — JSON-LD schema, Open Graph tags, semantic HTML, canonical URLs
- **Animations** — Intersection Observer fade-ins, smooth scrolling, hover states

---

## Admin Panel Usage

Access at: `yoursite.com/store-admin-panel` (not linked from any public page)

Default login: `adireadmin` / `adire2024!` (CHANGE BEFORE DEPLOYING)

From the admin panel you can:
- View dashboard stats (total products, inventory value, featured count, stock)
- Add new products with SKU, name, price, image URL, sizes, tags
- Edit existing products
- Toggle featured status
- Delete products (with confirmation)
- Reset to default 8 products

Product changes are saved to localStorage and immediately reflected on the public site.

---

## Tech Stack

- **HTML5** — Semantic markup, accessibility attributes
- **CSS3** — Custom properties, grid, flexbox, clamp(), animations
- **Vanilla JS** — No jQuery, no framework, zero dependencies
- **Fonts** — Cormorant Garamond (display) + Inter (body) via Google Fonts
- **Images** — Pexels.com (free, no attribution required)
- **Analytics** — Amplitude Browser SDK

---

## License

© 2024 The Adire Store Limited. All rights reserved.
