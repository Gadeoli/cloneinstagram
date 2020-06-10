import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// import { Container } from './styles';

const Splash = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('App')
        }, 2000)
    }, [])

  return <View style={styles.container}>
      <Image source={require('../../assets/imgs/icon.png')} style={styles.image} />
      <Text style={styles.header}>Lambe-Lambe</Text>
  </View>;
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: 'contain'
    },
    header: {
        fontSize: 50,
        fontWeight: 'bold'
    }
})