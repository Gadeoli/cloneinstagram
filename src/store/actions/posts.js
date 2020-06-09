import {
    ADD_COMMENT, SET_POSTS
} from './actionTypes'
import axios from 'axios'

export const addPost = post => {
    const functionUrl = 'https://us-central1-lambelambe-udemy.cloudfunctions.net/uploadImage'
    return dispatch => {
        axios.post(functionUrl, {image: post.image.data})
            .then(resp => {
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

export const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const fetchPosts = () => {
    return dispatch => {
        axios.get('/posts.json')
            .then(res => {
                const rawPosts = res.data
                const posts = []
                for (let key in rawPosts){
                    posts.push({...rawPosts[key], id: key})   
                }
                dispatch(setPosts(posts))
            })
            .catch(err => console.log(err))
    }
}