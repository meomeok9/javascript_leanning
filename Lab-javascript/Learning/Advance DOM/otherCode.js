'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const cl = a => console.log(a);
//DOM traveering
cl('------ dom trevering ----------');
const hh1 = document.querySelector('h1');
cl(hh1.querySelectorAll('.highlight'));
cl(hh1.childNodes);
cl(hh1.children);
hh1.firstElementChild.style.color = 'white';
hh1.lastElementChild.style.color = 'orangered';
cl(hh1.parentNode);
cl(hh1.parentElement);
//hh1.closest('.header').style.backgroundColor = `black`;
cl('closest h1 :')
cl(hh1.closest('h1'));
//cl( document.querySelector('h4').closest('h1'));
cl('------------');
//hh1.closest('h1').style.backgroundColor = 'blue';
cl(hh1.previousElementSibling);
cl(hh1.nextElementSibling);
cl(hh1.previousSibling);
cl(hh1.nextSibling);
cl(hh1.parentElement.children);
[...hh1.parentElement.children].forEach(function(el){
    if(el!==hh1) el.style.transform ='scale(0.5)';
});

cl('------end dom trevering ----------');

cl(document.documentElement);
cl(document.head);
cl(document.body);

//---------------------------------------------//
const header = document.querySelector('.header');
const allSecs = document.querySelectorAll('.section');
cl(allSecs);
document.getElementById('section--1');
const allButs = document.getElementsByTagName('button'); // reutun htmlcolection live node
cl(allButs);
cl(document.getElementsByClassName('btn')); // return htmlcollection

//createing and inserting elements
//.inserAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'we use cokie for improved functionlity and analytics.';
message.innerHTML =
  'we use cokie for improved functionlity and analytics.<button class="btn btn--close-cookie">Got it!</button>';
//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true));
// header.before(message);
// header.after(header);

// delete elements

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove(); // new way
});

//style
message.style.backgroundColor = '#37383d';
message.style.width = '80%';
cl(message.style.color);
cl(message.style.backgroundColor);
cl(getComputedStyle(message).color);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

const logo = document.querySelector('.nav__logo');
cl(logo.src);
cl(logo.alt);
cl(logo.className);

//Non-srandard
cl(logo.designer);
cl(logo.getAttribute('designer'));

cl(logo.src);
cl(logo.getAttribute('src'));

// data attribute
cl(logo.dataset.versionNumber);

event;

const alertH1 = function (e) {
  alert('Helo');
};

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', alertH1);
setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);

h1.onmousedown = alertH1;

const random255 = () => Math.floor(Math.random() * 255 + 1);
const randomColor = () => `rgb(${random255()}, ${random255()} ,${random255()})`;
cl(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  e.preventDefault();
  this.style.backgroundColor = randomColor();
  cl('---------link-----------');
  //target and | current target === this key word
  cl(e.target);
  cl(e.currentTarget);
  // dung su ly event o ham parent
  //e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  // cl('LINK');
  cl('---------link s -----------');
  this.style.backgroundColor = randomColor();
  cl(e.target);
  cl(e.currentTarget);
});
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    cl('-----------Nav------------');
    cl(e.target);
    cl(e.currentTarget);
    this.style.backgroundColor = randomColor();
    // cl('LINK');
  },
  false
);


//STICKY : navigation
const stickyNav = function (e) {

  if(window.scrollY> initalCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const obsCallback = function(entries , observer){
  entries.forEach(entry =>{
    cl(entry);
  });
};
const obsOption ={
root: null,
threshold: 0.1,
};

const observer =  new IntersectionObserver(obsCallback,obsOption);
observer.observe(section1);
window.addEventListener('scroll', stickyNav);

// life cucle DOM events
console.clear();
document.addEventListener('DOMContentLoaded',function(e){
  cl('html parse and dom tree buit');
  cl(e);
});

window.addEventListener('load', function(e){
  cl('load complete!');
  cl(e);
})
window.addEventListener('beforeunload',function(e){
  e.preventDefault();
  cl(e);
  e.returnValue ='mesage';
})