const express = require('express');
const routeBook = require('./routes/books')

const app = express();

app.use(express.json());

app.use('/books', routeBook);

const port = 8000;

app.listen(port, () => {
    console.log(`Listen port: ${port}`)
})