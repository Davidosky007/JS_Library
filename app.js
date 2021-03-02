let myLibrary = [{
  title: 'Harry Potter',
  author: 'J.K.Rowling',
  pages: 500,
  readStatus: 'Already Read'
}];

function Book() {
  // the constructor....
} 


function addBookToLibrary() {
  // do stuff here
}

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
     console.log(title, author)
  }
}

const author = new Book("The David's", "David Bassey", 120, "not read")
author.info();