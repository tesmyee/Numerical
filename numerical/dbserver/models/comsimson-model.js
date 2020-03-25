const mongoose = require('mongoose')
const Schema = mongoose.Schema

const callcomsimson = new Schema(
    {
        a: { type: Number, required: false },
        b: { type: Number, required: false },
        n: { type: Number, required: false},
        fn: { type: String, required: false },
    },
)

module.exports = mongoose.model('comsimsons', callcomsimson)