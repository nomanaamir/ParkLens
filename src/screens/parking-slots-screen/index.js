import React, { useState } from 'react';
import {
    Button,
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
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const { width, height, fontScale } = Dimensions.get('window');
const ParkingSlots = ({ navigation }) => {
    const [isAvailableParking, setIsAvailableParking] = useState(true);
    const [isDropdown, toggleDropdown] = useState(false);
    const [isViewSlots, setIsViewSlots] = useState(false);

    const [mapType, setMapType] = useState('standard');



    const toggleDrawer = () => {
        //Props to open/close the drawer
        navigation.toggleDrawer();
    };
    const viewSlots = () => {
        setIsViewSlots(!isViewSlots)
        setMapType('satellite')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', height: 80, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => toggleDrawer()} style={{ width: '20%' }}>
                    {/*Donute Button Image */}
                    <Image
                        source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawer.png' }}
                        style={{
                            width: 35,
                            height: 35,
                            marginLeft: 5
                        }}
                    />
                </TouchableOpacity>

                {/* <View> */}
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        resizeMode="contain"
                        source={require('../../../assets/logo.jpg')}
                    />
                </View>
                {/* </View> */}
            </View>
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: 37.3318456, longitude: -122.0296002,
                        latitudeDelta: 0.00485,
                        longitudeDelta: 0.004821,
                    }}
                    mapType={mapType}
                    showsUserLocation={true}
                    followUserLocation={true}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                    scrollEnabled={true}
                    moveOnMarkerPress={true}
                >
                </MapView>
                {
                    !isViewSlots ?
                        isAvailableParking ?
                            <View style={styles.actions}>
                                <TouchableOpacity style={styles.allowLocationBtn} >
                                    <Text style={styles.allowLocationBtnText}>
                                        Search parking near you
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.allowLocationBtn} onPress={() => setIsAvailableParking(!isAvailableParking)}>
                                    <Text style={styles.allowLocationBtnText}>
                                        View all available parkings
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <>
                                <Pressable style={styles.availableLot} onPress={() => toggleDropdown(!isDropdown)}>
                                    <View>
                                        <Text style={styles.availableLotText}>
                                            DB Road, Coimbafore
                                        </Text>
                                    </View>
                                    <View style={styles.progressBar}>
                                        <Image
                                            style={styles.progressBarImg}
                                            source={require('../../../assets/progress-bar.png')}
                                        />
                                    </View>
                                </Pressable>
                                {isDropdown ?
                                    <View style={styles.dropdown}>
                                        <TouchableOpacity style={styles.dropdownBtn} >
                                            <Text style={styles.dropdownBtnText}>
                                                View lot map
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.dropdownBtn} onPress={() => viewSlots()}>
                                            <Text style={styles.dropdownBtnText}>
                                                Get driving dir
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.dropdownBtn} >
                                            <Text style={styles.dropdownBtnText}>
                                                Go back
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    null}
                            </>
                        :
                        <View style={styles.payBtnContainer}>
                            <TouchableOpacity style={styles.payBtn} >
                                <Text style={styles.payBtnText}>
                                    PAY FOR SPACE
                                </Text>
                            </TouchableOpacity>
                        </View>
                }

                {
                    isViewSlots ?
                        <View style={styles.lotCard}>
                            <Text style={styles.lotCardHeading}>
                                This lot <Text style={styles.permitLink}>requires a permit</Text>
                            </Text>
                            <View style={styles.statusRow}>
                                <View style={[styles.statusRowIndicator, styles.green]}>

                                </View>
                                <Text style={styles.statusRowText}>
                                    Available: 6
                                </Text>
                            </View>

                            <View style={styles.statusRow}>
                                <View style={[styles.statusRowIndicator, styles.orange]}>

                                </View>
                                <Text style={styles.statusRowText}>
                                    Occupied: 66
                                </Text>
                            </View>

                            <View style={styles.statusRow}>
                                <View style={[styles.statusRowIndicator, styles.yellow]}>

                                </View>
                                <Text style={styles.statusRowText}>
                                    No Data: 10
                                </Text>
                            </View>
                        </View>
                        :
                        null
                }
            </View>
        </SafeAreaView>
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
    availableLot: {
        position: 'absolute',
        top: '10%',
        backgroundColor: '#b8e6b8',
        width: '100%',
        height: 85,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'
    },
    availableLotText: {
        color: 'black',
        fontSize: 16
    },
    progressBar: {
        height: '80%',
        backgroundColor: 'red',
    },
    progressBarImg: {
        flex: 1,
    },
    dropdown: {
        position: 'absolute',
        top: '25%',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    dropdownBtn: {
        backgroundColor: '#81c341',
        width: 150,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    dropdownBtnText: {
        color: 'black',
        fontSize: fontScale * 14
    },
    payBtnContainer: {
        position: 'absolute',
        bottom: '0%',
        width: '100%',
        height: '20%',
        alignItems: 'center'
    },
    payBtn: {
        backgroundColor: '#81c341',
        width: '90%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'
    },
    payBtnText: {
        color: 'white',
        fontSize: fontScale * 16,
        fontWeight: 'bold'
    },

    lotCard: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 15,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    lotCardHeading: {
        fontStyle: 'italic',
        color: 'gray',
        fontSize: 15
    },
    permitLink: {
        color: '#4f4ace',
    },
    statusRow: {
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
        marginBottom: 2

    },
    statusRowIndicator: {
        height: 16,
        width: 16,
        borderRadius: 100,
    },
    statusRowText: {
        color: '#5a716f',
        marginLeft: 5,
        fontSize: fontScale * 12
    },
    green: {
        backgroundColor: '#ade8a5'
    },
    orange: {
        backgroundColor: '#de5c2f'
    },
    yellow: {
        backgroundColor: '#df8f00'
    }

});
export default ParkingSlots;