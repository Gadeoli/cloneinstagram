import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import FeedScreen from './screens/Feed'
import AddPhotoScreen from './screens/AddPhoto'
import ProfileScreen from './screens/Profile'
import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'
import SplashScreen from './screens/Splash'

const TabBottomNav = createBottomTabNavigator()
const StackAuth = createStackNavigator()
const StackApp = createStackNavigator()

const Navigator = (props) => {
    const authStack = () => {
        return <StackAuth.Navigator initialRouteName='Login'>
            <StackAuth.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
            <StackAuth.Screen name="Login" component={LoginScreen} />
            <StackAuth.Screen name="Register" component={RegisterScreen} />
        </StackAuth.Navigator>
    }

    const appStack = () => {
        return <StackApp.Navigator initialRouteName='Splash'>
            <StackApp.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}/>
            <StackApp.Screen name="App" component={tabBottomNavigator} options={{ headerShown: false }}/>
        </StackApp.Navigator>
    }

    const tabBottomNavigator = () => {
        return <TabBottomNav.Navigator
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
            <TabBottomNav.Screen name="Add Photo" component={AddPhotoScreen} />
            <TabBottomNav.Screen name="Feed" component={FeedScreen} />
            <TabBottomNav.Screen name="Profile" component={authStack} />
        </TabBottomNav.Navigator>
    }

    return <NavigationContainer>{appStack()}</NavigationContainer>
}

export default Navigator