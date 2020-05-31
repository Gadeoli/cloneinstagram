import React, {useState} from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        props.navigation.navigate('Feed')
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
                    keyboardType='email-address'
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

export default Login

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