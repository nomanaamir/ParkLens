import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import ParkingSlots from '../parking-slots-screen/index'
import ParkingLocation from '../parking-location-screen/index'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



function DashboardScreen(props) {

    const { navigation } = props;

    return (
        <Drawer.Navigator
            initialRouteName="selectLocation"
            screenOptions={{
                activeTintColor: '#e91e63',
                itemStyle: { marginVertical: 10 },
            }}

        >
            <Drawer.Screen
                name="selectLocation"
                options={{
                    drawerLabel: 'Select Location', headerShown: false,
                }}
                component={ParkingLocation} />
            <Drawer.Screen
                name="parkingSlots"
                options={{
                    drawerLabel: 'Available Parking', headerShown: false,
                }}
                component={ParkingSlots} />


            {/* <Drawer.Screen
                name="payForSpace"
                options={{
                    drawerLabel: '', headerShown: false,
                }}
                component={PayForSpaceScreen} /> */}
        </Drawer.Navigator>
    );
};




export default DashboardScreen;