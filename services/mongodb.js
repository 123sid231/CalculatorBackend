const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Calculator').then((resp) => {
    console.log("Database connected successfully")
}).catch((err) => {
    console.log(`Error connecting to database ${err?.message}`)
})

module.exports = { mongoose }