import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {Gravatar, GravatarApi} from 'react-native-gravatar'

const Profile = (props) => {
    const logout = () => {
        props.navigation.navigate('Login')
    }

    const options = {email: 'gabriel@mail.com', secure: true}

    return <View style={styles.container}>
        <Gravatar options={options} style={styles.avatar} />
        <Text style={styles.nickname}>Gabriel</Text>
        <Text style={styles.email}>gabriel@mail.com</Text>
        <TouchableOpacity onPress={() => logout()} style={styles.button}>
            <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
    </View>
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    email: {
        marginTop: 20,
        fontSize: 25
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    }
})