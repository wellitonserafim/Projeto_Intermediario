
const mongoose = require('mongoose');
const config = require('../../config.json')

const url = `mongodb+srv://${config.user}:${config.password}@cluster0.grnqc.mongodb.net/${config.database}?retryWrites=true&w=majority`
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', function() {
  console.log('MongoDB está conectado!');
});

module.exports = mongoose