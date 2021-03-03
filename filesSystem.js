const fs = require('fs');


fs.readFile('./database/object.json', 'UTF-8', (err, data) => {
    console.log(JSON.stringify(data));
});

exports.writeDatabase = async (data) => {
    try {
        await fs.writeFile('./database/object.json', data.stringify(data, null, 2), err => console.log(err));
    } catch (err) {
        console.log(err);
    }
    return "Data Updated";
}