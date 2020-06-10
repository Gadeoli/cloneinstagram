import React, {useState, useEffect} from 'react'
import { 
    View,
    Text, 
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'
import {connect} from 'react-redux'
import {createUser} from '../store/actions/user'

const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {loading} = props
    
    useEffect(() => {
        if(loading){
            setName('')
            setEmail('')
            setPassword('')
            props.navigation.navigate('Profile')
        }
    }, [loading])

    return <View style={styles.container}>
        <TextInput  placeholder="Nome" 
                    style={styles.input}
                    autoFocus={true}
                    value={name}
                    onChangeText={e => setName(e)}
        />
        <TextInput  placeholder="Email" 
                    style={styles.input}
                    value={email}
                    onChangeText={e => setEmail(e)}
        />
        <TextInput  placeholder="Senha" 
                    style={styles.input}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={e => setPassword(e)}
        />
        <TouchableOpacity   
            onPress={() => props.onCreateUser({name, email, password})} 
            style={styles.button}
        >
            <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
  </View>
}

const mapStateToProps = ({user}) => {
    return {
        loading: user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreateUser: user => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: "#4286f4"
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
        borderColor: '#333',
        paddingLeft: 15
    }
})