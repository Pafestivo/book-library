let myLibrary = [];

const submitBtn = document.getElementById('submit');
const addBook = document.getElementById('add-book');
const bookLibrary = document.getElementById('library');

submitBtn.addEventListener('click', addBookToLibrary);
addBook.addEventListener('click', openForm);

function addBookToLibrary(title, author, pages, read) {
  const titleField = document.getElementById('title');
  const authorField = document.getElementById('author');
  const pagesField = document.getElementById('pages');
  const isRead = document.getElementById('read');
  title = titleField.value;
  author = authorField.value;
  pages = pagesField.value;
  if(isRead.checked) { //checks to see if the switch is on or off
    read = "Yes";
  } else read = "No";

  const newBook = new book(title, author, pages, read);
  myLibrary.push(newBook)
  refreshLibrary();
}

function openForm() {

}

function refreshLibrary() {
  bookLibrary.textContent = "";
  myLibrary.forEach((book) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
  
    const bookDescription = document.createElement('div');
    bookDescription.classList.add('book-description');
  
    const title = document.createElement('h1');
    title.classList.add('book-title');
    title.textContent = book.title;
  
    const author = document.createElement('p');
    const authorName = document.createElement('p');
    const authorDiv = document.createElement('div');
    author.classList.add('sub-title');
    author.textContent = `Author: `;
    authorName.classList.add('field-content')
    authorName.textContent = book.author;
    authorDiv.classList.add('book-field');
    authorDiv.append(author, authorName);
  
    const pages = document.createElement('p');
    const pageCount = document.createElement('p');
    const pageCountDiv = document.createElement('div');
    pages.classList.add('sub-title')
    pages.textContent = `Pages: `;
    pageCount.classList.add('field-content')
    pageCount.textContent = book.pages;
    pageCountDiv.classList.add('book-field');
    pageCountDiv.append(pages, pageCount);
  
    const read = document.createElement('p');
    const isRead = document.createElement('p');
    const isReadDiv = document.createElement('div');
    read.classList.add('sub-title');
    read.textContent = `Read: `;
    isRead.classList.add('field-content');
    isRead.textContent = book.read
    isReadDiv.classList.add('book-field');
    isReadDiv.append(read, isRead);
  
    bookDescription.append(authorDiv, pageCountDiv, isReadDiv);
    bookCard.append(title, bookDescription);
    bookLibrary.appendChild(bookCard);
  })
  }

//make a function that will be used to construct an object
function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}




