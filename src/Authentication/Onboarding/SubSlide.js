import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../Components';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 44
    },
    subtitle: {
        textAlign: "center",
        marginBottom: 12,
        fontSize: 28,
        fontWeight: '700',
        lineHeight: 30,
        color: "#0C0D34"
    },
    description: {
        textAlign: "center",
        marginBottom: 40,
        fontSize: 16,
        lineHeight: 24,
        color: "#0C0D34"
    }
})

function SubSlide({ subtitle, description, last, onPress }) {
    return (
        <View style={styles.container}>
            <Text variant="title2" style={styles.subtitle}>{subtitle}</Text>
            <Text variant="body" style={styles.description}>{description}</Text>
            <Button 
                label={last ? "Let's get started" : "Next"} 
                variant={last ? "primary" : "default"}
                {...{onPress}}
            />
        </View>
    )
}

export default SubSlide
