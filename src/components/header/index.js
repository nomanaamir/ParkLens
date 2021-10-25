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

const { width, height, fontScale } = Dimensions.get('window');
function Header(props) {

    const { navigation, headerAction, actionIcon } = props;

    return (

        <View style={{ flexDirection: 'row', height: 80, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => headerAction()} style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                {/*Donute Button Image */}
                <Image
                    source={actionIcon}
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
    );
};

const styles = StyleSheet.create({
    logoContainer: {
        height: 50,
        width: '60%',
        backgroundColor: 'white'
    },
    logo: {
        height: '100%',
        width: '100%'
    },
});


export default Header;