const fs = require('fs')

const getAllBooks = () => {
    return JSON.parse(fs.readFileSync('books.json'))
}

const getBookId = (id) => {

    const books = JSON.parse(fs.readFileSync('books.json'));

    const book = books.filter(book => book.id === id)[0]

    return book
}

const insertBook = (newbook) => {
   const books = JSON.parse(fs.readFileSync('books.json'));

   const bookList = [...books, newbook];

   fs.writeFileSync('books.json', JSON.stringify(bookList));
}

const modifyBook = (modifications, id) => {
    
    let books = JSON.parse(fs.readFileSync('books.json'));
    const indexMod = books.findIndex(book => book.id === id);

    const contentMod = { ...books[indexMod], ...modifications }
    
    books[indexMod] = contentMod;

    fs.writeFileSync('books.json', JSON.stringify(books))

}


const removeBook = (id) => {
    let books = JSON.parse(fs.readFileSync('books.json'));
    const bookList = books.filter(book => book.id != id);
   fs.writeFileSync('books.json', JSON.stringify(bookList));
}

module.exports = {

    getAllBooks, getBookId, insertBook,
    modifyBook, removeBook, 
}