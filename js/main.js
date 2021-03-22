"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.addEventListener('load', function () {
  "use strict";

  var logoLink = document.querySelector('.header__logo-link');
  logoLink.style.setProperty('--animate-delay', '3s'); // ----- wow animation-----

  var wow = new WOW({
    boxClass: 'wow',
    // animated element css class (default is wow)
    animateClass: 'animated',
    // animation css class (default is animated)
    offset: 0,
    // distance to the element when triggering the animation (default is 0)
    mobile: false,
    // trigger animations on mobile devices (default is true)
    live: true,
    // act on asynchronously loaded content (default is true)
    callback: function callback(box) {// the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,
    // optional scroll container selector, otherwise use window,
    resetAnimation: true // reset animation on end (default is true)

  });
  wow.init(); // ----- плавная прокрутка-----

  var anchors = document.querySelectorAll('a[href^="#"]');

  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        var goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
        document.querySelector(goto).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    } // ----- burger menu -----

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var burger = document.querySelector('.navigation__toggle');
  var navigationMenu = document.querySelector('.navigation__menu');
  var body = document.querySelector('body');
  var menuLink = document.querySelector('.navigation__menu-link');

  function addClassBlock(nameClass) {
    burger.addEventListener('click', function () {
      burger.classList.toggle(nameClass);
      navigationMenu.classList.toggle('navigation__menu--active');
      body.classList.toggle('overflow');
    });
  }

  addClassBlock('navigation__toggle--active');

  function removeClass(nameClass) {
    menuLink.addEventListener('click', function () {
      burger.classList.toggle(nameClass);
      navigationMenu.classList.toggle('navigation__menu--active');
      document.body.classList.toggle('overflow');
    });
  }

  removeClass('navigation__toggle--active'); // ----- modal windows -----

  var modals = function modals() {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
      var trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector); // const popup = document.querySelectorAll('.popup-explanation'); 
      // const popupCallback = document.querySelectorAll('.popup-explanation__footer-link');      

      trigger.forEach(function (item) {
        item.addEventListener('click', function (e) {
          if (e.target) {
            e.preventDefault();
          }

          modal.classList.add('modal-open');
          document.body.classList.add('overflow');
        });
      });
      close.addEventListener('click', function () {
        modal.classList.remove('modal-open');
        document.body.classList.remove('overflow');
      });
      modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          modal.classList.remove('modal-open');
          document.body.classList.remove('overflow');
        }
      }); // popupCallback.addEventListener('click', () => {
      //     popup.classList.remove('modal-open');
      //     document.body.classList.remove('overflow');
      // });
    }

    function showModalByTime(selector, time) {
      setTimeout(function () {
        document.querySelector(selector).classList.add('modal-open');
        document.body.classList.add('overflow');
      }, time);
    }

    bindModal('.repair__call-btn', '.popup-call', '.popup__call--close');
    bindModal('.price__content-button--open-popup', '.popup-explanation__popup--active', '.popup-explanation__popup--close');
    bindModal('.question-competitors__popup--open', '.popup-explanation__popup-cheaper--active', '.popup-explanation__popup-cheaper--close'); // bindModal('.popup-explanation__footer-link', '.popup-call', '.popup__call--close');
    // bindModal('.popup-explanation__footer-link--callback-button', '.popup-call', '.popup__call--close');
    // bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup-call', 60000);
  };

  modals(); // ----- tabs -----

  var tabs = function tabs(headerSelector, tabSelector, contentSelector, activeClass) {
    var header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
      content.forEach(function (item) {
        item.style.display = 'none';
      });
      tab.forEach(function (item) {
        item.classList.remove(activeClass);
      });
    }

    function showTabContent() {
      var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      content[i].style.display = 'block';
      tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();
    header.addEventListener('click', function (e) {
      var target = e.target;

      if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
        tab.forEach(function (item, i) {
          if (target == item || target.parentNode == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  };

  tabs('.advantages__button-wrapper', '.btn__advantages', '.advantages__content', 'btn__advantages--active'); //  ----------------- sliders -----------

  var sliders = function sliders(slides, dir, prev, next) {
    var slideIndex = 1,
        paused = false;
    var items = document.querySelectorAll(slides);

    function showSlides(n) {
      if (n > items.length) {
        slideIndex = 1;
      }

      if (n < 1) {
        slideIndex = items.length;
      }

      items.forEach(function (item) {
        item.classList.remove("sample-apartments__slider--active");
      });
      items[slideIndex - 1].classList.add('sample-apartments__slider--active');
    }

    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    try {
      var prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next);
      prevBtn.addEventListener('click', function () {
        plusSlides(-1);
        items[slideIndex - 1].classList.remove('animate__slideInLeft');
        items[slideIndex - 1].classList.add('animate__slideInRight');
      });
      nextBtn.addEventListener('click', function () {
        plusSlides(1);
        items[slideIndex - 1].classList.remove('animate__slideInRight');
        items[slideIndex - 1].classList.add('animate__slideInLeft');
      });
    } catch (e) {}
  };

  sliders('.sample-apartments__slider', '', '.sample-apartments__button-left', '.sample-apartments__button-right');
  sliders('.sample-apartments__slider-description', '', '.sample-apartments__button-left', '.sample-apartments__button-right'); //  ----------------- animation -----------
  // const animItems = document.querySelectorAll('.title');
  // if (animItems.length > 0) {
  //     window.addEventListener('scroll', animOnScroll);
  //     function animOnScroll(params) {
  //         for (let index = 0; index < animItems.length; index++) {
  //             const animItem = animItems[index];
  //             const animItemHeight = animItem.offsetHeight;
  //             const animItemOffset = offset(animItem).top;
  //             const animStart = 4;
  //             let animItemPoint = window.innerHeight - animItemHeight / animStart;
  //             if (animItemHeight > window.innerHeight) {
  //                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
  //             }
  //             if ((pageYOffset > animItemOffset - animItemPoint)  &&  pageYOffset < (animItemOffset + animItemHeight)) {
  //                 animItem.classList.add('title__active');
  //             } else {
  //                 animItem.classList.remove('title__active');
  //             }
  //         }
  //     }
  //     function offset(el) {
  //         const rect = el.getBoundingClientRect(),
  //             scrollLeft = window.pageXOffset  ||  document.documentElement.scrollLeft,
  //             scrollTop = window.pageYOffset  ||  document.documentElement.scrollTop;
  //         return { top: rect.top + scrollTop, left: rect.left + scrollLeft}    
  //     }
  //     setTimeout(() => {
  //         animOnScroll();
  //     }, 300);
  // }
});