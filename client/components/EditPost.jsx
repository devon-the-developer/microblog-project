import React from 'react'

import { editPost } from '../api'

export class EditPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            currentId: null, 
            nameChangeTo: null,
            tagsChangeTo: null,
            contentChangeTo: null
        }
    }

    componentDidMount() {
        this.renderPost()
    }

    renderPost = () => {
        this.setState({
            posts: this.props.value,
            currentId: parseInt(this.props.match.params.id) 
        })
    }

    handleChange = (event) => {
        console.log(event.target.name)
        this.setState({
                [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('object i want to send: ', this.state.currentId, this.state.nameChangeTo, this.state.tagsChangeTo, this.state.contentChangeTo)
        const editObject = {
            id: this.state.currentId,
            name: this.state.nameChangeTo,
            tags: this.state.tagsChangeTo,
            content: this.state.contentChangeTo
        }
        editPost(editObject)
    }

    render(){
        const currentPost = this.state.posts.find(post => post.id == this.state.currentId) || ''
        console.log(this.state)
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