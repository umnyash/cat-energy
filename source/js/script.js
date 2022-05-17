'use strict';

const pageHeader = document.querySelector('.page-header');
const pageHeaderNavigation = pageHeader.querySelector('.page-header__navigation');
const pageHeaderToggler = pageHeader.querySelector('.page-header__toggler');

pageHeader.classList.remove('page-header--nojs');
pageHeaderNavigation.classList.add('page-header__navigation--close');

pageHeaderToggler.addEventListener('click', () => {
  if (pageHeaderToggler.getAttribute('aria-expanded') === 'false') {
    pageHeaderToggler.setAttribute('aria-expanded', 'true');
    pageHeaderToggler.querySelector('span').textContent = 'Закрыть меню';
  } else {
    pageHeaderToggler.setAttribute('aria-expanded', 'false');
    pageHeaderToggler.querySelector('span').textContent = 'Открыть меню';
  }

  pageHeaderNavigation.classList.toggle('page-header__navigation--close');
});
