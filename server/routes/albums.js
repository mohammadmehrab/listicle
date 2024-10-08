import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import getAlbums from '../controllers/albums.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', getAlbums)

router.get('/:albumId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/album.html'))
})

export default router