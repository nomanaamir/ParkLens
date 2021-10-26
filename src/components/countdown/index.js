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
function Countdown() {


    return (

        <View style={styles.coutdown}>
            <Text style={styles.coutdownHeading}>
                Time Remaining
            </Text>

            <View style={styles.timeRow}>
                {/* hours */}
                <View style={styles.timeContainer}>
                    <View style={[styles.timeBlock, styles.border]}>
                        <Text style={styles.timeBlockText}>
                            0
                        </Text>
                    </View>
                    <View style={styles.timeBlock}>
                        <Text style={styles.timeBlockText}>
                            0
                        </Text>
                    </View>
                </View>

                {/* minutes */}
                <View style={styles.timeContainer}>
                    <View style={[styles.timeBlock, styles.border]}>
                        <Text style={styles.timeBlockText}>
                            2
                        </Text>
                    </View>
                    <View style={styles.timeBlock}>
                        <Text style={styles.timeBlockText}>
                            9
                        </Text>
                    </View>
                </View>

                {/* seconds */}
                <View style={styles.timeContainer}>
                    <View style={[styles.timeBlock, styles.border]}>
                        <Text style={styles.timeBlockText}>
                            3
                        </Text>
                    </View>
                    <View style={styles.timeBlock}>
                        <Text style={styles.timeBlockText}>
                            6
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 5 }}>
                <View style={styles.timeLabel}>
                    <Text style={styles.timeLabelText}>
                        Hours
                    </Text>
                </View>
                <View style={styles.timeLabel}>
                    <Text style={styles.timeLabelText}>
                        Minutes
                    </Text>
                </View>
                <View style={styles.timeLabel}>
                    <Text style={styles.timeLabelText}>
                        Seconds
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    coutdown: {
        backgroundColor: '#eeeeee',
        width: '75%',
        alignSelf: 'center',
        padding: 5
    },
    coutdownHeading: {
        fontSize: fontScale * 13,
        textAlign: 'center',
        color: '#242424',
        marginBottom: 5
    },
    timeRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },
    timeContainer: {
        flexDirection: 'row',
        width: '30%'
    },
    timeBlock: {
        width: '50%',
        backgroundColor: '#383838',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'

    },
    border: {
        borderRightWidth: 1,
        borderRightColor: '#eeeeee'
    },
    timeBlockText: {
        color: '#eeeeee',
        fontSize: fontScale * 20
    },
    timeLabel: {
        width: '30%',
    },
    timeLabelText: {
        textAlign: 'center',
        color: '#242424',
        fontSize: fontScale * 12
    },
});


export default Countdown;