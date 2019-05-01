const express = require('express')
const router = express.Router()

const db = require('../db/db.js')


router.delete('/', (req, res) => {
    console.log('deletePost id: ', req.body)
    db.deletePost(req.body.id)
})



module.exports = router