import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pageRouter from './routes/pageRouter.js'
import { createServer } from 'node:http'
import { initializeSocket  } from './socket/index.js'
import { initializeQRCode } from './controllers/qrcode.controller.js'

const app = express()
const server = createServer(app)


// Public Directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIRECTORY = path.join(__dirname, '..')
const PUBLIC_DIRECTORY = path.join(__dirname, "..", "public")

initializeSocket(server)

app.use(express.json())
app.use(express.static(PUBLIC_DIRECTORY))
app.use(pageRouter)


server.listen(9000,  () => {
    initializeQRCode()
    console.log(`Server is running on port 9000`)
})