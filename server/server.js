import express from 'express'
import albumsRouter from './routes/albums.js'

const app = express()

app.use('/public', express.static('./public'))

app.use('./scripts', express.static('./public/scripts'))

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Listicle API: Favorite Albums</h1>')
})

app.use('/albums', albumsRouter)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})

