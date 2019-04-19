import React from 'react'
import { AddPost } from './AddPost';

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
    console.log(posts)
  }

  refreshList(err) {
    this.setState({
      error: err,
    })
    getPosts(this.renderPosts)
  }


  render() {
    console.log(this.state.props)
    return (
      <div>
      <h1>MicroBlog Project</h1>
      {this.state.posts.map((post, index) => <p key={index}>{post.content}</p>)}
      <AddPost />
      </div>
    )
  }
}



