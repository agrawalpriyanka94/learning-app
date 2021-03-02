// Adding Express dependency for creating server and API
const express = require('express');

// creating object of Express named as app
const app = express();

// Starting the server at some port
const port = 8989;
app.listen(port, ()=>{
    console.log(`Server started at ${port}.`);
});