// global variable

const overlay = document.querySelector('.overlay');
let lockPaddingValue = window.innerWidth - document.querySelector('.site-container').offsetWidth + 'px';
let timeout = 400;


if (document.querySelectorAll('.arrow')) {

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    document.body.classList.add('_touch');

    let navLinks = document.querySelectorAll('.nav__link--with-arrow');
    let subMenus = document.querySelectorAll('.nav__sublist');

    for (let i = 0; i < navLinks.length; i++) {

      let thisLink = navLinks[i];
      let subMenu = thisLink.nextElementSibling;

      let mobileListOpen = function () {
        thisLink.classList.add('active');
        subMenu.classList.add('active');
      };

      thisLink.addEventListener('click', (e) => {

        console.log(e.target);

        if (!e.target.classList.contains('active')) {

          for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active');
          }
          for (let i = 0; i < subMenus.length; i++) {
            subMenus[i].classList.remove('active');
          }

          mobileListOpen();

        } else {

          for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active');
          }
          for (let i = 0; i < subMenus.length; i++) {
            subMenus[i].classList.remove('active');
          }
        }

      });
    }
  } else {
    document.body.classList.add('_pc');
  }
}




// search bar

const searchBtn = document.querySelector('.search__btn');
const searchBar = document.querySelector('.search-bar');
const searchBarBtnClose = document.querySelector('.search-bar__close');

if (searchBar) {

  let closeBar = function () {
    searchBar.classList.remove('active');

    setTimeout(function () {
      document.body.style.paddingRight = 0;
      document.body.classList.remove('lock');
    }, timeout);
  };

  let openBar = function () {
    searchBar.classList.add('active');
    document.body.classList.add('lock');
    document.body.style.paddingRight = lockPaddingValue;
  };


  searchBtn.addEventListener('click', () => {
    openBar();
  });

  searchBarBtnClose.addEventListener('click', () => {
    closeBar();
  });

  document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open');
      closeBar();
    }
  });

}

//cart

const cartBtn = document.querySelector('.cart__btn');
const cartContent = document.querySelector('.cart__content');
const cartBtnClose = document.querySelector('.cart__close');

if (cartContent) {

  let openCart = function () {
    cartContent.classList.add('active');
    overlay.classList.add('cart-active');
    document.body.classList.add('lock');
    document.body.style.paddingRight = lockPaddingValue;
  };

  let closeCart = function () {
    cartContent.classList.remove('active');
    overlay.classList.remove('cart-active');

    setTimeout(function () {
      document.body.style.paddingRight = 0;
      document.body.classList.remove('lock');
    }, timeout);
  };

  cartBtn.addEventListener('click', () => {
    openCart();
  });

  cartBtnClose.addEventListener('click', () => {
    closeCart();
  });

  if (overlay) {
    overlay.addEventListener('click', function () {
      closeCart();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open');
      closeCart();
    }
  });
}
