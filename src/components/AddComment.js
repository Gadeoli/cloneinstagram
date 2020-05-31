import React, {useState} from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableWithoutFeedback as TWF,
    Alert
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const AddComment = () => {
    const [comment, setComment] = useState('')
    const [editMode, setEditMode] = useState(false)

    const handleEditMode = () => {
        Alert.alert('Adicionado', comment);
    }

    const commentArea = () => {
        return editMode ? (
            <View style={styles.container}>
                <TextInput 
                    placeholder='Pode comentar...'
                    style={styles.input}
                    value={comment}
                    onChangeText={e => setComment(e)}
                    onSubmitEditing={() => handleEditMode()}
                />
                <TWF onPress={() => setEditMode(false)}>
                    <FontAwesomeIcon icon="times" size={15} color="#555" />
                </TWF>
            </View>
        ) : (
            <TWF onPress={() => setEditMode(true)}>
                <View style={styles.container}>
                    <FontAwesomeIcon icon="comment" size={25} color="#555" />
                    <Text style={styles.caption}>
                        Adicione um comentário...
                    </Text>
                </View>
            </TWF>
        )   
    };

    return <View style={{flex: 1}}>
        {commentArea()}
    </View>
}

export default AddComment

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC'
    },
    input: {
        width: '90%'
    }
})