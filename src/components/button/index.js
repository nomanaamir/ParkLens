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
function Button(props) {
    const { title, textColor, width, navigation, route } = props
    const bgStyle = {
        width: width
    }
    const textSyle = {
        color: textColor
    }
    return (

        <TouchableOpacity style={[styles.btn, bgStyle]} onPress={() => navigation.navigate(route)}>
            <Text style={[styles.btnText, textSyle]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#81c341',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontSize: fontScale * 16,
        fontWeight: 'bold'
    },
});


export default Button;