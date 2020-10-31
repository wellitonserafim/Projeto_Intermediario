const mongoose = require('../data')

var musicaSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    }
})

var Musica = new mongoose.model("Musica", musicaSchema)

module.exports = Musica