import React, {useState} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from 'react-native';
import ImagePicker from 'react-native-image-picker'

const AddPhoto = () => {
    const [image, setImage] = useState(null)
    const [comment, setComment] = useState('')
    const pickerOptions = {
        title: 'Escolha a imagem',
        maxHeight: 600,
        maxWidth: 800
    }

    const handlePickerImage = () => {
        ImagePicker.showImagePicker(pickerOptions, res => {
            if(res.error){
                console.log('ImagePicker Error: ', res.error);
            }else if(!res.didCancel){
                setImage(res)
            }
        })
    }

    const handleShowImage = () => {
        return image && image.uri ? 
                    <Image source={{uri: image.uri}} style={styles.image}/> : 
                    <Text>Nenhuma imagem</Text>
    }

    const handleSaveImage = () => {
        Alert.alert('Imagem cadastrada', comment)
    }

    return <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>Compartilhe uma imagem</Text>
            <View style={styles.imageContainer}>{handleShowImage()}</View>
            <TouchableOpacity onPress={() => handlePickerImage()} style={styles.button}>
                <Text style={styles.buttonText}>Escolha a foto</Text>
            </TouchableOpacity>
            <TextInput  placeholder='Algum comentário para a foto?'
                        style={styles.input} value={comment}
                        onChangeText={e => setComment(e)} 
            />
            <TouchableOpacity onPress={() => handleSaveImage()} style={styles.button}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
}

export default AddPhoto

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30: 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%'
    }
})