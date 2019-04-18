import React from 'react'

export class AddPost extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <strong>Title: </strong>
                    <input type='text' name='postTitle'></input>
                    <br />
                    <strong>Tags: </strong>
                    <input type='text' name='postTags'></input>
                    <br />
                    <strong>Content: </strong>
                    <input type='text' name='postContent' height='200px'></input>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}