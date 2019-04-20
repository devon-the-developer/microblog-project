const path = require('path')
const express = require('express')

const blogposts = require('./routes/blogposts')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/blogposts', blogposts)

module.exports = server
    

