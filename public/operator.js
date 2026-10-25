const socket = io()

function next() {
    socket.emit('nextqueue')
}