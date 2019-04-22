import React from 'react'
import { Link } from 'react-router-dom'

export class RandomPosts extends React.Component {

    render(){
        return (
            <div>
                <h4>Random Posts</h4>
                {this.props.value.posts.map((post, index) => <p key={index}><strong><Link to={`/post/${index}`}>{post.name}</Link></strong><br />{post.content}</p>)}
            </div>
        )
    }
}