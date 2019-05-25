import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { deletePost } from '../api'
import { setCurrentId } from '../actions'

class DisplayPost extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            posts: '',
            currentId: ''
        }
    }

    componentDidMount(){
        let currentId = parseInt(this.props.match.params.id)
        this.props.setCurrentPostId(currentId)
    }

    deletePost = () => {
        deletePost(this.props.data.currentPostId)
        this.props.history.push('/')
    }
    
    editPost = () => {
        console.log('clicked edit')
    }

    render(){
       
        const currentPost = this.props.data.posts.find(post => post.id == this.props.data.currentPostId) || ''
        console.log('Global State: ', this.props)
        return(
            <div>
                <h2>{currentPost.name}</h2>
                <span><strong>Tags: </strong>{currentPost.tags}</span>
                <p>{currentPost.content}</p>
                <div>
                    <button onClick={this.deletePost}>Delete Post</button>
                </div>
                <div>
                    <Link to='/editpost'><button onClick={this.editPost}>Edit Post</button></Link>
                </div>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.blogposts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentPostId: (id) => dispatch(setCurrentId(id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(DisplayPost)