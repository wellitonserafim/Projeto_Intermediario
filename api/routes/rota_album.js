const express = require('express')
const router = express.Router()
var Album = require("../model/album")

router.get('/', function (req, res) {
    var limit = parseInt(req.query.limit)
    var filter = {}
    if (req.query.nome) {
        var filter = { nome: req.query.nome }
    }
    var result = Album.find(filter, function (err, doc) {
        if (!err) {
            res.status(200).json(doc)
        } else {
            res.status(500).json({ Erro: "Erro ao acessar o album" })
        }
    }).limit(limit)
})

router.post('/', function (req, res) {
    var album = req.body
    var novo_album = new Album(album)
    novo_album.save(function (err) {
        if (!err) {
            res.json(novo_album)
        } else {
            res.status(500).json({ erro: "Erro ao salvar o album" })
        }
    })
})

router.put('/:id', function (req, res) {
    var id = req.params.id
    var album = req.body
    Album.findByIdAndUpdate(id, album, function (err, doc) {
        if (!err) {
            res.json(doc)
        } else {
            res.status(500).json({ erro: "Erro ao salvar o album" })
        }
    })
})

router.delete('/:id', function (req, res) {
    var id = req.params.id
    Album.findByIdAndDelete(id, function (err, doc) {
        if (!err) {
            res.json(doc)
        } else {
            res.status(500).json({ erro: "Erro ao deletar o album" })
        }
    })
})

module.exports = router