export default function (state = {posts: [], currentPostId: null}, action) {
    console.log('in blogposts reducer: action.type is ', action.type)
    switch(action.type) {
        case 'SAVE_POSTS':
            return {...state, posts: action.posts}
        case 'SET_CURRENT_ID':
            return {...state, currentPostId: action.currentPostId}
        default:
            return state
    }
}