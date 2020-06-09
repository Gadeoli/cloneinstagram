import {
    ADD_POST,
    ADD_COMMENT
} from './actionTypes'
import axios from 'axios'

export const addPost = post => {

    //Save a empty image
    post.image = res.data.imageUrl
    axios.post('/posts.json', { ...post })
        .catch(err2 => console.log(err2))
        .then(res2 => console.log(res2.data))

    //Firebase function to storage image not working
    /*
    const url = 'https://us-central1-udemylamb.cloudfunctions.net/uploadImage'
    return dispatch => {
        axios.post(url, {image: post.image.data })
            .then(res => {
                console.log('uploadImage res:', res)

                post.image = res.data.imageUrl
                axios.post('/posts.json', { ...post })
                    .catch(err2 => console.log(err2))
                    .then(res2 => console.log(res2.data))
            })
            .catch(err => console.log(err))     
    }
    */
}

export const addComment = payload => {
    return {
        type: ADD_COMMENT,
        payload
    }
}