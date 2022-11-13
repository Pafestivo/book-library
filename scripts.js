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

//make an object using the object constructor
const theHobbit = new book("The Hobbit", "J.R.R Tolkien", "295", "not read yet");

//using the info function we built inside the object constructor to log the object info
console.log(theHobbit.info());
