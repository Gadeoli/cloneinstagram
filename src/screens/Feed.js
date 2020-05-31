import React, {useState} from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import Header from '../components/Header'
import Post from '../components/Post'

import posts from './posts'

const Feed = () => {
    const [feedPosts, setFeedPosts] = useState(posts)

    return <View style={styles.container}>
        <Header />
        <FlatList 
            data={feedPosts}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => <Post key={item.id} {...item} />}
        />
    </View>
}

export default Feed

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})