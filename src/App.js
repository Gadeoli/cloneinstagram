import React, {useEffect} from 'react'
import {Alert} from 'react-native'
import {connect} from 'react-redux'
import Navigator from './Navigator'
import {setMessage} from './store/actions/message'

const App = (props) => {
    const {title, text, clearMessage} = props

    useEffect(() => {
        if(text && text.toString().trim()){
            Alert.alert(title || 'Mensagem', text.toString())
            clearMessage()
        }
    }, [title, text, clearMessage])

    return <Navigator />;
}

const mapStateToProps = ({message}) => {
    return {
        title: message.title,
        text: message.text
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearMessage: () => dispatch(setMessage({title: '', text: ''}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);