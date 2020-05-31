import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import FeedScreen from './screens/Feed';
import AddPhoto from './screens/AddPhoto';

const Tab = createBottomTabNavigator();

const Navigator = () => {
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Feed') {
                        iconName = 'home'
                    } else{
                        iconName = 'camera'
                    }

                    // You can return any component that you like here!
                    return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                showLabel: false 
            }}
        >
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Add Photo" component={AddPhoto} />
            <Tab.Screen name="Feed3" component={FeedScreen} />
        </Tab.Navigator>
    </NavigationContainer>
}

export default Navigator;