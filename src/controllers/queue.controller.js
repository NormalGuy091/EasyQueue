export let queue

export function initializeQueue() {
    queue = 0
    console.log('Current queue: ', queue)
}

export function addQueue() {
    queue += 1
    
}

export function subtractQueue() {
    queue -= 1
    
}

export function getQueue() {
    return queue
}