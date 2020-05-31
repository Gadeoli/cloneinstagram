import React, {useState} from 'react'
import { 
    View,
    Text, 
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        <TextInput  placeholder="Nome" 
                    style={styles.input}
                    value={password}
                    onChangeText={e => setPassword(e)}
        />
        <TouchableOpacity   onPress={() => {}} style={styles.button}>
            <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
  </View>
}

export default Register

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