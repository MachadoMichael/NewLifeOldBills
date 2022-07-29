const mongoose = require('mongoose')

const billSchema = new mongoose.Schema({
    name: String,
    value: Number
})

module.exports = mongoose.model('Bill', billSchema)