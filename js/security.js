/**
 * THE ADIRE STORE LIMITED — Security Layer v3
 * Prevents redirect injection, DOM manipulation, and XSS
 */
(function () {
  'use strict';

  const ALLOWED_DOMAINS = [
    'theadirestore.com',
    'www.theadirestore.com',
    'adirestore.vercel.app',
    'localhost',
    '127.0.0.1'
  ];

  const SAFE_SCRIPT_DOMAINS = [
    'cdn.amplitude.com',
    'fonts.googleapis.com',
    'fonts.gstatic.com'
  ];

  // Block suspicious redirects
  const origAssign = window.location.assign;
  const origReplace = window.location.replace;

  function isDomainAllowed(url) {
    try {
      const u = new URL(url, window.location.origin);
      return ALLOWED_DOMAINS.some(d => u.hostname === d || u.hostname.endsWith('.' + d));
    } catch { return false; }
  }

  window.location.assign = function (url) {
    if (isDomainAllowed(url)) origAssign.call(window.location, url);
    else console.warn('[Security] Blocked redirect to:', url);
  };
  window.location.replace = function (url) {
    if (isDomainAllowed(url)) origReplace.call(window.location, url);
    else console.warn('[Security] Blocked redirect to:', url);
  };

  // Sanitize text for safe DOM insertion
  const entityMap = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
  function safeText(str) {
    return String(str).replace(/[&<>"'/]/g, s => entityMap[s]);
  }
  function safeHTML(str) { return safeText(str); }

  // Strip URL params of script injections
  function safeParam(key) {
    const params = new URLSearchParams(window.location.search);
    const val = params.get(key);
    if (!val) return null;
    return val.replace(/[<>"'`;(){}]/g, '');
  }

  // Sanitize form inputs
  function sanitizeInput(str) {
    return String(str).replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
      .replace(/javascript\s*:/gi, '')
      .replace(/data\s*:/gi, '');
  }

  function isScriptSafe(node) {
    if (node.hasAttribute('data-adire-safe')) return true;
    const src = node.src || '';
    return SAFE_SCRIPT_DOMAINS.some(d => src.includes(d));
  }

  // Watch for injected scripts
  const observer = new MutationObserver(mutations => {
    mutations.forEach(m => {
      m.addedNodes.forEach(node => {
        if (node.nodeType !== 1) return;
        if (node.tagName === 'SCRIPT' && !isScriptSafe(node)) {
          node.remove();
          console.warn('[Security] Removed injected script');
        }
        if (node.tagName === 'IFRAME' && !node.hasAttribute('data-adire-safe')) {
          node.remove();
          console.warn('[Security] Removed injected iframe');
        }
      });
    });
  });

  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      observer.observe(document.body, { childList: true, subtree: true });
    });
  }

  // CSP violation logging
  document.addEventListener('securitypolicyviolation', e => {
    console.warn('[CSP Violation]', e.violatedDirective, e.blockedURI);
  });

  window.safeHTML = safeHTML;
  window.safeText = safeText;
  window.safeParam = safeParam;
  window.sanitizeInput = sanitizeInput;
  window.AdireSecurity = { isDomainAllowed, safeText, safeHTML, safeParam, sanitizeInput };
})();
