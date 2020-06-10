import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    USER_LOADED,
    LOADING_USER
} from './actionTypes'
import axios from 'axios'

const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = 'AIzaSyDd_hS5u49vYmSLD4KHp_sDmzx_kT1N2rU'

export const userLogged = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}

export const createUser = user => {
    return dispatch => {
        axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        }).then(res => {
            if(res.data.localId){
                axios.put(`users/${res.data.localId}.json`, {
                    name: user.name
                }).then(res => {
                    dispatch(setMessage({title: 'Sucesso', text: 'Usuário criado com sucesso!!'}))
                }).catch(err => {
                    dispatch(setMessage({title: 'Erro', text: 'Ocorreu um erro inesperado!!'}))
                })
            }
        }).catch(err => {
            dispatch(setMessage({title: 'Erro', text: 'Ocorreu um erro inesperado!!'}))
        })
    }
}

export const loadingUser = () => {
    return {
        type: LOADING_USER
    }
}

export const userLoaded = () => {
    return {
        type: USER_LOADED
    }
}

export const login = user => {
    return dispatch => {
        dispatch(loadingUser())
        axios.post(`${authBaseURL}/verifyPassword?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        }).then(res => {
            if(res.data.localId){
                axios.get(`/users/${res.data.localId}.json`)
                    .then(res => {
                        user.password = null
                        user.name = res.data.name
                        dispatch(userLogged(user))
                        dispatch(userLoaded())
                    }).catch(err => {
                        dispatch(setMessage({title: 'Erro', text: 'Ocorreu um erro inesperado!!'}))
                    })
            }
        }).catch(err => {
            dispatch(setMessage({title: 'Erro', text: 'Ocorreu um erro inesperado!!'}))
        })
    }
}