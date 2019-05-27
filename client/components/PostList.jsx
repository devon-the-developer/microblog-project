import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PostList extends React.Component {
    render() {
        return (
            <div>
                {this.props.data.posts.map((post, index) => 
                    <p key={index}>
                        <strong>
                            <Link to={`/post/${post.id}`}>
                                {post.name}
                            </Link>
                        </strong>
                        <br />
                        {post.content}
                    </p>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.blogposts
    }
}
export default connect(mapStateToProps)(PostList)