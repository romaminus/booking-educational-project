const express = require('express');
const app = express();
const port = 5000;

const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, 'db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const { readDataFromDB } = require('./helpers/db')

const cors = require('cors');
app.use(cors());

app.use(express.json());

// app.get('/', (req, res) => {
//     res.json(db);
// });

app.get('/destination', (req, res)=>{
    try{
        const data = readDataFromDB();
        res.json(data.destination);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.get('/:id', async (req, res)=>{
    try{
        const data = readDataFromDB();
        const { id } = req.params;
        const city = data.destination.find(el => el.id === +id);
        if(!city){
            return res.status(404).json({ error: `City not found, id: ${id}` });
        }
        const cityHotelList = data.hotels.filter(hotel => hotel.city === city.label);
        res.json(cityHotelList);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get hotels list' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});