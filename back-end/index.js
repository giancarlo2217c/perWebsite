const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db') //TODO setup database
const Router = require('./routes/sites-router')

const app = express()
const apiPort = 5000

app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDb connection error')); //executes the error method with the string as parameter

app.get('/', (req, res) => {
    res.send('hello World')
})

app.use('/api', Router)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`)) //tiled quotes are important 
