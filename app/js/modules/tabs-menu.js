window.tabsMenu = (function(window, $) {
  'use strict';

  const tabsMenu = document.querySelector('.tabs-menu');

  if (!tabsMenu) {
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const categoryKey = urlParams.get('category');
  const tabsMenuPanelItems = tabsMenu.querySelectorAll('.tabs-menu__panel');
  let categoryIndex = 1;

  for (let i = 0; i < tabsMenuPanelItems.length; i++) {
    const panel = tabsMenuPanelItems[i];
    const panelId = panel.id;

    if (panelId === categoryKey) {
      debugger;
      categoryIndex = i + 1;
      break;
    }
  }

  $(tabsMenu).tabslet({
    active: categoryIndex,
    animation: true
  });

  $(tabsMenu).on("_after", function(evt) {
    const menuItem = evt.target.closest('.tabs-menu__nav-item');
    const menuItemLink = menuItem.querySelector('.tabs-menu__nav-item-link');
    const categoryName = menuItemLink.getAttribute('href').substr(1);
    history.replaceState({}, '', `${location.pathname}?category=${categoryName}`);
  });
})(window, jQuery);
