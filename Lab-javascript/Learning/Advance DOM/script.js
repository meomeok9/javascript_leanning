'use strict';

const cl = obj => console.log(obj);
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const allSections = document.querySelectorAll('.section');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const initalCoords = section1.getBoundingClientRect();
const header = document.querySelector('.header');
const navHeigh = nav.getBoundingClientRect().height; // chieu dai dong cua nav
const imgTargets = document.querySelectorAll('img[data-src]'); // the img cothuoc tinh data-src

const optionNavObs = {
  // object lam doi so cua ham stickyNav theo mac dinh
  root: null,
  threshold: 0, // % 0.1 = 10%
  rootMargin: `-${navHeigh}px`, // hien thi truoc khi scroll ra ngoai
};
const optSectionObs = {
  root: null,
  threshold: 0.15,
};
const imgOptionObserver = {
  root: null,
  threshold: 0,
};

//------------------------- FUNCTION ---------------------------//

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const scrollLinkPage = function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    cl(this); // this is nav_links NOT nav__link
    document
      .querySelector(e.target.getAttribute('href')) // e.target => link that clicked
      .scrollIntoView('smooth');
  }
};
//tabs
const tabbedButtonFunction = function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  // active tab
  tabs.forEach(el => el.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  //acctive conten
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
};
// fade nav
const fadeNav = function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const linked = e.target;
    const siblings = linked.closest('.nav').querySelectorAll('.nav__link');
    const logo = linked.closest('.nav').querySelector('img');
    //cl(siblings);
    siblings.forEach(el => {
      if (el !== linked) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

const stickyNav = function (entriesWhenObserverHeader) {
  const [entry] = entriesWhenObserverHeader;
  if (!entry.isIntersecting)
    // if ko nhin thay (threshold = 0%),
    nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const revealsection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target); // xem roi thi thoi bo obsever kko xem lai nua
};

const removeFilter = function () {
  //loading lazy remove filter
  this.target.classList.remove('lazy-img');
};

const loadLazyImg = function (entries, observer) {
  //loading lazy
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  // repate src with data-src
  entry.target.src = entry.target.dataset.src;
  // sau khi thay doi src thi bat dau loading. vi vay load xong thi moi remove filter
  entry.target.addEventListener('load', removeFilter.bind(entry));
  observer.unobserve(entry.target);
};

//----------------------------------------------------------------------//

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

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// uy quyen su kien : event delegation (su kien say ra o nav__link nhung uy qyuen su ly cho nav_links)
document.querySelector('.nav__links').addEventListener('click', scrollLinkPage);

// tabbed component
tabsContainer.addEventListener('click', tabbedButtonFunction);

//menu dafe animation

nav.addEventListener('mouseover', fadeNav.bind(0.5));

nav.addEventListener('mouseout', fadeNav.bind(1));

//sticky navigation
new IntersectionObserver(stickyNav, optionNavObs).observe(header); //khai bao 1 observer, apply to header

//reveal sections when scrollTo
const sectionObserver = new IntersectionObserver(revealsection, optSectionObs);

allSections.forEach(el => el.classList.add('section--hidden'));

allSections.forEach(section => sectionObserver.observe(section));

//lazy loading tecknich
const imgObserver = new IntersectionObserver(loadLazyImg, imgOptionObserver);

imgTargets.forEach(img => imgObserver.observe(img));

//                                  make a slider
//-----------------------------------Start slider-----------------------------------//
const SliderFc = function () {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length - 1;

  // slide
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
    );
  };
  // slide
  const createactiveDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    const selectedDot = document.querySelector(
      `.dots__dot[data-slide='${slide}']` // select dots__dot cos
    );
    selectedDot.classList.add('dots__dot--active');
  };

  const updateSlide = function (e) {
    if (
      this.classList?.contains('slider__btn--right') ||
      e.key === 'ArrowRight'
    ) {
      if (curSlide === maxSlide) curSlide = 0;
      else curSlide++;
    } else if (
      this.classList?.contains('slider__btn--left') ||
      e.key === 'ArrowLeft'
    ) {
      if (curSlide === 0) curSlide = maxSlide;
      else curSlide--;
    }
    goToSlide(curSlide);
    createactiveDot(curSlide);
  };

  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class = "dots__dot" data-slide="${i}" type="button">${
          i + 1
        }</button>`
      );
    });
  };

  const dotContainerFucCalbck = function (e) {
    if (e.target.classList.contains('dots__dot')) {
      goToSlide(e.target.dataset.slide);
      createactiveDot(e.target.dataset.slide);
    }
  };

  const init = function () {
    goToSlide(0);
    createDots();
    createactiveDot(0);
  };

  btnRight.addEventListener('click', updateSlide);
  btnLeft.addEventListener('click', updateSlide);
  document.addEventListener('keydown', updateSlide);
  dotContainer.addEventListener('click', dotContainerFucCalbck);
  init();
};
//-----------------------------------End slider---------------------------------------//
SliderFc();


