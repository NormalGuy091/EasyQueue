const socket = io()

const queueNumber = document.getElementById('queuenumber')

let there = socket ? 'yes' : 'no'
    console.log(there)
socket.on('queuechanged', (queue) => {
    
    if (!queue) return
    queueNumber.textContent = queue
})