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
function LandingScreen(props) {

    const { navigation } = props;

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        resizeMode="contain"
                        source={require('../../../assets/logo.jpg')}
                    />
                </View>
                <View style={styles.allowLocationContainer}>
                    <TouchableOpacity style={styles.allowLocationBtn} onPress={() => navigation.navigate('dashboard')}>
                        <Text style={styles.allowLocationBtnText}>
                            Allow location tracker
                        </Text>
                    </TouchableOpacity>
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
        height: height / 1.5
    },
    logo: {
        height: '100%',
        width: '100%'
    },
    allowLocationContainer: {
        height: height / 3.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    allowLocationBtn: {
        backgroundColor: '#81c341',
        width: '65%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    allowLocationBtnText: {
        color: 'black',
        fontSize: fontScale * 15
    }
});


export default LandingScreen;