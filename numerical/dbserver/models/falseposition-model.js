const mongoose = require('mongoose')
const Schema = mongoose.Schema

const callbisections = new Schema(
    {
        xl: { type: Number, required: false },
        xr: { type: Number, required: false },
        fn: { type: String, required: false },
    },
)

module.exports = mongoose.model('bisections', callbisections)