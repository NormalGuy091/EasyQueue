const previousQueue = localStorage.getItem('queue')

const passwordInputArea = document.getElementById('password-input')
const formSection = document.getElementById('form')
const queueNumberSection = document.getElementById('queue-number')
const queueNumber = document.getElementById('queuenumber')
const showPasswordCheckbox = document.getElementById('show-password')
showPasswordCheckbox.checked = false

if (previousQueue) {
    showQueue(previousQueue)
    console.log('Fetch previous queue!')
} else showPasswordPrompt()

async function getQueue() {
    const password = passwordInputArea.value

    const response = await fetch('/getqueue/get', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'password': password
        })
    })
    const data = await response.json()
    if (!data.queue) {
        if (!data.message) alert('Internal Server Error. Please contact administrator.')
        alert(data.message)
        return 
    } 
    localStorage.setItem('queue', data.queue)
    showQueue(data.queue)
}

function showQueue(queue) {
    formSection.style.display = 'none'
    queueNumberSection.style.display = 'flex'
    queueNumber.innerText = queue
}

function showPasswordPrompt() {
    formSection.style.display = 'flex'
    queueNumberSection.style.display = 'none'
    queueNumber.innerText = ''
}

function resetQueue() {
    localStorage.removeItem('queue')
    window.location.reload()
}

function showPassword() {
    if (showPasswordCheckbox.checked) {
        passwordInputArea.type = 'text'
    } else {
        passwordInputArea.type = 'password'
    }
}