let myLibrary = [];
let theID = "1";

const addBook = document.getElementById('add-book');
const exitForm = document.getElementById('close-form');
const submitBtn = document.getElementById('submit');
const titleField = document.getElementById('title');
const authorField = document.getElementById('author');
const pagesField = document.getElementById('pages');
const isRead = document.getElementById('read');
const bookLibrary = document.getElementById('library');

addBook.addEventListener('click', openForm);
exitForm.addEventListener('click', closeForm);
submitBtn.addEventListener('click', closeForm);
submitBtn.addEventListener('click', addBookToLibrary);
submitBtn.addEventListener('click', (e) => e.preventDefault());
pagesField.addEventListener('keydown', enforceMinMax);

function openForm() {
  titleField.value = "";
  authorField.value = "";
  pagesField.value = "";
  isRead.value = "";
  document.getElementById('error').style.display = "none";
  document.getElementById('new-book-form').style.display = "flex";
}

function closeForm() {
  document.getElementById('new-book-form').style.display = "none";
}

function addBookToLibrary(title, author, pages, read, bookID) {
  const titleField = document.getElementById('title');
  const authorField = document.getElementById('author');
  const pagesField = document.getElementById('pages');

  title = titleField.value;
  author = authorField.value;
  pages = pagesField.value;
  bookID = theID++;

  
  if(isRead.checked) { //checks to see if the switch is on or off
    read = "Yes";
  } else read = "No";

  if (
    title != "" &&
    author != "" &&
    pages != ""
    ) {
      const newBook = new book(title, author, pages, read, bookID);
      myLibrary.push(newBook)
      refreshLibrary();
  } else {
    document.getElementById('error').style.display = "block";
    document.getElementById('new-book-form').style.display = "flex";
  }

}

function refreshLibrary() {
  bookLibrary.textContent = "";
  myLibrary.forEach((book) => {
    const bookContainer = document.createElement('div');
    const bookCard = document.createElement('div');
    const actionButtons = document.createElement('div');
    const bookDescription = document.createElement('div');
    bookContainer.classList.add('book-container');
    bookContainer.setAttribute('id', book.bookID); //adds an ID to each book
    bookCard.classList.add('book-card');
    actionButtons.classList.add('action-buttons');
    bookDescription.classList.add('book-description');

    const deleteBtn = document.createElement('button');
    const readStatus = document.createElement('button');    
    deleteBtn.setAttribute('id', 'delete-btn');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', deleteBook);
    readStatus.setAttribute('id', 'read-status');
    readStatus.classList.add('read-status');
    readStatus.textContent = "Status";
    readStatus.addEventListener('click', changeStatus);

    const title = document.createElement('h1');
    title.classList.add('book-title');
    title.setAttribute('id', 'book-title');
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
    isRead.classList.add('field-content', 'read-status-content');
    isRead.textContent = book.read
    isReadDiv.classList.add('book-field');
    isReadDiv.append(read, isRead);
  
    bookLibrary.appendChild(bookContainer);
    bookContainer.appendChild(bookCard);
    bookContainer.append(actionButtons);
    actionButtons.append(deleteBtn, readStatus);
    bookCard.append(title, bookDescription);
    bookDescription.append(authorDiv, pageCountDiv, isReadDiv);
})
}

function deleteBook() {
  const currentID = this.closest('.book-container').id;
  for (i = myLibrary.length - 1; i >= 0; i--) {
    if(myLibrary[i].bookID == currentID) {
      myLibrary.splice(i,1);
    }
  }
  refreshLibrary();
}

function changeStatus() {
  const currentID = this.closest('.book-container').id;
  const theStatus = document.getElementById(currentID).querySelector('.read-status-content');
  if(theStatus.textContent === "No") {
    theStatus.textContent = "Yes";
  } else {
    theStatus.textContent = "No";
  }
}

function enforceMinMax(e) {
  if (pagesField.value != "") {
    if(e.key === "Backspace") { 
      return; //makes sure that backspace doesn't delete twice
    }
    if (parseInt(pagesField.value) > parseInt(pagesField.max)) {
      pagesField.value = pagesField.max;
    }
  }
}

//make a function that will be used to construct an object
function book(title, author, pages, read, bookID) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.bookID = bookID;
}




