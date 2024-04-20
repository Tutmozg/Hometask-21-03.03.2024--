const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')


const server = express() // вызов express 

const PORT = 3001

// функция, определения пути до файла
const createPath = (folder, page, ext) =>
    path.resolve(__dirname, folder, `${page}.${ext}`)
server.use(express.static(__dirname))

//базовая имплементация роутинга на express
server.get('/', (req, res) => {
    res.sendFile(createPath('pages', 'index', 'html'))
})
server.get('/page1', (req, res) => {
    res.sendFile(createPath('pages', 'page1', 'html'))
})
server.get('/page2', (req, res) => {
    res.sendFile(createPath('pages', 'page2', 'html'))
})
server.get('/page3', (req, res) => {
    res.sendFile(createPath('pages', 'page3', 'html'))
})
server.get('/page5', (req, res) => {
    res.redirect('/page3')
})
server.get('/getUsers', (req, res) => {
    let data = fs.readFileSync(createPath('data', 'data', 'json'))
    data = JSON.parse(data)
    res.send(data)
})
server.use((req, res) => {
    res.status(404).sendFile(createPath('pages', 'error', 'html'))
})

server.use(express.static(__dirname + '/pages'))
server.use(express.json())
server.use((req, res, next) => {
    console.log(req.url, req.method, req.body)
    next()
})



// server listening
server.listen(PORT, error => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})
