import request from 'superagent'

const blogPostUrl = '/api/v1/blogposts'

export function getPosts (callback) {
    request
    .get(blogPostUrl)
    .end((err, res) => {
        callback(err, res.body)
    }) 
}
 
export function addPost (post) {
    return request.post(blogPostUrl)
    .send(post)
    .then()
}

export function deletePost (id) {
    return request.del('/api/v1/deletepost')
    .send({id: id})
    .set('Accept', 'application/json')
    .end(function(err, res){})
}