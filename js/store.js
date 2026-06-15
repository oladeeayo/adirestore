/**
 * THE ADIRE STORE LIMITED — Product Data Store v3
 * Shared across all pages via localStorage
 */
(function () {
  'use strict';

  const STORE_KEY = 'adirestore_products_v3';
  const PHONE = '2348000000000'; // ← CHANGE to your real WhatsApp number

  const DEFAULT_PRODUCTS = [
    {
      sku: 'ADS-001',
      name: 'Royal Olokun Agbada',
      category: 'agbada',
      categoryLabel: 'Agbada Set',
      badge: 'Bestseller',
      price: 85000,
      stock: 'available',
      featured: true,
      shortDesc: 'Full three-piece set. Deep indigo eleko pattern with gold embroidery trim.',
      description: 'The Royal Olokun Agbada is a masterwork of traditional Yoruba textile art. Dyed using the authentic eleko (cassava paste) resist method, this three-piece set — robe, inner shirt, and trousers — features the iconic Olokun wave pattern symbolising abundance and the deep sea. Finished with hand-stitched gold embroidery at the neckline and cuffs.',
      tags: ['3-Piece Set', 'Hand-Dyed', 'Natural Indigo', 'Gold Embroidery', 'Made to Order'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL', 'Custom'],
      image: 'https://images.pexels.com/photos/8526759/pexels-photo-8526759.jpeg?auto=compress&cs=tinysrgb&w=600',
      createdAt: '2024-01-01'
    },
    {
      sku: 'ADS-002',
      name: 'Ìyá Ilẹ̀ Wrap Dress',
      category: 'dress',
      categoryLabel: 'Dress',
      badge: 'New',
      price: 42000,
      stock: 'available',
      featured: true,
      shortDesc: 'Wrap silhouette in double-dye indigo. Adjustable tie waist, midi length.',
      description: 'The Ìyá Ilẹ̀ Wrap Dress honours the strength and elegance of the Yoruba woman. Hand-dyed twice for a deeper, richer navy-indigo shade, the dress features bold circular motifs and a flowing wrap silhouette that flatters every figure. The adjustable tie waist and midi-length hem make it equally at home at a beach wedding or a city dinner.',
      tags: ['Midi Length', 'Double-Dyed', 'Wrap Silhouette', '100% Cotton', 'Sizes XS–3XL'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
      image: 'https://images.pexels.com/photos/18330807/pexels-photo-18330807.jpeg?auto=compress&cs=tinysrgb&w=600',
      createdAt: '2024-01-02'
    },
    {
      sku: 'ADS-003',
      name: 'Ẹlẹkọ Kaftan',
      category: 'kaftan',
      categoryLabel: 'Kaftan',
      badge: '',
      price: 38000,
      stock: 'available',
      featured: true,
      shortDesc: 'Relaxed luxury kaftan. Geometric eleko resist-dye on premium cotton voile.',
      description: 'The Ẹlẹkọ Kaftan brings the meditative geometry of traditional eleko (cassava paste) patterns into a modern, relaxed silhouette. Cut from premium cotton voile for ultimate breathability, this kaftan drapes beautifully. Side pockets included.',
      tags: ['Cotton Voile', 'Eleko Pattern', 'Side Pockets', 'Unisex Cut', 'Breathable'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL', 'Custom'],
      image: 'https://images.pexels.com/photos/34445229/pexels-photo-34445229.jpeg?auto=compress&cs=tinysrgb&w=600',
      createdAt: '2024-01-03'
    },
    {
      sku: 'ADS-004',
      name: 'Adire Eleko Fabric Bolt',
      category: 'fabric',
      categoryLabel: 'Raw Fabric',
      badge: 'Popular',
      price: 18000,
      stock: 'available',
      featured: false,
      shortDesc: 'Authentic 6-yard bolt of hand-dyed eleko fabric. Perfect for custom tailoring.',
      description: 'For those who want the craft of Adire in their own hands, our 6-yard Adire Eleko fabric bolt is the ideal canvas. Each bolt is uniquely hand-dyed using the traditional cassava paste resist method.',
      tags: ['6-Yard Bolt', 'Hand-Dyed', 'Unique Pattern', 'Tailoring Ready', 'Natural Indigo'],
      sizes: ['One Size'],
      image: 'https://images.pexels.com/photos/35633192/pexels-photo-35633192.jpeg?auto=compress&cs=tinysrgb&w=600',
      createdAt: '2024-01-04'
    },
    {
      sku: 'ADS-005',
      name: 'Dáàdáà Shift Dress',
      category: 'dress',
      categoryLabel: 'Dress',
      badge: 'Limited',
      price: 36000,
      stock: 'limited',
      featured: true,
      shortDesc: 'Clean-line shift silhouette with bold onijogi swirl pattern.',
      description: 'The Dáàdáà Shift Dress is for the woman who lets her fabric do the talking. Cut in a structured, knee-length shift silhouette from thick-weave cotton, it features a bold onijogi tie-dye swirl pattern.',
      tags: ['Knee Length', 'Onijogi Pattern', 'Structured Fit', 'Sizes XS–3XL', 'Limited Run'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      image: 'https://images.pexels.com/photos/8985981/pexels-photo-8985981.jpeg?auto=compress&cs=tinysrgb&w=600',
      createdAt: '2024-01-05'
    },
    {
      sku: 'ADS-006',
      name: 'Ògún Sen Fusion Kaftan',
      category: 'kaftan',
      categoryLabel: 'Kaftan',
      badge: 'New',
      price: 44000,
      stock: 'available',
      featured: true,
      shortDesc: 'Embroidered neckline kaftan. Classic adire base with Ankara accent panels.',
      description: 'The Ògún Sen Kaftan is our most contemporary design — a fusion of traditional Adire indigo base with vibrant Ankara accent panels at the collar, pocket trim, and hem.',
      tags: ['Fusion Design', 'Ankara Panels', 'Embroidered', 'Knee Length', 'All Sizes'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL', 'Custom'],
      image: 'https://images.pexels.com/photos/31485635/pexels-photo-31485635.jpeg?auto=compress&cs=tinysrgb&w=600',
      createdAt: '2024-01-06'
    },
    {
      sku: 'ADS-007',
      name: 'Àgọ̀ Àṣà Senator Set',
      category: 'agbada',
      categoryLabel: 'Senator Set',
      badge: 'Bestseller',
      price: 58000,
      stock: 'available',
      featured: false,
      shortDesc: '2-piece senator outfit in crisp adire on white cotton. Formal & sharp.',
      description: 'A two-piece set — long-sleeved senator shirt and matching straight-cut trousers — crafted from fine cotton with a subtle adire pattern in deep indigo on white.',
      tags: ['2-Piece Set', 'Senator Style', 'Custom Sizing', 'Office-Ready', '7-Day Lead Time'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL', 'Custom'],
      image: 'https://images.pexels.com/photos/30075301/pexels-photo-30075301.jpeg?auto=compress&cs=tinysrgb&w=600',
      createdAt: '2024-01-07'
    },
    {
      sku: 'ADS-008',
      name: 'Ọmọ Olúwa Mini Dress',
      category: 'dress',
      categoryLabel: 'Dress',
      badge: '',
      price: 28000,
      stock: 'available',
      featured: false,
      shortDesc: 'Playful mini in triple-dye cobalt. Puffed sleeves, round neck, relaxed fit.',
      description: 'Triple-dyed to achieve an intense, saturated cobalt-indigo shade, this above-the-knee dress features puffed short sleeves and a relaxed round neckline.',
      tags: ['Mini Length', 'Triple-Dyed', 'Puffed Sleeves', 'Unique Pattern', 'One of a Kind'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      image: 'https://images.pexels.com/photos/35273637/pexels-photo-35273637.jpeg?auto=compress&cs=tinysrgb&w=600',
      createdAt: '2024-01-08'
    }
  ];

  const AdireStore = {
    _cache: null,

    getAll() {
      if (this._cache) return this._cache;
      try {
        const s = localStorage.getItem(STORE_KEY);
        if (s) { this._cache = JSON.parse(s); return this._cache; }
      } catch (e) { console.warn('Store read error', e); }
      this._cache = [...DEFAULT_PRODUCTS];
      return this._cache;
    },

    save(p) {
      this._cache = p;
      try { localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch (e) { console.error(e); }
    },

    getFeatured() { return this.getAll().filter(p => p.featured && p.stock !== 'out'); },
    getByCategory(cat) { const a = this.getAll(); return cat === 'all' ? a : a.filter(p => p.category === cat); },
    getBySku(sku) { return this.getAll().find(p => p.sku === sku); },
    getCategories() {
      const cats = new Map();
      this.getAll().forEach(p => cats.set(p.category, p.categoryLabel));
      return cats;
    },
    search(q) {
      const term = q.toLowerCase().trim();
      if (!term) return this.getAll();
      return this.getAll().filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.shortDesc.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.tags.some(t => t.toLowerCase().includes(term))
      );
    },

    add(product) { const p = this.getAll(); p.push(product); this.save(p); },
    update(sku, data) {
      const p = this.getAll();
      const i = p.findIndex(x => x.sku === sku);
      if (i !== -1) { p[i] = { ...p[i], ...data }; this.save(p); return true; }
      return false;
    },
    delete(sku) { this.save(this.getAll().filter(p => p.sku !== sku)); },
    reset() { localStorage.removeItem(STORE_KEY); this._cache = null; },

    formatPrice(n) { return '₦' + Number(n).toLocaleString('en-NG'); },

    whatsAppLink(p, size = '') {
      const sz = size ? `\nSize: ${size}` : '';
      const msg = encodeURIComponent(
        `Hello The Adire Store! 👋\n\nI'd like to order:\n\n*${p.name}*\nSKU: ${p.sku}\nPrice: ${AdireStore.formatPrice(p.price)}${sz}\n\nPlease share payment details. Thank you!`
      );
      return `https://wa.me/${PHONE}?text=${msg}`;
    },

    whatsAppGeneral() {
      return `https://wa.me/${PHONE}?text=${encodeURIComponent('Hello The Adire Store! 👋 I have a question.')}`;
    }
  };

  window.AdireStore = AdireStore;
  window.ADIRE_PHONE = PHONE;
})();
