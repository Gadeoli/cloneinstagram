import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import FeedScreen from './screens/Feed';

const Tab = createBottomTabNavigator();

const Navigator = () => {
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Feed') {
                        iconName = focused
                            ? 'home'
                            : 'home';
                    } else{
                        iconName = focused
                            ? 'times'
                            : 'times';
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
            <Tab.Screen name="Feed2" component={FeedScreen} />
            <Tab.Screen name="Feed3" component={FeedScreen} />
        </Tab.Navigator>
    </NavigationContainer>
}

export default Navigator;