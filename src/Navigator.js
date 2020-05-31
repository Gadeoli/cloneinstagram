import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import FeedScreen from './screens/Feed'
import AddPhotoScreen from './screens/AddPhoto'
import ProfileScreen from './screens/Profile'

const Tab = createBottomTabNavigator()

const Navigator = () => {
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
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                showLabel: false 
            }}
        >
            <Tab.Screen name="Add Photo" component={AddPhotoScreen} />
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    </NavigationContainer>
}

export default Navigator