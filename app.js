const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const pollController = require('./pollController');

const app = express();

// Template engine
app.set('view engine', 'ejs');

// Middleware app
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route
app.get('/create', pollController.createPollGetController);
app.post('/create', pollController.createPollPostController);
app.get('/polls', pollController.getAllPolls);

app.get('/', (req, res) => {
    res.render('home');
})

// Server Port
const PORT = process.env.PORT || 3000

// MongoDB
mongoose.connect('mongodb://localhost:27017/poll', { useNewUrlParser: true })
    .then(() => {
        app.listen(3000, () => {
            console.log(`Starting development server at http://localhost:${PORT}\nSystem check identified no issues\nQuit the development server with CONTROL-C.`);
         })
    }).catch(e => {
        console.log(`Error: ${e}`);
    })


// // Server config
// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => {
//     console.log(`Starting development server at http://localhost:${PORT}\nSystem check identified no issues\nQuit the development server with CONTROL-C.`);
// })
