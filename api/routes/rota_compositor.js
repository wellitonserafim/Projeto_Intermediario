const express = require('express')
const router = express.Router()
var Compositor = require("../model/compositor")

router.get('/', function (req, res) {
    var limit = parseInt(req.query.limit)
    var filter = {}
    if (req.query.nome) {
        var filter = { nome: req.query.nome }
    }
    var result = Compositor.find(filter, function (err, doc) {
        if (!err) {
            res.status(200).json(doc)
        } else {
            res.status(500).json({ Erro: "Erro ao acessar o compositor" })
        }
    }).limit(limit)
})

router.post('/', function (req, res) {
    var compositor = req.body
    var novo_compositor = new Compositor(compositor)
    novo_compositor.save(function (err) {
        if (!err) {
            res.json(novo_compositor)
        } else {
            res.status(500).json({ erro: "Erro ao salvar o compositor" })
        }
    })
})

router.put('/:id', function (req, res) {
    var id = req.params.id
    var compositor = req.body
    Compositor.findByIdAndUpdate(id, compositor, function (err, doc) {
        if (!err) {
            res.json(doc)
        } else {
            res.status(500).json({ erro: "Erro ao salvar o compositor" })
        }
    })
})

router.delete('/:id', function (req, res) {
    var id = req.params.id
    Compositor.findByIdAndDelete(id, function (err, doc) {
        if (!err) {
            res.json(doc)
        } else {
            res.status(500).json({ erro: "Erro ao deletar o compositor" })
        }
    })
})

module.exports = router