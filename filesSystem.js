const fs = require('fs');


fs.readFile('./database/object.json', 'UTF-8', (err, data) => {
    console.log(JSON.stringify(data));
});