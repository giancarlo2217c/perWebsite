const mongoose = require('mongoose')

// LOCALDB mongoose.connect('mongodb://127.0.0.1:27017/contactsDB', {useNewUrlParser: true}).catch(e => {
//     console.error('connection error', e.message)
// })
mongoose.connect('mongodb+srv://admin-gian:test123@cluster0.jadzg.mongodb.net/contactsDB', {useNewUrlParser: true}).catch(e => {
    console.error('connection error', e.message)
})

const db = mongoose.connection

const contactSchema =  new mongoose.Schema({
    email: String,
    content: String
})

const Contact = mongoose.model("Contact", contactSchema);

const newContact = new Contact ({
    email: "bill@microsoft.com",
    content: "Hello, come work for microsoft."
});

newContact.save()

module.exports = db
