import React from 'react'
import { AddPost } from './AddPost';
import { RandomPosts } from './RandomPosts'

import { getPosts } from '../api'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      posts: []
    }
    this.renderPosts = this.renderPosts.bind(this)
    this.refreshList = this.refreshList.bind(this)
  }

  componentDidMount() {
    this.refreshList()
  }

  renderPosts(err, posts) {
    this.setState({
      error: err,
      posts: posts || []
    })
  }

  refreshList(err) {
    this.setState({
      error: err,
    })
    getPosts(this.renderPosts)
  }


  render() {
    return (
      <div>
      <h1>MicroBlog Project</h1>
      <a href='#'>Add Post</a>
      <h3>Random Posts</h3>
      {this.state.posts.map((post, index) => <p key={index}><strong>{post.name}</strong><br />{post.content}</p>)}
      <RandomPosts value={this.state} />
      <AddPost />
      </div>
    )
  }
}



