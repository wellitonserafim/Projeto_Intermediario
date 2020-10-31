const express = require('express')
const router = express.Router()
var Musica = require("../model/musica")

router.get('/', function (req, res) {
    var limit = parseInt(req.query.limit)
    var filter = {}
    if(req.query.nome){
        var filter = { nome: req.query.nome}
    }
    var result = Musica.find(filter, function (err, doc) {
        if (!err) {
            res.status(200).json(doc)
        } else {
            res.status(500).json({ Erro: "Erro ao acessar a musica" })
        }
    }).limit(limit)
})

router.post('/', function (req, res) {
    var musica = req.body
    var nova_musica = new Musica(musica)
    nova_musica.save(function (err) {
        if (!err) {
            res.json(nova_musica)
        } else {
            res.status(500).json({ erro: "Erro ao salvar a musica" })
        }
    })
})

router.put('/:id', function (req, res) {
    var id = req.params.id
    var musica = req.body
    Musica.findByIdAndUpdate(id, musica, function (err, doc) {
        if (!err) {
            res.json(doc)
        } else {
            res.status(500).json({ erro: "Erro ao salvar a musica" })
        }
    })
})

router.delete('/:id', function (req, res) {
    var id = req.params.id
    Musica.findByIdAndDelete(id, function (err, doc) {
        if (!err) {
            res.json(doc)
        } else {
            res.status(500).json({ erro: "Erro ao deletar a musica" })
        }
    })
})
module.exports = router