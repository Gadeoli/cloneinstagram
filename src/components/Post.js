import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import {connect} from 'react-redux'

import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'

const Post = (props) => {
    const addComment = props.name ? <AddComment postId={props.id} /> : null

    return <View style={styles.container}>
        <Author email={props.email} nickname={props.nickname}/>
        <Image source={props.image} style={styles.image} />
        <Comments comments={props.comments} />
        {addComment}
    </View>
}

const mapStateToProps = ({user}) => {
    return {
        name: user.name
    }
}

export default connect(mapStateToProps)(Post)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})