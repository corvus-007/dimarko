window.map = (function(window, $) {
  'use strict';

  const dirname = window.util.isDevMode() ? '' : '/wp-content/themes/dimarko/';

  const mapElem = document.querySelector('#map');

  if (!(mapElem && window.ymaps)) {
    return;
  }

  mapElem.classList.remove('.map--no-js');

  const mapConfig = {
    'mobile-portrait': [53.2733, 34.316936],
    'mobile-landscape': [53.2739, 34.316936],
    'tablet-portrait': [53.2733, 34.316936],
    'tablet-landscape': [53.275323, 34.313],
    laptop: [53.275323, 34.312],
    desktop: [53.275323, 34.31]
  };

  let device = 'mobile-portrait';

  if (window.matchMedia('(min-width: 667px) and (max-width: 767px)').matches) {
    device = 'mobile-landscape';
  } else if (
    window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches
  ) {
    device = 'tablet-portrait';
  } else if (
    window.matchMedia('(min-width: 1024px) and (max-width: 1279px)').matches
  ) {
    device = 'tablet-landscape';
  } else if (
    window.matchMedia('(min-width: 1280px) and (max-width: 1439px').matches
  ) {
    device = 'laptop';
  } else if (window.matchMedia('(min-width: 1440px)').matches) {
    device = 'desktop';
  }

  ymaps.ready(function() {
    const map = new ymaps.Map(mapElem, {
      center: mapConfig[device],
      zoom: 16,
      controls: []
    });

    map.controls.add('zoomControl');

    map.behaviors.disable(['scrollZoom']);
    var myPlacemark = new ymaps.Placemark(
      [53.275323, 34.316936],
      {
        hintContent: 'г. Брянск, ул. Объездная, 30, ТРЦ «АэроПарк»'
      },
      {
        iconLayout: 'default#image',
        iconImageHref: dirname + 'images/icon-map-pin.svg',
        iconImageSize: [48, 52],
        iconImageOffset: [-24, -52]
      }
    );

    map.geoObjects.add(myPlacemark);
  });
})(window, jQuery);
