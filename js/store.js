(function () {
  'use strict';

  var STORE_KEY = 'adirestore_products';
  var PHONE = '2348000000000';

  var DEFAULT_PRODUCTS = [
    { sku: 'ADS-001', name: 'Royal Olokun Agbada', category: 'agbada', categoryLabel: 'Agbada Set', badge: 'Bestseller', price: 85000, stock: 'available', featured: true, shortDesc: 'Full three-piece set. Deep indigo eleko pattern with gold embroidery trim.', description: 'The Royal Olokun Agbada is a masterwork of traditional Yoruba textile art. Dyed using the authentic eleko (cassava paste) resist method, this three-piece set features the iconic Olokun wave pattern symbolising abundance. Finished with hand-stitched gold embroidery at the neckline and cuffs.', tags: ['3-Piece Set', 'Hand-Dyed', 'Natural Indigo', 'Gold Embroidery', 'Made to Order'], sizes: ['S', 'M', 'L', 'XL', 'XXL', 'Custom'], image: 'https://images.pexels.com/photos/8526759/pexels-photo-8526759.jpeg?auto=compress&cs=tinysrgb&w=600', createdAt: '2024-01-01' },
    { sku: 'ADS-002', name: '\u00ccy\u00e1 Il\u1eb9\u0300 Wrap Dress', category: 'dress', categoryLabel: 'Dress', badge: 'New', price: 42000, stock: 'available', featured: true, shortDesc: 'Wrap silhouette in double-dye indigo. Adjustable tie waist, midi length.', description: 'The \u00ccy\u00e1 Il\u1eb9\u0300 Wrap Dress honours the strength and elegance of the Yoruba woman. Hand-dyed twice for a deeper, richer navy-indigo shade with bold circular motifs and a flowing wrap silhouette.', tags: ['Midi Length', 'Double-Dyed', 'Wrap Silhouette', '100% Cotton', 'Sizes XS\u20133XL'], sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], image: 'https://images.pexels.com/photos/18330807/pexels-photo-18330807.jpeg?auto=compress&cs=tinysrgb&w=600', createdAt: '2024-01-02' },
    { sku: 'ADS-003', name: '\u1eb8l\u1eb9k\u1ecd Kaftan', category: 'kaftan', categoryLabel: 'Kaftan', badge: '', price: 38000, stock: 'available', featured: true, shortDesc: 'Relaxed luxury kaftan. Geometric eleko resist-dye on premium cotton voile.', description: 'The \u1eb8l\u1eb9k\u1ecd Kaftan brings the meditative geometry of traditional eleko patterns into a modern, relaxed silhouette. Cut from premium cotton voile for ultimate breathability.', tags: ['Cotton Voile', 'Eleko Pattern', 'Side Pockets', 'Unisex Cut', 'Breathable'], sizes: ['S', 'M', 'L', 'XL', 'XXL', 'Custom'], image: 'https://images.pexels.com/photos/34445229/pexels-photo-34445229.jpeg?auto=compress&cs=tinysrgb&w=600', createdAt: '2024-01-03' },
    { sku: 'ADS-004', name: 'Adire Eleko Fabric Bolt', category: 'fabric', categoryLabel: 'Raw Fabric', badge: 'Popular', price: 18000, stock: 'available', featured: false, shortDesc: 'Authentic 6-yard bolt of hand-dyed eleko fabric. Perfect for custom tailoring.', description: 'For those who want the craft of Adire in their own hands, our 6-yard Adire Eleko fabric bolt is the ideal canvas. Each bolt is uniquely hand-dyed using the traditional cassava paste resist method.', tags: ['6-Yard Bolt', 'Hand-Dyed', 'Unique Pattern', 'Tailoring Ready', 'Natural Indigo'], sizes: ['One Size'], image: 'https://images.pexels.com/photos/35633192/pexels-photo-35633192.jpeg?auto=compress&cs=tinysrgb&w=600', createdAt: '2024-01-04' },
    { sku: 'ADS-005', name: 'D\u00e0\u00e1d\u00e0\u00e1 Shift Dress', category: 'dress', categoryLabel: 'Dress', badge: 'Limited', price: 36000, stock: 'limited', featured: true, shortDesc: 'Clean-line shift silhouette with bold onijogi swirl pattern.', description: 'The D\u00e0\u00e1d\u00e0\u00e1 Shift Dress is for the woman who lets her fabric do the talking. Cut in a structured, knee-length shift silhouette from thick-weave cotton with a bold onijogi tie-dye swirl pattern.', tags: ['Knee Length', 'Onijogi Pattern', 'Structured Fit', 'Sizes XS\u20133XL', 'Limited Run'], sizes: ['XS', 'S', 'M', 'L', 'XL'], image: 'https://images.pexels.com/photos/8985981/pexels-photo-8985981.jpeg?auto=compress&cs=tinysrgb&w=600', createdAt: '2024-01-05' },
    { sku: 'ADS-006', name: '\u00d2g\u00fan Sen Fusion Kaftan', category: 'kaftan', categoryLabel: 'Kaftan', badge: 'New', price: 44000, stock: 'available', featured: true, shortDesc: 'Embroidered neckline kaftan. Classic adire base with Ankara accent panels.', description: 'The \u00d2g\u00fan Sen Kaftan is our most contemporary design \u2014 a fusion of traditional Adire indigo base with vibrant Ankara accent panels at the collar, pocket trim, and hem.', tags: ['Fusion Design', 'Ankara Panels', 'Embroidered', 'Knee Length', 'All Sizes'], sizes: ['S', 'M', 'L', 'XL', 'XXL', 'Custom'], image: 'https://images.pexels.com/photos/31485635/pexels-photo-31485635.jpeg?auto=compress&cs=tinysrgb&w=600', createdAt: '2024-01-06' },
    { sku: 'ADS-007', name: '\u00c0g\u1ecd\u0300 \u00c0\u1e63\u00e0 Senator Set', category: 'agbada', categoryLabel: 'Senator Set', badge: 'Bestseller', price: 58000, stock: 'available', featured: false, shortDesc: '2-piece senator outfit in crisp adire on white cotton. Formal and sharp.', description: 'A two-piece set \u2014 long-sleeved senator shirt and matching straight-cut trousers \u2014 crafted from fine cotton with a subtle adire pattern in deep indigo on white.', tags: ['2-Piece Set', 'Senator Style', 'Custom Sizing', 'Office-Ready', '7-Day Lead Time'], sizes: ['S', 'M', 'L', 'XL', 'XXL', 'Custom'], image: 'https://images.pexels.com/photos/30075301/pexels-photo-30075301.jpeg?auto=compress&cs=tinysrgb&w=600', createdAt: '2024-01-07' },
    { sku: 'ADS-008', name: '\u1eccm\u1ecd Ol\u00fawa Mini Dress', category: 'dress', categoryLabel: 'Dress', badge: '', price: 28000, stock: 'available', featured: false, shortDesc: 'Playful mini in triple-dye cobalt. Puffed sleeves, round neck, relaxed fit.', description: 'Triple-dyed to achieve an intense, saturated cobalt-indigo shade, this above-the-knee dress features puffed short sleeves and a relaxed round neckline.', tags: ['Mini Length', 'Triple-Dyed', 'Puffed Sleeves', 'Unique Pattern'], sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], image: 'https://images.pexels.com/photos/35273637/pexels-photo-35273637.jpeg?auto=compress&cs=tinysrgb&w=600', createdAt: '2024-01-08' }
  ];

  function loadProducts() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {}
    return JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  }

  function saveProducts(products) {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(products));
    } catch (e) {}
  }

  var _cache = null;

  function getAll() {
    if (_cache) return _cache;
    _cache = loadProducts();
    return _cache;
  }

  function flush() {
    _cache = null;
  }

  var AdireStore = {
    getAll: function () { return getAll(); },

    getFeatured: function () {
      return getAll().filter(function (p) { return p.featured && p.stock !== 'out'; });
    },

    getByCategory: function (cat) {
      if (cat === 'all' || !cat) return getAll();
      return getAll().filter(function (p) { return p.category === cat; });
    },

    getBySku: function (sku) {
      return getAll().find(function (p) { return p.sku === sku; }) || null;
    },

    getCategories: function () {
      var map = {};
      getAll().forEach(function (p) {
        if (!map[p.category]) map[p.category] = p.categoryLabel;
      });
      return map;
    },

    search: function (q) {
      var term = (q || '').toLowerCase().trim();
      if (!term) return getAll();
      return getAll().filter(function (p) {
        return p.name.toLowerCase().indexOf(term) !== -1 ||
               p.shortDesc.toLowerCase().indexOf(term) !== -1 ||
               p.category.toLowerCase().indexOf(term) !== -1 ||
               (p.tags || []).some(function (t) { return t.toLowerCase().indexOf(term) !== -1; });
      });
    },

    add: function (product) {
      var list = getAll();
      list.push(product);
      saveProducts(list);
      flush();
    },

    update: function (sku, data) {
      var list = getAll();
      var idx = -1;
      for (var i = 0; i < list.length; i++) {
        if (list[i].sku === sku) { idx = i; break; }
      }
      if (idx === -1) return false;
      for (var key in data) {
        if (data.hasOwnProperty(key)) list[idx][key] = data[key];
      }
      saveProducts(list);
      flush();
      return true;
    },

    remove: function (sku) {
      var list = getAll().filter(function (p) { return p.sku !== sku; });
      if (list.length === 0) {
        this.reset();
      } else {
        saveProducts(list);
        flush();
      }
    },

    reset: function () {
      try { localStorage.removeItem(STORE_KEY); } catch (e) {}
      _cache = null;
    },

    formatPrice: function (n) {
      return '\u20A6' + Number(n).toLocaleString('en-NG');
    },

    whatsAppLink: function (p, size) {
      var msg = 'Hello The Adire Store! \uD83D\uDC4B\uD83C\uDFFB\n\nI\'d like to order:\n\n*' + p.name + '*\nSKU: ' + p.sku + '\nPrice: ' + this.formatPrice(p.price) + (size ? '\nSize: ' + size : '') + '\n\nPlease share payment details. Thank you!';
      return 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(msg);
    },

    whatsAppGeneral: function () {
      return 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent('Hello The Adire Store! \uD83D\uDC4B\uD83C\uDFFB I have a question.');
    }
  };

  window.AdireStore = AdireStore;
})();
