import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import ParkingSlots from '../parking-slots-screen/index'
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



function DashboardScreen(props) {

    const { navigation } = props;

    return (
        <Drawer.Navigator
            initialRouteName="parkingSlots"
            screenOptions={{
                activeTintColor: '#e91e63',
                itemStyle: { marginVertical: 10 },
            }}

        >
            <Drawer.Screen
                name="parkingSlots"
                options={{
                    drawerLabel: 'Parking Slots', headerShown: false,
                }}
                component={ParkingSlots} />
        </Drawer.Navigator>
    );
};




export default DashboardScreen;