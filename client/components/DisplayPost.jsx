import React from 'react'

import { deletePost } from '../api'

export default class DisplayPost extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            posts: '',
            currentId: ''
        }
    }

    componentWillMount(){
        this.renderPost()
    }

    renderPost = () => {
        this.setState({
            posts: this.props.value,
            currentId: parseInt(this.props.match.params.id) 
        })
    }

    deletePost = () => {
        console.log('Delete')
        deletePost(this.state.currentId)
        this.props.history.push('/')
    }

    render(){
       
        // const currentId = parseInt(this.props.match.params.id) + 1
        console.log("currentId + 1: ", this.state.currentId) 
        // const currentPost = this.props.value.find(post => post.id == currentId) 
        // console.log("currentPost: ", currentPost)
        console.log('this.state.posts :', this.state.posts)
        console.log("currentPost via state: ", this.state.posts.find(post => post.id == this.state.currentId))
        const currentPost = this.state.posts.find(post => post.id == this.state.currentId) || ''
        return(
            <div>
            <h2>{currentPost.name}</h2>
            <span><strong>Tags: </strong>{currentPost.tags}</span>
            <p>{currentPost.content}</p>
            <div>
                <button onClick={this.deletePost}>Delete Post</button>
            </div>


            </div>
        )
    }
}