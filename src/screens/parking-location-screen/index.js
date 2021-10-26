import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    Pressable
} from 'react-native';
import Header from '../../components/header/index';
import Button from '../../components/button/index';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const { width, height, fontScale } = Dimensions.get('window');
const ParkingLocation = ({ navigation }) => {




    const toggleDrawer = () => {
        //Props to open/close the drawer
        navigation.toggleDrawer();
    };
    return (
        <SafeAreaView style={styles.container}>
            <Header headerAction={toggleDrawer} actionIcon={require('../../../assets/menu.png')} />

            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: 32.927278, longitude: -96.951583,
                        latitudeDelta: 0.00485,
                        longitudeDelta: 0.004821,
                    }}
                    showsUserLocation={true}
                    followUserLocation={true}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                    scrollEnabled={true}
                    moveOnMarkerPress={true}
                >

                    <MapView.Marker
                        anchor={{ x: 0.5, y: 0.5 }}
                        tracksViewChanges={false}
                        coordinate={
                            {
                                latitude: 32.927278, longitude: -96.951583
                            }}
                    >

                    </MapView.Marker>
                </MapView>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.allowLocationBtn} >
                        <Text style={styles.allowLocationBtnText}>
                            Search parking near you
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.allowLocationBtn} onPress={() => navigation.navigate('parkingSlots')}>
                        <Text style={styles.allowLocationBtnText}>
                            View all available parkings
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    logoContainer: {
        height: 50,
        width: '60%',
        backgroundColor: 'white'
    },
    logo: {
        height: '100%',
        width: '100%'
    },
    map: {
        height: height,
        width: '100%',
    },
    actions: {
        position: 'absolute',
        top: '75%',
        alignSelf: 'center',
        height: '20%',
        justifyContent: 'space-between'

    },
    allowLocationBtn: {
        backgroundColor: '#81c341',
        alignSelf: 'center',
        padding: 10,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    allowLocationBtnText: {
        color: 'black',
        fontSize: fontScale * 14
    },


});
export default ParkingLocation;