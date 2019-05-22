import React from 'react'

import { addPost } from '../api'


export class AddPost extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: null,
            tags: null,
            content: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        addPost(this.state)
        .then()
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <form>
                    <h4>Add Post</h4>
                    <label>Title: </label>
                    <input type='text' name='name' onChange={this.handleChange}></input>
                    <br />
                    <label>Tags: </label>
                    <input type='text' name='tags' onChange={this.handleChange}></input>
                    <br />
                    <label>Content: </label>
                    <textarea type='text' name='content' onChange={this.handleChange} rows='50' cols='100'></textarea>
                    {/* <input type='text' name='postContent' height='200px' onChange={this.handleChange}></input> */}
                    <br />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
                <p>{this.state.postTitle} {this.state.postContent}</p>
            </div>
        )
    }
}