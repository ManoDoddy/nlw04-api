import express from 'express'

const app = express()

app.get('/', (req, res) =>{
    return res.json({message: 'GET - Hello World!'})
})

app.post('/', (req, res) => {
    return res.json({message: 'POST - Hello World!'})
})

app.listen('3000', () => {
    console.log('run...')
})