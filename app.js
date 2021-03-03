let library;
const DEFAULT_DATA = [
  { name: 'The Lord of the Rings', author: 'Tolkien', pages: 266, status: 'read' },
  {
    name: 'Alice in Wonderland',
    author: 'Lewis Caroll',
    status: 'not read',
  },
  { name: 'Naruto', author: 'Masashi Kishimoto', pages: 543, status: 'read' },
];
const $name = document.querySelector('#name');
const $author = document.querySelector('#author');
const $status = document.querySelector('#status');
const $pages = document.querySelector('#pages');
const $tableBody = document.querySelector('#book-table-body');
const $form = document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
  render();
  clearForm();
});

const $table = document
  .querySelector('table')
  .addEventListener('click', (e) => {
    const currentTarget = e.target.parentNode.parentNode.childNodes[1];
    if (e.target.innerHTML === 'delete') {
      if (confirm(`are you sure you want to delete ${currentTarget.innerText}`)) { deleteBook(findBook(library, currentTarget.innerText)); }
    }
    if (e.target.classList.contains('status-button')) {
      changeStatus(findBook(library, currentTarget.innerText));
    }
    updateLocalStorage();
    render();
  });