import express from 'express'

const app = express()

app.get('/', (req,res) => {
    res.send('<h1>Halo!</h1>')
})

app.listen(9000,  () => {
    console.log(`Server is running on port 9000`)
})