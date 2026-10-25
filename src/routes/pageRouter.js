import express from 'express'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const router = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIRECTORY = path.join(__dirname, '..', '..')
const PUBLIC_DIRECTORY = path.join(ROOT_DIRECTORY, "public")

router.get('/', (req, res) => {
    res.sendFile(path.join(PUBLIC_DIRECTORY, 'display_queue.html'))
})
router.get('/operator', (req, res) => {
    res.sendFile(path.join(PUBLIC_DIRECTORY, 'operator.html'))
})

export default router