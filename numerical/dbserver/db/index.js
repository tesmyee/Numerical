const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://user1:eye88@cluster0-vdntc.mongodb.net/numerical', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db