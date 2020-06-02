import React, {useState} from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import {connect} from 'react-redux'

import Header from '../components/Header'
import Post from '../components/Post'

const Feed = (props) => {
    console.log(props.posts)
    return <View style={styles.container}>
        <Header />
        <FlatList 
            data={props.posts}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => <Post key={item.id} {...item} />}
        />
    </View>
}

const mapStateToProps = ({posts}) => {
    return {
        posts: posts.posts
    }
}

export default connect(mapStateToProps)(Feed)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})