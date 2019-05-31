import React from 'react'
import { connect } from 'react-redux'

import { editPost } from '../api'

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
        // this.renderPost()
    }

    handleChange = (event) => {
        this.setState({
                [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('object i want to send: ', this.props.data.currentPostId, this.state.nameChangeTo, this.state.tagsChangeTo, this.state.contentChangeTo)
        const editObject = {
            id: this.props.data.currentPostId,
            name: this.state.nameChangeTo,
            tags: this.state.tagsChangeTo,
            content: this.state.contentChangeTo
        }
        editPost(editObject)
        this.props.history.push('/')
    }

    render(){
        const currentPost = this.props.data.posts.find(post => post.id == this.props.data.currentPostId) || ''
        return (
            <div>
                <p>You're on the edit page</p>
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
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)