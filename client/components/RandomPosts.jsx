import React from 'react'

export class RandomPosts extends React.Component {

    render(){
        return (
            <div>
                <h3>Random Posts</h3>
                {this.props.value.posts.map((post, index) => <p key={index}><strong>{post.name}</strong><br />{post.content}</p>)}
            </div>
        )
    }
}