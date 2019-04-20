import React from 'react'

export class AddPost extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            postTitle: null,
            postTags: null,
            postContent: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
        console.log(event.target.name)
    }

    render() {
        return (
            <div>
                <form>
                    <h4>Add Post</h4>
                    <label>Title: </label>
                    <input type='text' name='postTitle' onChange={this.handleChange}></input>
                    <br />
                    <label>Tags: </label>
                    <input type='text' name='postTags' onChange={this.handleChange}></input>
                    <br />
                    <label>Content: </label>
                    <textarea type='text' name='postContent' onChange={this.handleChange} rows='50' cols='100'></textarea>
                    {/* <input type='text' name='postContent' height='200px' onChange={this.handleChange}></input> */}
                    <br />
                    <button onClick={console.log(this.state)}>Submit</button>
                </form>
                <p>{this.state.postTitle} {this.state.postContent}</p>
            </div>
        )
    }
}