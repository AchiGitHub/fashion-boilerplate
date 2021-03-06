import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

export const SLIDER_HEIGHT = 0.61 * height;

const styles = StyleSheet.create({
    container: {
        width,
    },
    title: {
        fontSize: 80,
        color: 'white',
        textAlign: 'center',
        lineHeight: 80,
        fontWeight: '700'
    },
    titleContainer: {
        height: 100,
        justifyContent: "center"
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end"
    },
    picture: {
        alignSelf: "center",
        width: width * 0.55,
        height: height * 0.55
        // top: 
    }
});

function Slide({ label, right, left, picture }) {

    const transform = [
        { translateY: (SLIDER_HEIGHT - 100) / 2 },
        { translateX: right ? (width / 2 - 50) : (-width / 2 + 50) },
        { rotate: right ? "-90deg" : "90deg" }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.underlay}>
                <Image source={picture} style={styles.picture}/>
            </View>
            <View style={[styles.titleContainer, { transform }]}>
                <Text style={styles.title}>{label}</Text>
            </View>
        </View>
    )
}

export default Slide
