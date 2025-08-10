//  FACTORY - function to create a new object
function createBook(title, author, year, pages) {
    book = {
        bookTitle: title,
        bookAuthor: author,
        yearPublished: year,
        bookPages: pages,
        printBook: function() {
            console.log("Printing book...")
        }
    }
    return book;
}

const book1 = createBook("Harry Potter", "J.K. Rowling", 1997, 309);
console.log(book1);

const book2 = createBook("The Hobbit", "J.R.R. Tolkien", 1937, 310);
book2.color = "Green"; // ADDING NEW PROPERTY
console.log(book2);