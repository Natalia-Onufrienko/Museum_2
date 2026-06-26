'use strict';

function toggleMenuLock() {
  const page = document.querySelector('.page');

  if (window.location.hash === '#menu') {
    page.classList.add('menu-open');
  } else {
    page.classList.remove('menu-open');
  }
}

window.addEventListener('hashchange', toggleMenuLock);
toggleMenuLock();
