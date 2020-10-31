const express = require('express')
const router = express.Router()
var Musica = require("../model/musica")

router.get('/', function(req, res){
    var result = Musica.find(function(err, doc){
        if(!err){
            res.status(200).json(doc)
        }else{
            res.status(500).json({Erro: "Erro ao acessar o recurso"})
        }
    })
    })

router.post('/', function(req,res){
    var musica = req.body
    var nova_musica = new Musica(musica)
    nova_musica.save(function(err){
        if(!err){
            res.json(nova_musica)
        } else{
            res.status(500).json({erro: "Erro ao salvar"})
        }
    })
})

module.exports = router