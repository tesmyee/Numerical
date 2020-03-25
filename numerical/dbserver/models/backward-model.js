const mongoose = require('mongoose')
const Schema = mongoose.Schema

const callback = new Schema(
    {
        diff: {  type: Number, required: false},
        x: { type: Number, required: false },
        h: { type: Number, required: false },
        fn: { type: String, required: false },
    },
)

module.exports = mongoose.model('backwards', callback)