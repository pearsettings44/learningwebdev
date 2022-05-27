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
  console.log(`${book.read}`);
  if (book.read == "read") read.style.backgroundColor = "#74e9c6";
  if (book.read == "not read") read.style.backgroundColor = "#ff6d6d";
  /* Handles reading status */
  read.addEventListener("click", function () {
    if (this.innerHTML == "Read") {
      this.style.backgroundColor = "#ff6d6d";
      this.innerHTML = "Not Read";
    } else {
      this.style.backgroundColor = "#74e9c6";
      this.innerHTML = "Read";
    }
  });

  /* Create a button that deletes the book */
  let deletes = document.createElement("button");
  let deletes_text = document.createTextNode("Delete");
  deletes.appendChild(deletes_text);
  deletes.classList.add("delete");
  deletes.classList.add("button-80");
  deletes.dataset.index = library.length - 1;

  /* Handles deletion */
  deletes.addEventListener("click", function () {
    index = this.dataset.index;
    library.splice(index, 1);
    let deletedBook = booksContainer.querySelectorAll(
      `[data-index="${index}"]`
    )[0];
    booksContainer.removeChild(deletedBook.parentNode);
  });

  bookDiv.appendChild(read);
  bookDiv.appendChild(deletes);

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
  /* make sure that everything is fill */
  if (title && author && pages && read) {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.value = "";
    const book = new Book(title, author, pages, read);
    book.addToLibrary();
    displayLibrary();
    deleteBtn = document.getElementsByClassName("delete");
  } else alert("please enter all information!");
});
