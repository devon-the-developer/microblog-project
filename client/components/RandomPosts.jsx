import React from 'react'

export class RandomPosts extends React.Component {

    render(){
        return (
            <div>
                <h4>Random Posts</h4>
                {this.props.value.posts.map((post, index) => <p key={index}><strong>{post.name}</strong><br />{post.content}</p>)}
            </div>
        )
    }
}