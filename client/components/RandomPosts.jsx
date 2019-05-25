import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

class RandomPosts extends React.Component {

    render(){
        return (
            <div>
                <h4>Random Posts</h4>
                {this.props.data.posts.map((post, index) => <p key={index}><strong><Link to={`/post/${post.id}`}>{post.name}</Link></strong><br />{post.content}</p>)}
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