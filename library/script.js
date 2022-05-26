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
    read.classList.add("button-80");

    bookDiv.appendChild(read);
    bookDiv.classList.add("book");

    /* Add everything to the DOM */
    booksContainer.appendChild(bookDiv);
  }
}

const book1 = new Book("afsfas", "afsfas", 22, "read");
const book2 = new Book(
  "harry",
  "potaaaaaaaaaaaaaaaaaaaaaaaaaaater",
  60,
  "unread"
);
const book3 = new Book("afsfas", "afsfas", 22, "read");
const book4 = new Book("harry", "potter", 60, "unread");
const book5 = new Book("afsfas", "afsfas", 22, "read");
const book6 = new Book("harry", "potter", 60, "unread");
const book7 = new Book("afsfas", "afsfas", 22, "read");
const book8 = new Book("harry", "potter", 60, "unread");

book1.addToLibrary();
book2.addToLibrary();
book3.addToLibrary();
book4.addToLibrary();

book5.addToLibrary();
book6.addToLibrary();
book7.addToLibrary();
book8.addToLibrary();
displayLibrary();
