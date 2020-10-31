const express = require('express')
const app = express()
const cors = require('cors')

const routes = {
    "musica": require('./api/routes/rota_musica'),
    "compositor": require('./api/routes/rota_compositor'),
    "album": require('./api/routes/rota_album')
}

app.listen(process.env.PORT | 3000)
app.use(express.json())
app.use(cors())
app.use("/musica", routes.musica)
app.use("/compositor", routes.compositor)
app.use("/album", routes.album)

