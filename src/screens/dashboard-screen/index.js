import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ParkingSlots from '../parking-slots-screen/index'
import ParkingLocation from '../parking-location-screen/index'

const Drawer = createDrawerNavigator();



function DashboardScreen() {

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

        </Drawer.Navigator>
    );
};




export default DashboardScreen;