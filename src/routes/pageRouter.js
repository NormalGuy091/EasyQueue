import express from 'express'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { getAQueue } from '../controllers/qrcode.controller.js'


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
router.post('/getqueue/get', (req, res) => {
    const { password } = req.body
    if (!password) {
        res.status(500).json({message: 'Please input password!'})
    }
    const queueNumber = getAQueue(password)
    res.status(200).json({queue: queueNumber, message: 'successful!'})
})
router.get('/getqueue', (req, res) => {
    res.sendFile(path.join(PUBLIC_DIRECTORY, 'getqueue.html'))
})

export default router