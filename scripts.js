let myLibrary = [
  {
    title: "The Beaver",
    author: "Beaver Man",
    pages: "253",
    read: "Yes"
  },
  {
    title: "The Bachelor",
    author: "Steven Rogers",
    pages: "975",
    read: "No"
  },
  {
    title: "Mr. Vampire",
    author: "Mesmorial Ballet",
    pages: "17",
    read: "Yes"
  }
];

const bookLibrary = document.getElementById('library');

myLibrary.forEach((book) => {
  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  const bookDescription = document.createElement('div');
  bookDescription.classList.add('book-description');

  const title = document.createElement('h1');
  title.classList.add('book-title');
  title.textContent = book.title;

  const author = document.createElement('p');
  author.classList.add('book-author');
  author.textContent = `Author: ${book.author}`;

  const pages = document.createElement('p');
  pages.classList.add('book-pages')
  pages.textContent = `Pages: ${book.pages}`;

  const read = document.createElement('p');
  read.classList.add('book-read');
  read.textContent = `Read: ${book.read}`;

  bookDescription.append(author, pages, read)
  bookCard.append(title, bookDescription);
  bookLibrary.appendChild(bookCard);
})


//make a function that will be used to construct an object
function book(title, author, pages, read) {
  this.name = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  //add a function inside the object to return the book info
  this.info = function() {
    return `${this.name} by ${this.author}, ${this.pages} pages, ${this.read}.`;
  }
}


function addBookToLibrary(title, author, pages, read) {
  // title = prompt("What is the name of the book?");
  // author = prompt("Author?");
  // pages = prompt("Pages?");
  // read = prompt("Have you read the book?");

  const newBook = new book(title, author, pages, read);
  myLibrary.push(newBook)
}

addBookToLibrary();