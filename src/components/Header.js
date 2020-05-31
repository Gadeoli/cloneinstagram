import React from 'react'
import { View, StyleSheet, Text, Platform, Image } from 'react-native'

import icon from '../../assets/imgs/icon.png'

const Header = () => {
  return <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image}/>
        <Text style={styles.title}>Lambe Lambe</Text>
      </View>
  </View>
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? '20' : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        fontFamily: 'shelter',
        height: 30,
        fontSize: 28
    }
})