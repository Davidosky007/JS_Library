/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

// BOOK CLASS
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// UI CLASS
// eslint-disable-next-line linebreak-style
class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToLibrary(book));
  }


  static addBookToLibrary(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.pages}</td>
  <td class="bookstatus" id='${book.title}${book.pages}'>${book.status}</td>
  <td> <button class="btn btn-success changestatus" value='${book.status}'> change book status</button></td>
  <td><a href="#" class="delete btn btn-danger">Delete</a></td>
    `;
    list.appendChild(row);
  }
}


function addBookToLibrary() {
  // do stuff here
}

// EVENT TO ADD CLASS TO DISPLAY FORM

function addClassToForm() {
  document.getElementById('myForm').classList.toggle('form_list');
}
// Instantiate a book
const book = new Book(title, author, pages, status);
