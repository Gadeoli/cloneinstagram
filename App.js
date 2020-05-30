import React from 'react'
import {View, Text} from 'react-native'

import Header from './src/components/Header'
import Post from './src/components/Post';

const App: () => React$Node = () => {
    return (
        <>
            <Header/>
            <Post image={require('./assets/imgs/fence.jpg')} />
        </>
    );
}

export default App
