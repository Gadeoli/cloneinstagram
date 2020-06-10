import React from 'react';
import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import 'react-native-gesture-handler'
import './services/font-awesome-icon-library'
import { Provider } from 'react-redux'

import App from './src/App'
import storeConfig from './src/store/storeConfig'

import axios from 'axios'
axios.defaults.baseURL = 'https://lambelambe-udemy.firebaseio.com/'

const store = storeConfig()

const Redux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux)