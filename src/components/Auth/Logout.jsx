import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from "react-native-paper";

export default function Logout({ authData }) {
    return (
        <View style={[styles.container, styles.absoluteBottom]}>
            <Button mode="contained" title='cerrar sesión' onPress={authData.logout}>Cerrar sesión</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    absoluteBottom: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingBottom: 20, // Espacio adicional opcional
    },
});
