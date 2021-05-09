const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema(
    {
        email: String,
        content: String,
    }
)

module.exports = mongoose.model('contacts', contactSchema)