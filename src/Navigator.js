import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {connect} from 'react-redux'

import FeedScreen from './screens/Feed'
import AddPhotoScreen from './screens/AddPhoto'
import ProfileScreen from './screens/Profile'
import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const Navigator = (props) => {

    const authStack = () => {
        return <Stack.Navigator
            initialRouteName={props.user && props.user.email ? 'Profile' : 'Login'}
        >
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    }

    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    switch (route.name) {
                        case 'Feed': 
                            iconName = 'home'
                            size *= 1.5
                            break
                        case 'Add Photo': iconName = 'camera'
                            break
                        case 'Profile': iconName = 'user'
                            break
                        default: iconName = 'react'
                            break;
                    }

                    // You can return any component that you like here!
                    return <FontAwesomeIcon icon={iconName} size={size} color={color} />
                },
            })}
            initialRouteName='Feed'
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                showLabel: false 
            }}
        >
            <Tab.Screen name="Add Photo" component={AddPhotoScreen} />
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Profile" component={authStack} />
        </Tab.Navigator>
    </NavigationContainer>
}

const mapStateToProps = ({user}) => {
    return {user};
}

export default connect(mapStateToProps, null)(Navigator)