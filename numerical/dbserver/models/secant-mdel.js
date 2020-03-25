const mongoose = require('mongoose')
const Schema = mongoose.Schema

const callsecant = new Schema(
    {
        x: { type: Number, required: false },
        fn: { type: String, required: false },
    },
)

module.exports = mongoose.model('secant', callsecant)