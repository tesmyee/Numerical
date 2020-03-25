const mongoose = require('mongoose')
const Schema = mongoose.Schema

const calltaylor = new Schema(
    {
        x: { type: Number, required: false },
        n: { type: Number, require: false},
        fn: { type: String, required: false },
    },
)

module.exports = mongoose.model('taylor', calltaylor)