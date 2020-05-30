import React from 'react'

import Header from './src/components/Header'
import Post from './src/components/Post';

const comments = [
    {nickname: 'Joana Silva', comment: 'Lindu'},
    {nickname: 'Keyla Moraes', comment: 'Que saudades'},
    {nickname: 'Fernando Oliveira', comment: 'Ótima foto'},
];

const App: () => React$Node = () => {
    return (
        <>
            <Header/>
            <Post image={require('./assets/imgs/fence.jpg')} comments={comments}/>
        </>
    );
}

export default App
