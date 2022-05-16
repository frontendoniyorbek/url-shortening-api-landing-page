const elUrlShortener = document.querySelector('.url-shortner');
const elUrlShortnerForm = document.querySelector('.js-url-shortner-form');
const elUrlShortnerResults = document.querySelector('.url-shortner__results');


if (elUrlShortnerForm) {
  elUrlShortnerForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    elUrlShortnerResults.classList.add('url-shortner__results--open');
  });
}

if (elUrlShortener) {
  elUrlShortener.addEventListener('click', function(evt) {
    if (evt.target.matches('.js-copy-short-link-button')) {
      //Change button text
      evt.target.textContent = 'Copied!' ;

      // Change button bgcolor
      evt.target.classList.add('url-shortner__copy-button-copied');

      // Reset button text and class after 1 secund
      setTimeout(function() {
        evt.target.textContent = 'Copy';
        evt.target.classList.remove('url-shortner__copy-button-copied');
      },1000)
    }

  });
}