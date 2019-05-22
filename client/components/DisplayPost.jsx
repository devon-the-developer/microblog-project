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
        deletePost(this.state.currentId)
        this.props.history.push('/')
    }
    
    editPost = () => {
        console.log('clicked edit')
    }

    render(){
       
        const currentPost = this.state.posts.find(post => post.id == this.state.currentId) || ''
        return(
            <div>
                <h2>{currentPost.name}</h2>
                <span><strong>Tags: </strong>{currentPost.tags}</span>
                <p>{currentPost.content}</p>
                <div>
                    <button onClick={this.deletePost}>Delete Post</button>
                </div>
                <div>
                    <button onClick={this.editPost}>Edit Post</button>
                </div>


            </div>
        )
    }
}