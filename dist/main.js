/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/app.js":
/*!************************!*\
  !*** ./modules/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   $authorInput: () => (/* binding */ $authorInput),\n/* harmony export */   $titleInput: () => (/* binding */ $titleInput),\n/* harmony export */   Books: () => (/* binding */ Books)\n/* harmony export */ });\n/* harmony import */ var _books_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./books.js */ \"./modules/books.js\");\n/* eslint-disable import/prefer-default-export */\n\n\nconst $cards = document.querySelector('.div-remove');\nconst $titleInput = document.querySelector('#title');\nconst $authorInput = document.querySelector('#author');\n\nconst book = new _books_js__WEBPACK_IMPORTED_MODULE_0__.Book();\n\nclass Books {\n  constructor() {\n    this.books = book;\n    this.$removeButtons = null;\n    this.initializeRemoveButtons();\n  }\n\n  initializeRemoveButtons() {\n    this.$removeButtons = document.querySelectorAll('.remove-button');\n    this.$removeButtons.forEach((removeButton) => {\n      removeButton.addEventListener('click', () => {\n        const bookTitle = removeButton.previousElementSibling.querySelector('.book-title').textContent;\n        const bookAuthor = removeButton.previousElementSibling.querySelector('.book-author').textContent;\n        for (let i = 0; i < this.books.length; i += 1) {\n          if (this.books[i].title === bookTitle && this.books[i].author === bookAuthor) {\n            this.books.splice(i, 1);\n            localStorage.setItem('books', JSON.stringify(this.books));\n            break;\n          }\n        }\n        removeButton.parentNode.remove();\n        this.displayBooks();\n      });\n    });\n  }\n\n  displayBooks() {\n    const booksSaved = JSON.parse(localStorage.getItem('books'));\n    if (booksSaved) {\n      this.books = booksSaved;\n      const booksHTML = this.books.map((book) => `\n        <div class=\"card-book\">\n          <div class=\"text-container\">\n            <h3 class=\"book-title\">${book.title}</h3> <span> by </span>\n            <h3 class=\"book-author\">${book.author}</h3>\n          </div>\n          <button class=\"remove-button\">Remove</button>\n          <hr>\n        </div>\n      `).join('');\n      $cards.innerHTML = booksHTML;\n      const element = document.querySelectorAll('.card-book');\n      element.forEach((element, index) => {\n        if (index % 2 === 1) {\n          element.classList.add('alt');\n        }\n      });\n      this.initializeRemoveButtons();\n    }\n  }\n\n  addBook() {\n    if ($titleInput.value !== '' && $authorInput.value !== '') {\n      const book = {\n        title: $titleInput.value,\n        author: $authorInput.value,\n      };\n      this.books.push(book);\n      localStorage.setItem('books', JSON.stringify(this.books));\n      this.displayBooks();\n    }\n  }\n\n  showDate() {\n    const date = new Date();\n    const options = {\n      year: 'numeric',\n      month: 'long',\n      day: 'numeric',\n      hour: 'numeric',\n      minute: 'numeric',\n      second: 'numeric',\n      hour12: true,\n    };\n    this.date = date.toLocaleString('en-US', options);\n    return this.date;\n  }\n}\n\n\n//# sourceURL=webpack://awesome-books-es6/./modules/app.js?");

/***/ }),

/***/ "./modules/books.js":
/*!**************************!*\
  !*** ./modules/books.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Book: () => (/* binding */ Book)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nclass Book {\n  constructor(title, author) {\n    this.title = title;\n    this.author = author;\n  }\n}\n\n//# sourceURL=webpack://awesome-books-es6/./modules/books.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/app.js */ \"./modules/app.js\");\n/* eslint-disable import/no-extraneous-dependencies */\n/* eslint-disable max-classes-per-file */\n\n\nconst $listLink = document.querySelector('#list');\nconst $contactLink = document.querySelector('#contact');\nconst $addLink = document.querySelector('#add-new');\nconst $h1 = document.querySelector('#h1');\nconst $addButton = document.querySelector('#add');\nconst $date = document.getElementById('date');\n\nconst myBooks = new _modules_app_js__WEBPACK_IMPORTED_MODULE_0__.Books();\n\n$addButton.addEventListener('click', (e) => {\n  e.preventDefault();\n  if (_modules_app_js__WEBPACK_IMPORTED_MODULE_0__.$authorInput !== '' && _modules_app_js__WEBPACK_IMPORTED_MODULE_0__.$titleInput !== '') {\n    myBooks.addBook();\n    _modules_app_js__WEBPACK_IMPORTED_MODULE_0__.$authorInput.value = '';\n    _modules_app_js__WEBPACK_IMPORTED_MODULE_0__.$titleInput.value = '';\n  }\n});\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  myBooks.displayBooks();\n});\n\n$addLink.addEventListener('click', () => {\n  document.querySelector('.div-remove').classList.add('hide');\n  document.querySelector('.form').classList.remove('hide');\n  document.querySelector('.section-contact-info').classList.add('hide');\n  $h1.textContent = 'Add a new book';\n  $addLink.style.color = 'blue';\n  $listLink.style.color = 'black';\n  $contactLink.style.color = 'black';\n});\n\n$listLink.addEventListener('click', () => {\n  document.querySelector('.div-remove').classList.remove('hide');\n  document.querySelector('.form').classList.add('hide');\n  document.querySelector('.section-contact-info').classList.add('hide');\n  $h1.textContent = 'All awesome books';\n  $listLink.style.color = 'blue';\n  $addLink.style.color = 'black';\n  $contactLink.style.color = 'black';\n});\n\n$contactLink.addEventListener('click', () => {\n  document.querySelector('.div-remove').classList.add('hide');\n  document.querySelector('.form').classList.add('hide');\n  document.querySelector('.section-contact-info').classList.remove('hide');\n  $h1.textContent = 'Contact information';\n  $contactLink.style.color = 'blue';\n  $addLink.style.color = 'black';\n  $listLink.style.color = 'black';\n});\n\nsetInterval(() => {\n  $date.textContent = myBooks.showDate();\n}, 1000);\n\n\n//# sourceURL=webpack://awesome-books-es6/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;