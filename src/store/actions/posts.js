import {
    ADD_POST,
    ADD_COMMENT
} from './actionTypes'
import axios from 'axios'

export const addPost = post => {
    const functionUrl = 'https://us-central1-lambelambe-udemy.cloudfunctions.net/uploadImage'
    return dispatch => {
        axios.post(functionUrl, {image: post.image.data})
            .then(resp => {
                console.log(resp)
                post.image = resp.data.imageUrl
                axios.post('/posts.json', { ...post })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            }).catch(err => {
                console.log(err)
            })
    }
}

export const addComment = payload => {
    return {
        type: ADD_COMMENT,
        payload
    }
}