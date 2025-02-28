  // Sliders
  const featuredSlider = (function () {

    const CUSTOM_PARAMS =  {
      items: 1,
      responsive: {
        576: { items: 2},
        768: { items: 3 },
        992: { items: 3 },
        1700: { items: 4 }
      },
      gutter: 20,
      nav: false,
      swipeAngle: false,
      speed: 400
    }

    let customsliders = [];
    // Check if the page has Custom Carousels before intialising them
    $(() => {
      if (document.querySelectorAll('[data-featured-slider]')) {
        [...document.querySelectorAll('[data-featured-slider]')].map(slider => {
          featuredSlider.init('[data-featured-slider=' + slider.getAttribute('data-featured-slider') + ']');
        });
      }
    });

    return {
      init: (selector, params) => {
        const container = {
          container: selector,
        },

        slider = tns({ ...CUSTOM_PARAMS, ...params, ...container });

        customsliders.push(slider);
      }
    }

  })();