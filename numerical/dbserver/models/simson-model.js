const mongoose = require('mongoose')
const Schema = mongoose.Schema

const callsimson = new Schema(
    {
        a: { type: Number, required: false },
        b: { type: Number, required: false },
        fn: { type: String, required: false },
    },
)

module.exports = mongoose.model('simsons', callsimson)