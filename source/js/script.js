'use strict';

const preloader = document.querySelector('.preloader');

preloader.classList.remove('preloader--nojs');

window.onload = function () {
  preloader.style.display = 'none';
}

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

  pageHeaderToggler.classList.toggle('page-header__toggler--close');
  pageHeaderNavigation.classList.toggle('page-header__navigation--close');
});

DG.then(function () {
  let map = DG.map('contacts__interactive-map', {
    center: [59.93848, 30.321819],
    zoom: 16
  });

  let myIcon = DG.icon({
    iconUrl: 'img/location-pin.png',
    iconSize: [50, 100]
});

  DG.marker([59.93848, 30.321819], {
    icon: myIcon
  }).addTo(map);
});
