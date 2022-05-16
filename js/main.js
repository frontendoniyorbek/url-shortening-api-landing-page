const elUrlShortnerForm =document.querySelector('.js-url-shortner-form');
const elUrlShortnerResults =document.querySelector('.url-shortner__results');

elUrlShortnerForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  elUrlShortnerResults.classList.add('url-shortner__results--open');
});