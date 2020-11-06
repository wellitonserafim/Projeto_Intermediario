const mongoose = require('../data')

var albumSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    genero: {
        type: String,
        require: true
    },
    ano: {
        type: Number,
        require: true
    },
    gravadora: {
        type: String,
        require: true
    },
})

var album = new mongoose.model("album", albumSchema,"album")

module.exports = album