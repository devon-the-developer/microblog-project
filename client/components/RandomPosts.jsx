import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

export class RandomPosts extends React.Component {

    render(){
        const amountOfPosts = this.props.data.posts.length
        const totalPostsToShow = 5
        const randomPostsToShow = this.props.data.posts.filter(post => post.id === (Math.floor((Math.random() * amountOfPosts))) )
        console.log(randomPostsToShow)
        return (
            <div>
                <h4>Random Posts</h4>
                {randomPostsToShow.map((post, index) => <p key={index}><strong><Link to={`/post/${post.id}`}>{post.name}</Link></strong><br />{post.content}</p>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.blogposts || []
    }
}

export default connect(mapStateToProps)(RandomPosts)