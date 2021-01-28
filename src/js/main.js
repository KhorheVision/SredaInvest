import './_vars';
import {resizeContent} from './functions/resize';
import {scrollTo} from './functions/smooth-scroll';
import {disableScroll, enableScroll} from './functions/stop-scroll';


window.onload = function() {
  let burger = document.querySelector('.header__burger');
  let navClose = document.querySelector('.nav__close');
  let nav = document.querySelector('.menu');

  burger.addEventListener('click', () => {
      nav.classList.add('nav--visible');
  });

  navClose.addEventListener('click', () => {
      nav.classList.remove('nav--visible');
  });
}
