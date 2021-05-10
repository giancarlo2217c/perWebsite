const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const db = require('./db') //TODO setup database
// const Router = require('./routes/sites-router')
const sitesCtrl = require('./controllers/sites-ctrl')

const app = express()
const apiPort = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDb connection error')); //executes the error method with the string as parameter

app.get('/', (req, res) => {
    res.send('hello World')
})

app.post('/api/message', (req, res) => {
	console.log(req.body)
    console.log("saving contact")
    sitesCtrl.createContact(req, res)
})

app.use(express.static(path.join(__dirname,'front-end/build')));

console.log(path.join(__dirname, 'front-end/build'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'front-end/build'))
})
// app.use('/api', Router)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`)) //tiled quotes are important 
