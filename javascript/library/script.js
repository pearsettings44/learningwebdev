let library = [];
let number;
const booksContainer = document.getElementById("books");
const addBookButton = document.getElementById("addme");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");

/* Book constructor */
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

/* Add book to library */
Book.prototype.addToLibrary = function () {
  library.push(this);
};

Book.prototype.changeStus = function () {
  this.read === "read" ? (this.read = "unread") : (this.read = "read");
};

/* Displays all books in the library */
function displayLibrary() {
  let book = library.slice(-1)[0];
  /* Create container for the books's details */
  let bookDiv = document.createElement("div");
  /* Create <p> tags with the book's title. author and pages */
  for (j = 0; j < 3; j++) {
    element = document.createElement("p");
    element_content = document.createTextNode(`${book[Object.keys(book)[j]]}`);
    element.appendChild(element_content);
    bookDiv.appendChild(element);
  }
  /* Create a button that shows the book status (read or not read) */
  let read = document.createElement("button");
  let read_text = document.createTextNode(`${book.read}`);
  read.appendChild(read_text);
  read.classList.add("button-80");

  bookDiv.appendChild(read);
  bookDiv.classList.add("book");

  /* Add everything to the DOM */
  booksContainer.appendChild(bookDiv);
}

/* Add new book and display it */
addBookButton.addEventListener("click", function () {
  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pagesInput.value;
  let read = readInput.value;
  if (title && author && pages && read) {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.value = "";
    const book = new Book(title, author, pages, read);
    book.addToLibrary();
    displayLibrary();
  } else alert("please enter all information!");
});
