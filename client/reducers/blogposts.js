export default function (state = [], action) {
    console.log('in blogposts reducer: action.type is ', action.type)
    switch(action.type) {
        case 'SAVE_POSTS':
            console.log(action.posts)
            return action.posts
        default:
            return state
    }
}