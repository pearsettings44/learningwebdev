let library = [];
const booksContainer = document.getElementById("books");

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

/* Displays all books in the library */
function displayLibrary() {
  for (i = 0; i < library.length; i++) {
    let book = library[i];
    /* Create container for the books's details */
    let bookDiv = document.createElement("div");
    /* Create <p> tags with the book's title. author and pages */
    for (j = 0; j < 3; j++) {
      element = document.createElement("p");
      element_content = document.createTextNode(
        `${book[Object.keys(book)[j]]}`
      );
      element.appendChild(element_content);
      bookDiv.appendChild(element);
    }
    /* Create a button that shows the book status (read or not read) */
    let read = document.createElement("button");
    let read_text = document.createTextNode(`${book.read}`);
    read.appendChild(read_text);

    bookDiv.appendChild(read);

    /* Add everything to the DOM */
    booksContainer.appendChild(bookDiv);
  }
}

