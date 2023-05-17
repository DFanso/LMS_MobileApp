import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigationContainerRef } from '@react-navigation/core';

import StudentHomePage from './studentHome';
import GradesPage from './grades';
import TimeTableScreen from './timetable';
import StudentProfileScreen from './studentProfile';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    const navigationRef = useNavigationContainerRef();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Grades') {
                        iconName = 'star';
                    } else if (route.name === 'Timetable') {
                        iconName = 'calendar';
                    } else if (route.name === 'Profile') {
                        iconName = 'user';
                    }

                    return <FontAwesome name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
            }}
            ref={navigationRef}
        >
            <Tab.Screen name="Home" component={StudentHomePage} />
            <Tab.Screen name="Grades" component={GradesPage} />
            <Tab.Screen name="Timetable" component={TimeTableScreen} />
            <Tab.Screen name="Profile" component={StudentProfileScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;

