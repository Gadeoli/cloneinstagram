import React, {useState, useEffect} from 'react'
import {useRoute} from '@react-navigation/native';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'
import { connect } from 'react-redux'
import { login } from '../store/actions/user'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {loading, name} = props
    const route = useRoute();
    
    useEffect(() => {
        if((name && route.name !== 'Profile') || loading){
            props.navigation.navigate('Profile')
        }
    }, [loading, name, route])


    const login = () => {
        props.onLogin({email, name, password})
    }

    return <View style={styles.container}>
        <TextInput  placeholder='Email'
                    style={styles.input}
                    autoFocus={true}
                    keyboardType='email-address'
                    value={email}
                    onChangeText={e => setEmail(e)}
        />
        <TextInput  placeholder='Senha'
                    style={styles.input}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={e => setPassword(e)}
        />
        <TouchableOpacity onPress={() => login()} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {props.navigation.navigate('Register')}} style={styles.button}>
            <Text style={styles.buttonText}>Ainda não tem conta?</Text>
        </TouchableOpacity>
    </View>
}

const mapStateToProps = ({user}) => {
    return {
        loading: user.isLoading,
        name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333'
    }
})