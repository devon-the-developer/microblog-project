const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getPosts,
    savePost
}

function getPosts (db = connection) {
    return db('blogPosts').select()
}

function savePost (post) {
    //post.dateCreated = new Date(Date.now())
    post = JSON.stringify(post)
    
    return db('blogPosts')
    .insert(post)
    .then()
}