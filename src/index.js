/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-classes-per-file */
import { Books, $authorInput, $titleInput } from '../modules/app.js';

const $listLink = document.querySelector('#list');
const $contactLink = document.querySelector('#contact');
const $addLink = document.querySelector('#add-new');
const $h1 = document.querySelector('#h1');
const $addButton = document.querySelector('#add');
const $date = document.getElementById('date');

const myBooks = new Books();

$addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if ($authorInput !== '' && $titleInput !== '') {
    myBooks.addBook();
    $authorInput.value = '';
    $titleInput.value = '';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  myBooks.displayBooks();
});

$addLink.addEventListener('click', () => {
  document.querySelector('.div-remove').classList.add('hide');
  document.querySelector('.form').classList.remove('hide');
  document.querySelector('.section-contact-info').classList.add('hide');
  $h1.textContent = 'Add a new book';
  $addLink.style.color = 'blue';
  $listLink.style.color = 'black';
  $contactLink.style.color = 'black';
});

$listLink.addEventListener('click', () => {
  document.querySelector('.div-remove').classList.remove('hide');
  document.querySelector('.form').classList.add('hide');
  document.querySelector('.section-contact-info').classList.add('hide');
  $h1.textContent = 'All awesome books';
  $listLink.style.color = 'blue';
  $addLink.style.color = 'black';
  $contactLink.style.color = 'black';
});

$contactLink.addEventListener('click', () => {
  document.querySelector('.div-remove').classList.add('hide');
  document.querySelector('.form').classList.add('hide');
  document.querySelector('.section-contact-info').classList.remove('hide');
  $h1.textContent = 'Contact information';
  $contactLink.style.color = 'blue';
  $addLink.style.color = 'black';
  $listLink.style.color = 'black';
});

setInterval(() => {
  $date.textContent = myBooks.showDate();
}, 1000);
