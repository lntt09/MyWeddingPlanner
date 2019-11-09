import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions'

import './CommentForm.css';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            body: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const comment = {
            name: this.state.name,
            body: this.state.body
        }

        //Call action
        this.props.createPost(comment);
    }



    render() {

        return (
            <div className="commentForm">
                <h3>Add A Note To the Bride!</h3>
                
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input type="text" name="name" onChange={this.onChange} value={this.state.name} placeholder="What's your name?"/>
                    </div>
                    
                    <div>
                        <label>Leave A Wish: </label><br />
                        <textarea type="text" name="body" onChange={this.onChange} value={this.state.body} placeholder="Write a message" />
                    </div>
                    
                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}

CommentForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(CommentForm)