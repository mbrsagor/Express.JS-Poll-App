const express = require('express');

const app = express();

// Create route
app.get('/', (req, res) => {
    res.send("Hello, I'm homepage");
});

app.get('*', (req, res) => {
    res.send("<h1>Sorry! 404 not found.</h1>");
});



// Server config
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is started localhost:${PORT}`);
})
