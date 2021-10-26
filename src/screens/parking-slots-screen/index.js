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
import { Marker } from 'react-native-maps';
const { width, height, fontScale } = Dimensions.get('window');
const ParkingSlots = ({ navigation }) => {
    const [isAvailableParking, setIsAvailableParking] = useState(true);
    const [isDropdown, toggleDropdown] = useState(false);
    const [isViewSlots, setIsViewSlots] = useState(false);

    const [mapType, setMapType] = useState('standard');
    const parkingLots = [
        {
            latitude: 32.92731,
            longitude: -96.95153,
            color: '#ade8a5',
            id: '1'
        },
        {
            latitude: 32.92731,
            longitude: -96.95147,
            color: '#de5c2f',
            id: '2'

        },
        {
            latitude: 32.92731,
            longitude: -96.9514,
            color: '#ade8a5',
            id: '3'

        },
        {
            latitude: 32.92731,
            longitude: -96.95133,
            color: '#ade8a5',
            id: '4'

        },
        {
            latitude: 32.92731,
            longitude: -96.95126,
            color: '#ade8a5',
            id: '5'
        },
        {
            latitude: 32.92731,
            longitude: -96.9512,
            color: '#de5c2f',
            id: '6'
        },
        {
            latitude: 32.92731,
            longitude: -96.95114,
            color: '#de5c2f',
            id: '7'
        },
        {
            latitude: 32.92731,
            longitude: -96.95107,
            color: '#ade8a5',
            id: '8'
        },
        {
            latitude: 32.92731,
            longitude: -96.95101,
            color: '#ade8a5',
            id: '9'
        },
        {
            latitude: 32.92731,
            longitude: -96.95096,
            color: '#de5c2f',
            id: '10'
        },
        {
            latitude: 32.92731,
            longitude: -96.95091,
            color: '#ade8a5',
            id: '11'
        },
        {
            latitude: 32.92731,
            longitude: -96.95087,
            color: '#de5c2f',
            id: '12'
        },
        {
            latitude: 32.92731,
            longitude: -96.95081,
            color: '#ade8a5',
            id: '13'
        },
        {
            latitude: 32.92731,
            longitude: -96.95075,
            color: '#de5c2f',
            id: '14'
        },


        {
            latitude: 32.9273,
            longitude: -96.95035,
            color: '#de5c2f',
            id: '15'
        },
        {
            latitude: 32.9273,
            longitude: -96.95029,
            color: '#de5c2f',
            id: '16'
        },
        {
            latitude: 32.9273,
            longitude: -96.95022,
            color: '#de5c2f',
            id: '17'
        },
        {
            latitude: 32.9273,
            longitude: -96.95016,
            color: '#ade8a5',
            id: '18'
        },
        {
            latitude: 32.9273,
            longitude: -96.95009,
            color: '#ade8a5',
            id: '19'
        },
        {
            latitude: 32.9273,
            longitude: -96.95003,
            color: '#de5c2f',
            id: '20'
        },
        {
            latitude: 32.9273,
            longitude: -96.94996,
            color: '#ade8a5',
            id: '21'
        },
        {
            latitude: 32.9273,
            longitude: -96.9499,
            color: '#de5c2f',
            id: '22'
        },
        {
            latitude: 32.9273,
            longitude: -96.94983,
            color: '#de5c2f',
            id: '23'
        },
        {
            latitude: 32.9273,
            longitude: -96.94976,
            color: '#ade8a5',
            id: '24'
        },
        {
            latitude: 32.9273,
            longitude: -96.9497,
            color: '#de5c2f',
            id: '25'
        },
        {
            latitude: 32.9273,
            longitude: -96.94964,
            color: '#ade8a5',
            id: '26'
        },
        {
            latitude: 32.9273,
            longitude: -96.94959,
            color: '#ade8a5',
            id: '27'
        },
        {
            latitude: 32.9273,
            longitude: -96.94954,
            color: '#de5c2f',
            id: '28'
        },
        {
            latitude: 32.9273,
            longitude: -96.94948,
            color: '#de5c2f',
            id: '29'
        },
        {
            latitude: 32.9273,
            longitude: -96.94942,
            color: '#de5c2f',
            id: '30'
        },
        {
            latitude: 32.9273,
            longitude: -96.94935,
            color: '#de5c2f',
            id: '31'
        },
        {
            latitude: 32.9273,
            longitude: -96.94929,
            color: '#de5c2f',
            id: '32'
        },
        {
            latitude: 32.9273,
            longitude: -96.94922,
            color: '#de5c2f',
            id: '33'
        },
        {
            latitude: 32.9273,
            longitude: -96.94916,
            color: '#de5c2f',
            id: '34'
        },
        {
            latitude: 32.9273,
            longitude: -96.94873,
            color: '#de5c2f',
            id: '35'
        },
        {
            latitude: 32.9273,
            longitude: -96.94866,
            color: '#ade8a5',
            id: '36'
        },
        {
            latitude: 32.9273,
            longitude: -96.9486,
            color: '#ade8a5',
            id: '37'
        },
        {
            latitude: 32.9273,
            longitude: -96.94854,
            color: '#de5c2f',
            id: '38'
        },
        {
            latitude: 32.9273,
            longitude: -96.94847,
            color: '#de5c2f',
            id: '39'
        },
        {
            latitude: 32.9273,
            longitude: -96.9484,
            color: '#de5c2f',
            id: '40'
        },
        {
            latitude: 32.9273,
            longitude: -96.94834,
            color: '#ade8a5',
            id: '41'
        },
        {
            latitude: 32.9273,
            longitude: -96.94828,
            color: '#ade8a5',
            id: '42'
        },


        {
            latitude: 32.92729,
            longitude: -96.9482,
            color: '#ade8a5',
            id: '43'
        },
        {
            latitude: 32.92729,
            longitude: -96.94814,
            color: '#de5c2f',
            id: '44'
        },
        {
            latitude: 32.92729,
            longitude: -96.94807,
            color: '#ade8a5',
            id: '45'
        },
        {
            latitude: 32.92729,
            longitude: -96.94799,
            color: '#de5c2f',
            id: '46'
        },
        {
            latitude: 32.92729,
            longitude: -96.94793,
            color: '#ade8a5',
            id: '47'
        },
        {
            latitude: 32.92729,
            longitude: -96.94786,
            color: '#de5c2f',
            id: '48'
        },
        {
            latitude: 32.92729,
            longitude: -96.9478,
            color: '#ade8a5',
            id: '49'
        },
        {
            latitude: 32.92729,
            longitude: -96.94774,
            color: '#de5c2f',
            id: '50'
        },
        {
            latitude: 32.92729,
            longitude: -96.94769,
            color: '#de5c2f',
            id: '51'
        },
        {
            latitude: 32.92729,
            longitude: -96.94762,
            color: '#de5c2f',
            id: '52'
        },
        {
            latitude: 32.92729,
            longitude: -96.94757,
            color: '#de5c2f',
            id: '53'
        },
        {
            latitude: 32.92729,
            longitude: -96.9475,
            color: '#de5c2f',
            id: '54'
        },
        {
            latitude: 32.92729,
            longitude: -96.94744,
            color: '#de5c2f',
            id: '55'
        },
        {
            latitude: 32.92729,
            longitude: -96.94737,
            color: '#de5c2f',
            id: '56'
        },
        {
            latitude: 32.92728,
            longitude: -96.94699,
            color: '#de5c2f',
            id: '57'
        },



        {
            latitude: 32.92729,
            longitude: -96.94692,
            color: '#ade8a5',
            id: '58'
        },
        {
            latitude: 32.92729,
            longitude: -96.94685,
            color: '#ade8a5',
            id: '59'
        },
        {
            latitude: 32.92729,
            longitude: -96.94679,
            color: '#de5c2f',
            id: '60'
        },


        {
            latitude: 32.92728,
            longitude: -96.94673,
            color: '#de5c2f',
            id: '61'
        },
        {
            latitude: 32.92728,
            longitude: -96.94667,
            color: '#de5c2f',
            id: '62'
        },
        {
            latitude: 32.92728,
            longitude: -96.9466,
            color: '#ade8a5',
            id: '63'
        },

        {
            latitude: 32.92729,
            longitude: -96.94654,
            color: '#de5c2f',
            id: '64'
        },

        {
            latitude: 32.92728,
            longitude: -96.94647,
            color: '#de5c2f',
            id: '65'
        },
        {
            latitude: 32.92728,
            longitude: -96.94642,
            color: '#ade8a5',
            id: '66'
        },
        {
            latitude: 32.92728,
            longitude: -96.94636,
            color: '#de5c2f',
            id: '67'
        },
        {
            latitude: 32.92728,
            longitude: -96.94629,
            color: '#de5c2f',
            id: '68'
        },
    ]


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
            <Header headerAction={toggleDrawer} actionIcon={require('../../../assets/menu.png')} />

            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: 32.927278, longitude: -96.951583,
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
                    {
                        mapType !== 'standard' ?
                            parkingLots.map((item, index) => {
                                return (
                                    <MapView.Marker
                                        key={item.id}
                                        anchor={{ x: 0.5, y: 0.5 }}
                                        tracksViewChanges={false}
                                        coordinate={
                                            {
                                                latitude: item.latitude,
                                                longitude: item.longitude,
                                            }}
                                    >
                                        <View style={{ backgroundColor: item.color, width: 15, height: 15, borderRadius: 100 }}>
                                        </View>
                                    </MapView.Marker>
                                )
                            })
                            :
                            null
                    }

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
                                            <Text style={styles.dropdownBtnText} onPress={() => viewSlots()}>
                                                View lot map
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.dropdownBtn} onPress={() => viewSlots()}>
                                            <Text style={styles.dropdownBtnText}>
                                                Get driving dir
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.dropdownBtn} onPress={() => { setIsAvailableParking(!isAvailableParking); toggleDropdown(!isDropdown) }}>
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
                            <Button title={'PAY FOR SPACE'} textColor={'white'} width={'90%'} navigation={navigation} route={'payForSpace'} />
                        </View>
                }

                {
                    isViewSlots ?
                        <View style={styles.lotCard}>
                            <Text style={styles.lotCardHeading}>
                                Welcome Street
                                {/* This lot <Text style={styles.permitLink}>requires a permit</Text> */}
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

                        </View>
                        :
                        null
                }
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
    lotCard: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 15,
        alignItems: 'center',
        backgroundColor: 'white',
        minWidth: 180
    },
    lotCardHeading: {
        fontStyle: 'italic',
        color: 'gray',
        fontSize: 15,
        marginBottom: 5
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