import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FlatButton = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 5,
        height: "100%",
        paddingHorizontal: 10,
        backgroundColor: '#F01D71',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    }
})

export default FlatButton;
