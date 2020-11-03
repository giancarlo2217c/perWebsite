const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/contactsDB', {useNewUrlParser: true}).catch(e => {
    console.error('connection error', e.message)
})

const db = mongoose.connection

const contactSchema =  new mongoose.Schema({
    name: String,
    phone: Number,
    email: String
})

const Contact = mongoose.model("Contact", contactSchema);

const newContact = new Contact ({
    name: "Bill Gates",
    phone: 5105861693,
    email: "bill@microsoft.com"
});

newContact.save()

module.exports = db
