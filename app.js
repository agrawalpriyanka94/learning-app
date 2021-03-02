// Adding Express dependency for creating server and API
const express = require('express');

// creating object of Express named as app
const app = express();

// adding middleware for accessing request body in json format
app.use(express.json());

// adding post method
app.post('/api/v1/user', (request, response) => {
    console.log(request.body);

    const result = request.body;

    response.status(201).send(result);
});

// Starting the server at some port
const port = 8989;
app.listen(port, () => {
    console.log(`Server started at ${port}.`);
});
