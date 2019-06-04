import React from 'react'
import { connect } from 'react-redux'

import { editPost } from '../api'
import { fetchBlogPosts } from '../actions';

export class EditPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameChangeTo: null,
            tagsChangeTo: null,
            contentChangeTo: null
        }
    }

    componentDidMount() {
        const currentPost = this.props.data.posts.find(post => post.id == this.props.data.currentPostId) || ''
        this.setState({
            nameChangeTo: currentPost.name,
            tagsChangeTo: currentPost.tags,
            contentChangeTo: currentPost.content
        })
    }

    handleChange = (event) => {
        this.setState({
                [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const editObject = {
            id: this.props.data.currentPostId,
            name: this.state.nameChangeTo,
            tags: this.state.tagsChangeTo,
            content: this.state.contentChangeTo
        }
        editPost(editObject)
        .then(this.props.getPostsAgain())
        this.props.history.push('/')
    }

    render(){
        const currentPost = this.props.data.posts.find(post => post.id == this.props.data.currentPostId) || ''
        return (
            <div className='blogpost'>
                <form>
                    <h4>Edit Post</h4>
                    <label>Title: </label>
                    <input type='text' name='nameChangeTo' onChange={this.handleChange} defaultValue={currentPost.name}></input>
                    <br />
                    <label>Tags: </label>
                    <input type='text' name='tagsChangeTo' onChange={this.handleChange} defaultValue={currentPost.tags}></input>
                    <br />
                    <label>Content: </label>
                    <textarea type='text' name='contentChangeTo' onChange={this.handleChange} defaultValue={currentPost.content} rows='50' cols='100'></textarea>
                    <br />
                    <button onClick={this.handleSubmit}>Save Changes</button>
                </form>
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
       getPostsAgain: () => dispatch(fetchBlogPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)