const mongoose = require('mongoose')
const Schema = mongoose.Schema

const callcentral = new Schema(
    {
        diff: {  type: Number, required: false},
        x: { type: Number, required: false },
        h: { type: Number, required: false },
        fn: { type: String, required: false },
    },
)

module.exports = mongoose.model('centrals', callcentral)