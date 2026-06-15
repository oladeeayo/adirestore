/**
 * THE ADIRE STORE LIMITED — Analytics v3 (Amplitude)
 * ← Replace the API key below with your real Amplitude key
 */
(function () {
  'use strict';

  const AMPLITUDE_API_KEY = '94120fa4ab3e7e5e0fedd242e1e59344'; // ← CHANGE THIS

  // Load Amplitude SDK
  !function(){"use strict";!function(e,t){var n=e.amplitude||{_q:[],_iq:{}};if(n.invoked)e.console&&console.error&&console.error("Amplitude snippet has been loaded.");else{var r=function(e,t){e.prototype[t]=function(){return this._q.push({name:t,args:Array.prototype.slice.call(arguments,0)}),this}},s=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove","getUserProperties"];function o(e,t){this._q=[],this._iq={},this.createInstance=function(e){return this._iq[e]={_q:[]},this._iq[e]},this.invoked=!0;var n=t.createElement("script");n.type="text/javascript",n.crossOrigin="anonymous",n.async=!0,n.src="https://cdn.amplitude.com/libs/analytics-browser-2.11.1-min.js.gz",n.onload=function(){e.amplitude.runQueuedFunctions||console.log("[Amplitude] Error: SDK failed to load properly.")};var r=t.getElementsByTagName("script")[0];if(r&&r.parentNode){r.parentNode.insertBefore(n,r)}else{t.head.appendChild(n)}}o(e,t);for(var i=["init","logEvent","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","enableTracking","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","groupIdentify","onInit","onNewSessionStart","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId","getDeviceId","getUserId","setMinTimeBetweenSessionsMillis","setEventUploadThreshold","setEventUploadPeriodMillis","setEventMaxCount","setLibrary","setTransport","reset","setProxy"],c=0;c<i.length;c++)r(o,i[c]);var a=function(){this._q=[],function(e){for(var t=0;t<s.length;t++)r(e,s[t])}(this)};o.prototype.Identify=a,o.prototype.Revenue=function(){this._q=[];var e=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"];for(var t=0;t<e.length;t++)r(this,e[t])};var l=["getSessionId","setSessionId","init","track","logEvent","identify","groupIdentify","setGroup","revenue","flush","getUserId","setUserId","getDeviceId","setDeviceId","reset","setOptOut"];n=e.amplitude||{_q:[],_iq:{}};for(c=0;c<l.length;c++)(function(e){n[e]=function(){n._q.push([e].concat(Array.prototype.slice.call(arguments,0)))}})(l[c]);e.amplitude=n}}(window,document)}();

  if (AMPLITUDE_API_KEY && AMPLITUDE_API_KEY !== '94120fa4ab3e7e5e0fedd242e1e59344') {
    amplitude.init(AMPLITUDE_API_KEY, { defaultTracking: true });
  }

  const Analytics = {
    track(event, props = {}) {
      props.page = window.location.pathname;
      props.timestamp = new Date().toISOString();
      if (typeof amplitude !== 'undefined' && amplitude.logEvent) {
        amplitude.logEvent(event, props);
      }
    },
    pageView(pageName) { this.track('Page Viewed', { pageName }); },
    productViewed(product) { this.track('Product Viewed', { sku: product.sku, name: product.name, price: product.price, category: product.category }); },
    orderInitiated(product, size) { this.track('Order Initiated', { sku: product.sku, name: product.name, price: product.price, size, channel: 'whatsapp' }); },
    filterUsed(filter) { this.track('Filter Used', { filter }); },
    searchPerformed(query, resultCount) { this.track('Search Performed', { query, resultCount }); },
    catalogueViewed() { this.track('Catalogue Viewed'); },
    ctaClicked(label) { this.track('CTA Clicked', { label }); },
    whatsAppFloatClicked() { this.track('WhatsApp Float Clicked'); }
  };

  window.AdireAnalytics = Analytics;
})();
