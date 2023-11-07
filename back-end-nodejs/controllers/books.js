const fs = require('fs');
const { getAllBooks, getBookId, insertBook, modifyBook, removeBook } = require('../services/books.js');

const getBooks = (req, res) => {
    try {
        const books = getAllBooks()
        res.send(books)
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const getBook = (req, res) => {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const book = getBookId(id)
            res.send(book)
            console.log()
        } else {
            res.status(422)
            res.send('Invalid id')
        }

    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const postBook = (req, res) => {
    try {
        const newBook = req.body;
        if(req.body.name) {
            insertBook(newBook);
            res.status(201)
            res.send('Insert book sucefull');
        } else {
            res.status(422)
            res.send("O campo nome é obrigatório")
        }
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const patchBook = (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        if (id && Number(id)) {
            modifyBook(body, id);
            res.send('Item modify sucefull')
        } else {
            res.status(422)
            res.send('Invalid id')
        }

    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


const deleteBook = (req, res) => {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            removeBook(id)
            res.send('Delete item sucefull')
        } else {
            res.status(422)
            res.send('Invalid id')
        }
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


module.exports = {
    getBooks, getBook, postBook,
    patchBook, deleteBook,
}