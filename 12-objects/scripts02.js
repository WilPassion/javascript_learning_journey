// OBJECT - BOOK - Composto por propriedades e métodos

const book = {
    bookName:  "Interview with the Vampire",
    authorName: "Anne Rice",
    yearPublished: 1976,
    bookChapters: {
        chapter1: "Chapter 1: The Vampire",
        chapter2: "Chapter 2: The Vampire's Life",
        chapter3: "Chapter 3: The Vampire's Curse"
    },
    printBook: function() {
        console.log("Printing book details...");
    }
}

book.printBook();