import { getPosts } from '../api'

export function saveBlogPosts(posts) {
    return {
        type: 'SAVE_POSTS',
        posts
    }
}

export function fetchBlogPosts() {
    return dispatch => {
        getPosts((err, listOfPosts) => {
            dispatch(saveBlogPosts(listOfPosts))
        })
    }
}

export function setCurrentId (currentPostId) {
    return {
        type: 'SET_CURRENT_ID',
        currentPostId
    }
}