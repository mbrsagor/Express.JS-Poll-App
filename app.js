const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// Middleware app
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'I am root route'
    })
})


// Server config
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Starting development server at http://localhost:${PORT}\nSystem check identified no issues\nQuit the development server with CONTROL-C.`);
})
