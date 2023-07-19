/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-classes-per-file */
import { Book } from './books.js';

const $cards = document.querySelector('.div-remove');
export const $titleInput = document.querySelector('#title');
export const $authorInput = document.querySelector('#author');

export class Books {
  constructor() {
    this.books = [];
    this.$removeButtons = null;
    this.initializeRemoveButtons();
  }

  initializeRemoveButtons() {
    this.$removeButtons = document.querySelectorAll('.remove-button');
    this.$removeButtons.forEach((removeButton) => {
      removeButton.addEventListener('click', () => {
        const bookTitle = removeButton.previousElementSibling.querySelector('.book-title').textContent;
        const bookAuthor = removeButton.previousElementSibling.querySelector('.book-author').textContent;
        for (let i = 0; i < this.books.length; i += 1) {
          if (this.books[i].title === bookTitle && this.books[i].author === bookAuthor) {
            this.books.splice(i, 1);
            localStorage.setItem('books', JSON.stringify(this.books));
            break;
          }
        }
        removeButton.parentNode.remove();
        this.displayBooks();
      });
    });
  }

  displayBooks() {
    const booksSaved = JSON.parse(localStorage.getItem('books'));
    if (booksSaved) {
      this.books = booksSaved;
      const booksHTML = this.books.map((book) => `
        <div class="card-book">
          <div class="text-container">
            <h3 class="book-title">${book.title}</h3> <span> by </span>
            <h3 class="book-author">${book.author}</h3>
          </div>
          <button class="remove-button">Remove</button>
          <hr>
        </div>
      `).join('');
      $cards.innerHTML = booksHTML;
      const element = document.querySelectorAll('.card-book');
      element.forEach((element, index) => {
        if (index % 2 === 1) {
          element.classList.add('alt');
        }
      });
      this.initializeRemoveButtons();
    }
  }

  addBook() {
    if ($titleInput.value !== '' && $authorInput.value !== '') {
      const book = new Book($titleInput.value, $authorInput.value);
      this.books.push(book);
      localStorage.setItem('books', JSON.stringify(this.books));
      this.displayBooks();
    }
  }
}
