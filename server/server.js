const path = require('path')
const express = require('express')

const blogposts = require('./routes/blogposts')
const removepost = require('./routes/removepost')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/blogposts', blogposts)
server.use('/api/v1/deletepost', removepost)

module.exports = server
    

