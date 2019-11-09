import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '/Users/TiffN/Desktop/wedding-planner-application/client/src/actions/postActions.js'

import './Comments.css'

class Comments extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newComment) {
            this.props.comments.unshift(nextProps.newComment);
        }
    }

    render() {
        const commentItems = this.props.comments.map(comment => (
            <div key={comment.id} className='items'>
                <h4>{comment.name}</h4>
                <p><i>"{comment.body}"</i></p>
            </div>
        ))
        return (
            <div className="allthecomments">
                <h2>Warm Wishes</h2>
                <div className='commentItems'>
                    {commentItems}
                </div>

            </div>
        )
    }
}

Comments.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired,
    newComment: PropTypes.object
}

const mapStateToProps = state => ({
    comments: state.comments.items,
    newComment: state.comments.item
})

export default connect(mapStateToProps, { fetchPosts })(Comments); 