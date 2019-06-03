import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

export class RandomPosts extends React.Component {

    render(){
        const amountOfPosts = this.props.data.posts.length
        const totalPostsToShow = 5
        const randomPostsToShow = this.props.data.posts
        const newRandomPosts = []
        if (randomPostsToShow.length !== 0) {
            for(let i = 0; i < totalPostsToShow; i++) {
                const randomNumberOfPost = (Math.floor((Math.random() * amountOfPosts)))
                newRandomPosts.push(this.props.data.posts[randomNumberOfPost])
            }
        }
        return (
            <div>
                <h4>Random Posts</h4>
                {newRandomPosts.map((post, index) => <p className='blogpost' key={index}><strong><Link to={`/post/${post.id}`}>{post.name}</Link></strong><br />{post.content}</p>)}
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