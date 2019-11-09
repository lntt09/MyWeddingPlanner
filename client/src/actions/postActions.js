import { FETCH_POSTS, NEW_POST } from './types'

export const fetchPosts = () => dispatch => {

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json()) 
        .then(comments =>
            dispatch({
                type: FETCH_POSTS,
                payload: comments
            }) 
        );

}

export const createPost = postData => dispatch => {
    console.log("action called")
    fetch('http://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(comment =>
            dispatch({
                type: NEW_POST,
                payload: comment
            }) 
        )

}

