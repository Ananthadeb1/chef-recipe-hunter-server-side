const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

const chefs = require('./Data/Chefs.json')

app.get('/', (req, res) => {
    res.send('chef running')
});

app.get('/chefs', (req, res) => {
    res.send(chefs)
});



app.listen(port, () => {
    console.log(`chef app listening on port ${port}`)
})