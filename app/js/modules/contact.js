window.contact = (function(window, $) {
  'use strict';

  const contact = document.querySelector('.contact');

  if (!contact) {
    return;
  }

  contact.classList.remove('contact--no-js');

  const showMapsInput = contact.querySelector('[name="show-maps"]');
  const swapMaps = contact.querySelector('.contact-swap-maps');
  const maps = contact.querySelectorAll('[data-contact-map]');
  const mapTRC = contact.querySelector('[data-contact-map="trc"]');
  const mapTRCImage = mapTRC.querySelector('img');
  const currentMapInput = document.querySelector(
    '[name="current-map"]:checked'
  );
  const currentMapInputValue = currentMapInput.value;

  mapTRCImage.addEventListener('load', function() {
    setConstrainMapTRC();
  });

  maps.forEach(map => {
    const isCurrent = map.dataset.contactMap === currentMapInputValue;
    map.classList.toggle('contact__map--current', isCurrent);
  });

  showMapsInput.addEventListener('change', function() {
    const isChecked = showMapsInput.checked;
    contact.classList.toggle('contact--active-maps', isChecked);
  });

  swapMaps.addEventListener('change', function(evt) {
    const inputRadio = evt.target;
    const value = inputRadio.value;

    maps.forEach(map => {
      const isCurrent = map.dataset.contactMap === value;
      map.classList.toggle('contact__map--current', isCurrent);
    });
  });

  function constrainArray() {
    const wDiff = mapTRCImage.clientWidth - mapTRC.clientWidth;
    const hDiff = mapTRCImage.clientHeight - mapTRC.clientHeight;

    return [-hDiff, 0, 0, -wDiff];
  }

  function setConstrainMapTRC() {
    $(mapTRCImage).pep({
      constrainTo: constrainArray()
    });
  }

  if (window.matchMedia('(pointer: fine)').matches) {
    const scene = document.querySelector('.contact__decors');
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true
    });
  }
})(window, jQuery);
