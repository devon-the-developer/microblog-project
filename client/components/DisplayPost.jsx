import React from 'react'

export default class DisplayPost extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            posts: '',
            currentId: ''
        }
    }

    componentWillMount(){
        console.log('WillMount')
        this.renderPost()
    }

    renderPost = () => {
        console.log('renderPost')
        this.setState({
            posts: this.props.value,
            currentId: parseInt(this.props.match.params.id) 
        })
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


            </div>
        )
    }
}