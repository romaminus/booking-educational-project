const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, '../db.json');


function readDataFromDB(){
    try{
        const dataFromDB = fs.readFileSync(dbPath, 'utf8').trim();
        if (!dataFromDB) {
            throw new Error('DB file is empty');
        }
        const data = JSON.parse(dataFromDB);
        return data;
    } catch (error) {
        console.error('Error reading data from DB:', error);
        return error;
    }
};

module.exports = {
    readDataFromDB,
}