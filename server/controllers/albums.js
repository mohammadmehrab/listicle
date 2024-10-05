import { pool } from '../config/database.js'


const getAlbums = async (req, res) => {
    console.log("test")
    try {
        const results = await pool.query('SELECT * FROM albums ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch(err) {
        res.status(409).json({ error: err.message})
    }
} 

export default getAlbums