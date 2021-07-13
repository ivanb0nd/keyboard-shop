if (document.querySelector('.main-title')) {
  let pageTitle    = document.querySelector('.main-title'),
      currentTitle = document.title;

  pageTitle.textContent = currentTitle;
}

if (document.querySelector('.section-title')) {
  let pageTitle    = document.querySelector('.section-title'),
      currentTitle = document.title;

  pageTitle.textContent = currentTitle;
}
