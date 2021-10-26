import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';
import Header from '../../components/header/index';
import Button from '../../components/button/index';
import Countdown from '../../components/countdown/index'
const { width, height, fontScale } = Dimensions.get('window');
function PaidScreen(props) {
    const details = [
        {
            label: 'Spot#',
            value: '57',
            isBg: true
        },
        {
            label: 'Location',
            value: 'Welcom Street',
            isBg: false

        },
        {
            label: 'City',
            value: 'George Town',
            isBg: true

        },
        {
            label: 'Time Started',
            value: '4:30 PM',
            isBg: false

        },
        {
            label: 'End Time',
            value: '5:30 PM',
            isBg: true

        },
        {
            label: 'Date',
            value: 'Oct 25, 2021',
            isBg: false

        },
        {
            label: 'Paid',
            value: '₹20',
            isBg: true

        },

    ]
    const { navigation } = props;

    return (

        <SafeAreaView style={styles.container}>
            <Header headerAction={navigation.goBack} actionIcon={require('../../../assets/arrow.png')} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >

                <View style={styles.countdownContainer}>

                    <Countdown />

                </View>

                <View style={styles.lotDetails}>
                    {
                        details.map((item, index) => {
                            return (

                                <View key={index} style={[styles.detailRow, item.isBg ? styles.gray : null]}>
                                    <Text style={styles.detailInfo}>
                                        {item.label}
                                    </Text>
                                    <Text style={styles.detailInfo}>
                                        {item.value}
                                    </Text>
                                </View>

                            )
                        })
                    }
                    <View style={[styles.detailRow, styles.gray, styles.contact]}>
                        <Text style={styles.detailInfo}>
                            CONTACT
                        </Text>
                        <Text style={styles.detailInfo}>
                            +91 12345 12345
                        </Text>
                    </View>

                </View>

                <View style={styles.btnContainer}>
                    <Button title={'Extend Session'} textColor={'white'} navigation={navigation} width={'80%'} route={'dashboard'} />
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    countdownContainer: {
        height: height / 4
    },
    lotDetails: {
        width: '90%',
        alignSelf: 'center'
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 6,
    },
    gray: {
        backgroundColor: '#c4c5c4'
    },
    contact: {
        marginTop: 30,
    },
    detailInfo: {
        color: '#242424',
        fontSize: fontScale * 13
    },
    btnContainer: {
        height: height / 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
   
});


export default PaidScreen;