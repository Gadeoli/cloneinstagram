import React from 'react';
import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native';

const Comments = (props) => {
    const handleViewList = () => {
        let view = null;

        if(props.comments && props.comments.length){
            view = props.comments.map((item, index) => {
                return (
                    <View style={styles.commentContainer} key={index}>
                        <Text style={styles.nickname}>{item.nickname}: </Text>
                        <Text style={styles.comment}>{item.comment}</Text>
                    </View>
                )
            })
        }

        return view;
    };

    return <View style={styles.container}>
        {handleViewList()}
    </View>;
}

export default Comments;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },  
    commentContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    nickname: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#444'
    },
    comments: {
        color: '#555'
    }
});