const mongoose = require('mongoose')
const Schema = mongoose.Schema

const callnewton = new Schema(
    {
        x: { type: Number, required: false },
        fn: { type: String, required: false },
    },
)

module.exports = mongoose.model('newton', callnewton)