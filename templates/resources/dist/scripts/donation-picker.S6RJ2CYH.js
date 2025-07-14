(() => {
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

  // donation-picker.js
  onDomChange(init);
  function init(node) {
    ;
    [...node.querySelectorAll("[data-donation-picker]")].forEach(
      (node2) => pickerList(node2)
    );
  }
  var pickerList = (node) => {
    const options = node.querySelectorAll("[data-donation-list] [data-donation-list-option]");
    const input = node.querySelector("[data-donation-input]");
    let selectedOption = null;
    if (options.length > 0) {
      input.value = options[0].value;
      input.placeholder = options[0].value;
      options[0].classList.add("sc-selected");
      selectedOption = options[0];
    }
    options.forEach((option, index) => {
      let value = option.value;
      option.addEventListener("click", (event) => {
        if (selectedOption) {
          selectedOption.classList.remove("sc-selected");
        }
        option.classList.add("sc-selected");
        selectedOption = option;
        if (value == "") {
          input.focus();
          input.value = "";
          input.placeholder = "";
        } else {
          input.value = value;
          input.placeholder = value;
        }
      });
    });
  };
})();
