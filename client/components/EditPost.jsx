import React from 'react'

export class EditPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            tags: null,
            content: null
        }
    }

    handleChange = (event) => {
        console.log(event)
    }

    render(){
        return (
            <div>
                <p>You're on the edit page</p>
            </div>
        )
    }

}