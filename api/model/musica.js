const mongoose = require('../data')

var musicaSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    }
})

var musica = new mongoose.model("musica", musicaSchema,"musica")

module.exports = musica