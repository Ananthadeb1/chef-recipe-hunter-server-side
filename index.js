const express = require('express')
const app = express()
const cors = require('cors')
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

const chefs = require('./Data/Chefs.json')

app.get('/', (req, res) => {
    res.send('chef running')
});

app.get('/chefs', async (req, res) => {
    const result = await chefs;
    res.send(result)
});

app.get('/chef/:id', async (req, res) => {
    const id = req.params.id;
    const chef = await chefs.find(c => c.id == id);
    res.send(chef);
});

app.listen(port, () => {
    console.log(`chef app listening on port ${port}`)
})