import { getPosts } from '../api'

export function saveBlogPosts(posts) {
    console.log('saveBlogPosts is called')
    return {
        type: 'SAVE_POSTS',
        posts
    }
}

export function fetchBlogPosts() {
    console.log('fetchBlogPosts is called')
    return dispatch => {
        getPosts((err, listOfPosts) => {
            dispatch(saveBlogPosts(listOfPosts))
        })
    }
}

export function setCurrentId (currentPostId) {
    console.log('Im setting the currentId to: ', currentPostId)
    return {
        type: 'SET_CURRENT_ID',
        currentPostId
    }
}