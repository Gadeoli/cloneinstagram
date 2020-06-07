import React from 'react';
import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import 'react-native-gesture-handler'
import './services/font-awesome-icon-library'
import { Provider } from 'react-redux'
import axios from 'axios'

import Navigator from './src/Navigator'
import storeConfig from './src/store/storeConfig'

const store = storeConfig()

axios.defaults.baseURL = 'https://udemylamb.firebaseio.com/'

const App = () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)

AppRegistry.registerComponent(appName, () => App)
