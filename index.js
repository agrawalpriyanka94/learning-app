const express = require('express');
const fs = require('fs');

const data = fs.readFileSync('./database/object.json', 'UTF-8');
const database = JSON.parse(data);
console.log(JSON.stringify(database, null, 2));

const app = express();
app.use(express.json());

app.post('/api/v1/users', (req, res) => {
    console.log(req.body)
    res.status(201) // 201: Created, 200: OK/Success, 404: Not Found, 500: Internal Server error, 400: Bad request
        .send({
            status: 'Success',
            message: 'Data added'
        });
});

app.get('/api/v1/users/:id', (req, res) => {
    const id = req.params.id;

/*    for (let i = 0; i < database.length; i++) {
        console.log(database[i]);
        if(database[i].id==id){
            // User found
            return res.status(200)
                .contentType('application/json')
                .json(database[i]);
        }
    }*/

    const fetchedUser = database.filter(user => user.id == id);
    if(fetchedUser.length == 1)
    return res.status(200)
        .contentType('application/json')
        .json(fetchedUser[0]);
    // User Not found
    else
    return res.status(404)
        .contentType('application/json')
        .json({
            status:'failed',
            message:'user not found'
        });

});

app.listen(9999,()=>{
    console.log('server started at port ')

});