import { Server } from "socket.io";
import { initializeQueue, addQueue, subtractQueue, getQueue} from "../controllers/queue.controller.js";

export function initializeSocket(httpServer) {
    initializeQueue()
    const io = new Server(httpServer);
    io.on('connection', (socket) => {
        socket.on('nextqueue', () => {
            addQueue();
            const queue = getQueue();
            console.log('Current queue: ', queue)
            io.emit('queuechanged', queue)
        });
        socket.on('getqueue', () => {
            const queue = getQueue();
            socket.emit('getqueue', queue);
        })
    });

    console.log('Socket.IO server is running!')
    return io;
}

