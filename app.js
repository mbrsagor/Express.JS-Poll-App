const express = require('express');

const app = express();


// Template engine
app.set('view engine', 'ejs');

// Create route

app.get('/json', (req, res) => {
    let _data = {name: 'mbr-sagor', age:25, phone:'+8801773474709', address:'Dhaka-Bangladesh'}
    res.json(_data);
})

app.get('/', (req, res) => {
    res.render("index");
});

app.get('*', (req, res) => {
    res.send("<h1>Sorry! 404 not found.</h1>");
});



// Server config
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Starting development server at http://localhost:${PORT}\nSystem check identified no issues\nQuit the development server with CONTROL-C.`);
})
