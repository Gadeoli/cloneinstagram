import {
    ADD_COMMENT, 
    SET_POSTS,
    CREATING_POST,
    POST_CREATED
} from './actionTypes'
import axios from 'axios'
import { setMessage } from './message'

export const addPost = post => {
    const functionUrl = 'https://us-central1-lambelambe-udemy.cloudfunctions.net/uploadImage'
    return dispatch => {
        dispatch(creatingPost())
        axios.post(functionUrl, {image: post.image.data})
            .then(resp => {
                post.image = resp.data.imageUrl
                axios.post('/posts.json', { ...post })
                    .then(res => {
                        dispatch(fetchPosts())
                        dispatch(postCreated())
                    })
                    .catch(err => dispatch(setMessage({title: 'Erro', text: err})))
            }).catch(err => {
                dispatch(setMessage({title: 'Erro', text: 'Ocorreu um erro inesperado!!'}))
            })
    }
}

export const addComment = payload => {
    return dispatch => {
        axios.get(`/posts/${payload.postId}.json`)
            .then(res => {
                const comments = res.data.comments || []
                comments.push(payload.comment)
                axios.patch(`/posts/${payload.postId}.json`, {comments})
                    .then(res => {
                        dispatch(fetchPosts())
                    })
                    .catch(err => {
                        dispatch(setMessage({title: 'Erro', text: 'Ocorreu um erro inesperado!!'}))
                    })
            })
            .catch(err => {
                dispatch(setMessage({title: 'Erro', text: 'Ocorreu um erro inesperado!!'}))
            })
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
                dispatch(setPosts(posts.reverse()))
            })
            .catch(err => {
                dispatch(setMessage({title: 'Erro', text: 'Ocorreu um erro inesperado!!'}))
            })
    }
}

export const creatingPost = () => {
    return {
        type: CREATING_POST
    }
}

export const postCreated = () => {
    return {
        type: POST_CREATED
    }
}