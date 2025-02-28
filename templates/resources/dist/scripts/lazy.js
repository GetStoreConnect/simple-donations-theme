document.addEventListener('DOMContentLoaded', ()=> {
  // Lazy Loading
  const images = document.querySelectorAll('img[data-src]');
  
  const loadImage = function(entries, observer) {
    entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function() {
      entry.target.classList.remove('sc-lazy-load');
      observer.unobserve(entry.target);
    });
    });
  }      
  const imageObserver = new IntersectionObserver(loadImage, {
    root: null,
    threshold: 0
  });

  images.forEach(img => imageObserver.observe(img));
});