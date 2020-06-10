import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT
} from './actionTypes'
import axios from 'axios'

const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = 'AIzaSyDd_hS5u49vYmSLD4KHp_sDmzx_kT1N2rU'

export const login = user => {
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
                    console.log('Usuário cadastrado com sucesso')
                }).catch(err => console.log(err))
            }
        }).catch(err => console.log(err))
    }
}