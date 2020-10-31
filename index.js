const express = require("express")
const app = express()
const cors = require('cors')

const routes = {
    "musica": require('./api/data/routes/rota_musica')
}

app.listen(process.env.PORT | 3000)
app.use(express.json())
app.use(cors())
app.use("/musica", routes.musica)