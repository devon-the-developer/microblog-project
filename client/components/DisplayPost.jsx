import React from 'react'

export default class DisplayPost extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            posts: ''
        }
    }

    componentWillMount(){
        this.renderPost()
    }

    renderPost = () => {
        this.setState({
            posts: this.props.value
        })
    }

    render(){
       
        const currentId = parseInt(this.props.match.params.id) + 1
        console.log("currentId + 1: ", currentId) 
        // const currentPost = this.props.value.find(post => post.id == currentId) 
        // console.log("currentPost: ", currentPost)
        console.log("currentPost via state: ", this.state.posts.find(post => post.id == currentId))
        const currentPost = this.state.posts.find(post => post.id == currentId) || ''
        return(
            <div>
            <h2>{currentPost.name}</h2>
            <span><strong>Tags: </strong>{currentPost.tags}</span>
            <p>{currentPost.content}</p>


            </div>
        )
    }
}