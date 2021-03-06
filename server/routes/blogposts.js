const express = require('express')
const router = express.Router()

const db = require('../db/db.js')

router.get('/', (req, res) => {
    db.getPosts()
    .then(posts => {
        res.send(posts)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
    db.savePost(req.body)
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500))
})

router.post('/editpost', (req, res) => {
    console.log('route: editpost in blogposts', req.body.id)
    db.editPost(req.body.id, req.body)
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500))
})

module.exports = router