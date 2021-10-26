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
import Button from '../../components/button/index'
const { width, height, fontScale } = Dimensions.get('window');
function PayForSpaceScreen(props) {

    const { navigation } = props;

    return (

        <SafeAreaView style={styles.container}>
            <Header headerAction={navigation.goBack} actionIcon={require('../../../assets/arrow.png')} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >

                <View style={styles.payForSpaceContainer}>
                    <Text style={styles.payment}>
                        ₹20
                    </Text>
                    <Text style={styles.lotInfo}>
                        Welcome street
                    </Text>
                    <Text style={styles.lotInfo}>
                        Oct 25, 2021
                    </Text>
                    <Text style={styles.lotInfo}>
                        4:30 PM
                    </Text>

                    <View style={styles.spaceContainer}>
                        <Text style={styles.fieldLabel}>
                            Space#
                        </Text>
                        <TextInput
                            style={styles.textField}
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.paymentForm}>
                        <View style={styles.paymentFormRow}>
                            <Text style={styles.fieldLabel}>Card Number</Text>
                            <TextInput
                                style={[styles.textField, styles.fullWidth]}
                                keyboardType="numeric"
                                defaultValue="5105105105105100"
                            />
                        </View>

                        <View style={styles.paymentFormRow}>
                            <Text style={styles.fieldLabel}>Expiration Date</Text>
                            <TextInput
                                style={[styles.textField, styles.fullWidth]}
                                keyboardType="numeric"
                                defaultValue="15-05-2021"

                            />
                        </View>

                        <View style={styles.paymentFormRow}>
                            <Text style={styles.fieldLabel}>CVV Code</Text>
                            <TextInput
                                style={[styles.textField, styles.fullWidth]}
                                keyboardType="numeric"
                                defaultValue="111"
                            />
                        </View>

                        <View style={styles.paymentFormRow}>
                            <Button title={'PAY'} textColor={'white'} navigation={navigation} route={'paid'} width={'100%'}/>
                            {/* <TouchableOpacity style={styles.payBtn} onPress={() => navigation.navigate('paid')}>
                                <Text style={styles.payBtnText}>
                                    Pay
                                </Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>
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
    logoContainer: {
        height: 50,
        width: '60%',
        backgroundColor: 'white'
    },
    logo: {
        height: '100%',
        width: '100%'
    },
    payment: {
        fontSize: fontScale * 60,
        color: '#81c442',
    },
    payForSpaceContainer: {
        alignItems: 'center',
        marginBottom: 15
    },
    lotInfo: {
        color: '#cbc7c7',
        fontSize: fontScale * 16
    },
    spaceContainer: {
        backgroundColor: '#d5d5d5',
        width: width / 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 80,
        marginBottom: 10,
        borderRadius: 5
    },
    fieldLabel: {
        color: '#242424'
    },
    textField: {
        backgroundColor: 'white',
        width: 100,
        borderRadius: 5,
        color: 'gray',
        minHeight: 40,
        paddingLeft: 5,
        paddingRight: 5
    },
    paymentForm: {
        backgroundColor: '#d5d5d5',
        width: width / 1.5,
        borderRadius: 5

    },
    paymentFormRow: {
        justifyContent: 'center',
        padding: 14,
    },
    fullWidth: {
        width: '100%',
        marginTop: 5
    },

});


export default PayForSpaceScreen;