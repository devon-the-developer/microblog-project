const express = require('express')
const router = express.Router()

const db = require('../db/db.js')


router.delete('/', (req, res) => {
    console.log('deletePost id: ', req.body)
    db.deletePost(req.body.id)

    // db.savePost(req.body)
    // .then(() => res.sendStatus(201))
    // .catch(() => res.sendStatus(500))
})



module.exports = router