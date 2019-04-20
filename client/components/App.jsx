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
    const basicStyle = {
      padding: 50,
      background: '#abbaab',
      background: '-webkit-linear-gradient(to top, #ffffff, #abbaab)',/* Chrome 10-25, Safari 5.1-6 */
      background: 'linear-gradient(to top, #ffffff, #abbaab)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }
    return (
      <div style={basicStyle}>
      <h1>MicroBlog Project</h1>
      <a href='#'>Add Post</a>
      <RandomPosts value={this.state} />
      <AddPost />
      </div>
    )
  }
}



