import QRCode from 'qrcode'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

let queues = []

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const QRCodePath = path.join(__dirname, '..', 'QRCode')

export function getAQueue(password) {
    const len = queues.length 
    const queue = {
        id: len + 1,
        password: password
    }
    queues.push(queues)
    console.log(queues)
    return queue.id
}

export async function initializeQRCode()  {
    console.log(QRCodePath)
    try {
        await QRCode.toFile(
            'src/QRCode/qrcode.png',
            "https://localhost:9000/getqueue",
            {
                width: 300,
                margin: 2,
                errorCorrectionLevel: 'h'
            }
    )
    console.log('Successfully generated the QRCode! Please get the QRCode in the QRCode folder inside src.')
    }
    catch (e) {
        console.log(`QRCode Error: ${e}`)
    }
}


