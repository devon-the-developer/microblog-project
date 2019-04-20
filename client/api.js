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
    console.log('api : ', post)
    return request.post(blogPostUrl)
    .send(post)
    .then()
}