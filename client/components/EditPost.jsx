import React from 'react'

export class EditPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            currentId: null,
            editPostTothis: {
                name: null,
                tags: null,
                content: null}
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
        console.log(event)
        this.setState({
            editPostTothis: {
                [event.target.name]: event.target.value
            }
        })
    }

    render(){
        console.log(this.state.editPostTothis)
        const currentPost = this.state.posts.find(post => post.id == this.state.currentId) || '' 
        console.log('currentPost: ', currentPost)
        return (
            <div>
                <p>You're on the edit page</p>
                <form>
                    <h4>Edit Post</h4>
                    <label>Title: </label>
                    <input type='text' name='name' onChange={this.handleChange} defaultValue={currentPost.name}></input>
                    <br />
                    <label>Tags: </label>
                    <input type='text' name='tags' onChange={this.handleChange} defaultValue={currentPost.tags}></input>
                    <br />
                    <label>Content: </label>
                    <textarea type='text' name='content' onChange={this.handleChange} defaultValue={currentPost.content} rows='50' cols='100'></textarea>
                    <br />
                    <button onClick={this.handleSubmit}>Save Changes</button>
                </form>
            </div>
        )
    }

}