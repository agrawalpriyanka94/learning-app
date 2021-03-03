const express = require('express');

const app = express();

app.use(express.json());

app.post('/api/v1/users', (req, res) => {
    console.log(req.body);
    res.status(201) // 201: Created, 200: OK/Success, 404: Not Found, 500: Internal Server error, 400: Bad request
        .send({
        status: 'Success',
        message: 'Data added'
    });
});


app.listen(8888, ()=>{
    console.log(`Sever startup at port ${8888}`);
});

/**
 /api/v1/users
    -> GET -> query
    -> POST -> Sending data and query
    -> Patch -> updating a particular or selective fields
    -> PUT  -> Update the entire entity or object
 */