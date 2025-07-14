(() => {
  // src/scripts/theme/utils/init.js
  window.StoreConnect = window.StoreConnect || {};
  window.StoreConnect.ObserverCallbacks = window.StoreConnect.ObserverCallbacks || [];
  document.addEventListener("DOMContentLoaded", establishObserver);
  function onDomChange(initCallback) {
    window.StoreConnect.ObserverCallbacks.push(initCallback);
  }
  function establishObserver() {
    if (window.StoreConnect.Observer) return;
    window.StoreConnect.Observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            runCallbacks(node, "mutation");
          }
        });
      });
    });
    window.StoreConnect.Observer.observe(document.body, { childList: true, subtree: true });
    runCallbacks(document, "initial load");
  }
  function runCallbacks(node, _context) {
    window.StoreConnect.ObserverCallbacks.forEach((callback) => callback(node));
  }

  // src/scripts/packs/featured-slider.js
  onDomChange(init);
  var CUSTOM_PARAMS = {
    items: 1,
    responsive: {
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 3 },
      1700: { items: 4 }
    },
    gutter: 20,
    nav: false,
    swipeAngle: false,
    speed: 400
  };
  var sliders = [];
  function init() {
    ;
    [...document.querySelectorAll("[data-featured-slider]:not([data-initialized])")].forEach((sliderEl) => {
      sliderEl.setAttribute("data-initialized", true);
      const container = {
        container: "[data-featured-slider=" + sliderEl.getAttribute("data-featured-slider") + "]"
      };
      const slideshow = tns({ ...CUSTOM_PARAMS, ...container });
      let resizeId;
      sliders.push(sliderEl);
      window.addEventListener("resize", () => {
        clearTimeout(resizeId);
        resizeId = setTimeout(() => slideshow.updateSliderHeight(), 300);
      });
    });
  }
})();
//# sourceMappingURL=featured-slider.B67CV6CR.js.map
