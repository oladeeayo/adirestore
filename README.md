# The Adire Store Limited — Landing Page

A premium landing page for **The Adire Store Limited**, showcasing authentic Nigerian Adire clothing and fabric with WhatsApp ordering, product modals, and full SEO optimisation.

---

## 🚀 Deploy to Vercel in 3 Steps

### Step 1 — Push to GitHub

```bash
# Create a new repo on github.com, then:
git init
git add .
git commit -m "Initial commit: The Adire Store landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/adirestore.git
git push -u origin main
```

### Step 2 — Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up / log in
2. Click **"Add New Project"**
3. Select **"Import Git Repository"** and connect your GitHub
4. Choose the `adirestore` repository
5. Click **"Deploy"** — no configuration needed, `vercel.json` handles everything

### Step 3 — Add Custom Domain (Optional)

1. In Vercel, go to your project → **Settings → Domains**
2. Add `theadirestore.com` (or your domain)
3. Update your DNS records as instructed by Vercel

---

## ✏️ Customise Before Deploying

### 1. Update WhatsApp Number
In `index.html`, find this line near the top of the `<script>` tag:
```javascript
const PHONE = '2348000000000'; // Update with your real WhatsApp number
```
Replace `2348000000000` with your actual WhatsApp number (include country code, no `+`).

### 2. Update Product Prices & SKUs
Find the `products` array in the `<script>` tag. Each product has:
```javascript
{
  sku: 'ADS-001',       // unique identifier for WhatsApp messages
  name: 'Product Name',
  price: '₦85,000',    // update pricing
  ...
}
```

### 3. Add Real Product Photos
Replace the SVG pattern placeholders by changing the `product-img-inner` section:
```html
<!-- In renderProducts(), change the background div to: -->
<img src="your-photo.jpg" alt="Product Name" style="width:100%;height:100%;object-fit:cover"/>
```

### 4. Update Social Links
Search for `theadirestore` and `2348000000000` in the HTML and replace with your real handles and number.

### 5. Update SEO Meta Tags
At the top of `index.html`, update:
- `<title>` tag
- `og:url` and `twitter:image` with your real domain
- Schema.org `telephone` field

---

## 📦 File Structure

```
adirestore/
├── index.html      # Complete landing page (all-in-one)
├── vercel.json     # Vercel deployment config
└── README.md       # This file
```

---

## ✨ Features

- **8 Product cards** with category filtering (All / Agbada / Dresses / Fabric / Kaftans)
- **Product detail modals** — click any card for full description, tags, and ordering
- **WhatsApp ordering** — each item sends a pre-filled message with SKU, name, and price
- **6 Customer testimonials** with star ratings
- **Craft process section** — 4-step explainer
- **Sticky navigation** with scroll effect
- **Floating WhatsApp button** with pulse animation
- **Full SEO** — meta tags, Open Graph, Twitter Card, JSON-LD structured data
- **Responsive** — mobile, tablet, desktop
- **Accessible** — ARIA labels, keyboard navigation, reduced motion support
- **Fast** — single HTML file, no framework, Google Fonts only

---

## 🎨 Brand Colours

| Name | Hex | Usage |
|------|-----|-------|
| Indigo | `#1B2A6B` | Primary brand, headings |
| Indigo Deep | `#0F1A4A` | Hero background |
| Terracotta | `#C4541A` | CTAs, accents |
| Gold | `#D4A853` | Highlights, eyebrows |
| Cream | `#F9F4EC` | Page background |

---

*The Adire Store Limited — Wear the Art of Indigo.*
