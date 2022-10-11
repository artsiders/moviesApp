import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

const About = () => {
    return (
        <View style={style.container}>
            <Text style={style.text}>
                à propos !
            </Text>
            <Text style={style.text}>
                react native
            </Text>
            <ActivityIndicator
                style={style.loader}
                animating={true}
                size="large"
                color="#58e07c"
            />
        </View>
    )
}
export default About;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%",
        width: "100%"
    },
    text: {
        letterSpacing: 10,
        textTransform: "capitalize",
        fontWeight: "600",
        color: "#58e07c",
        textAlign: "center",
    },
    loader: {
        margin: 30
    }
})