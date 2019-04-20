import request from 'superagent'

const blogPostUrl = 'http://localhost:3000/api/v1/blogposts'

export function getPosts (callback) {
    request
    .get(blogPostUrl)
    .end((err, res) => {
        callback(err, res.body)
    }) 
}