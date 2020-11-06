const mongoose = require('../data')

var compositorSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    nome_completo: {
        type: String,
        require: true
    },
    nacionalidade: {
        type: String,
        require: true
    }
})

var compositor = new mongoose.model("compositor", compositorSchema,"compositor")

module.exports = compositor