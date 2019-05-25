import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import { AddPost } from './AddPost'
import  RandomPosts  from './RandomPosts'
import { EditPost } from './EditPost'
import { getPosts } from '../api'
import DisplayPost from './DisplayPost'
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      posts: []
    }
  }

  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    const basicStyle = {
      padding: 50,
      background: '#abbaab',
      background: '-webkit-linear-gradient(to top, #ffffff, #abbaab)',/* Chrome 10-25, Safari 5.1-6 */
      background: 'linear-gradient(to top, #ffffff, #abbaab)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }
    return (
      <Router>
        <div style={basicStyle}>
          <h1><strong>MicroBlog Project</strong></h1>
          <div style={{display:'inline-block'}}>
            <Link to='/'>Home</Link> <Link to='/addpost'>Add Post</Link>
          </div>
          <br />
          <br />
          <div>
            <Route exact path='/' component={RandomPosts} />
            <Route exact path='/post/:id' render={(props) => <DisplayPost {...props} value={this.state.posts} />} />
            <Route path='/addpost' component={AddPost} />
            <Route exact path='/editpost/:id' render={(props) => <EditPost {...props} value={this.state.posts} />} />
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.blogposts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(fetchBlogPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

