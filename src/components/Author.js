import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Gravatar, GravatarApi} from 'react-native-gravatar'

// import { Container } from './styles'

const components = (props) => {
  return <View style={styles.container}>
        <Gravatar options={{
                email: props.email,
                secure: true
            }}
            style={styles.avatar} 
        />
        <Text style={styles.nickname}>{props.nickname}</Text>
  </View>
}

export default components

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10
    },
    nickname: {
        color: '#444',
        marginVertical: 10,
        fontSize: 15,
        fontWeight: 'bold'
    }
})