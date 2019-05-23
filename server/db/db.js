const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)



function getPosts (db = connection) {
    return db('blogPosts').select()
}

function savePost (post, db = connection) {
    //post.dateCreated = new Date(Date.now())
    // post = JSON.stringify(post)
    return db('blogPosts')
    .insert(post)
}

function deletePost (id, db = connection) {
    return db('blogPosts')
    .where('id', id)
    .del()
    .then(data => console.log(data))
}

function editPost (id, newContent, db = connection) {
    console.log('im in db.editPost')
    return db('blogPosts')
    .where('id', id)
    .update(newContent)
    .then(data => console.log('edited', data))
}

module.exports = {
    getPosts,
    savePost,
    deletePost,
    editPost
}