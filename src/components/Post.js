import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

import Author from './Author';
import Comments from './Comments';

const Post = (props) => {
  return <View style={styles.container}>
      <Image source={props.image} style={styles.image} />
      <Author email="gabriel@mail.com" nickname="gabriel"/>
      <Comments comments={props.comments} />
  </View>;
}

export default Post;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
});