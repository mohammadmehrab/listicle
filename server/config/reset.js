import { pool } from "./database.js";
import './dotenv.js'
import albumData from "../data/albums.js";

async function createAlbumsTable() {
    const createTableQuery = `
        DROP TABLE IF EXISTS albums;

        CREATE TABLE IF NOT EXISTS albums (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            artist VARCHAR(255) NOT NULL,
            albumCover VARCHAR(255) NOT NULL,
            releaseYear VARCHAR(10) NOT NULL,
            genre VARCHAR(255) NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 albums table created successfully')
    } catch (err) {
        console.error('⚠️ error creating albums table', err)
    }

}

const seedAlbumsTable = async () => {
    await createAlbumsTable()

    albumData.forEach((album) => {
        const insertQuery = {
            text: 'INSERT INTO albums (title, artist, albumCover, releaseYear, genre) VALUES ($1, $2, $3, $4, $5)'
        }

        const values = [
            album.title,
            album.artist,
            album.albumCover,
            album.releaseYear,
            album.genre
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting album', err)
                return
            }
        
            console.log(`✅ ${album.title} added successfully`)
        })
    })

}

seedAlbumsTable()