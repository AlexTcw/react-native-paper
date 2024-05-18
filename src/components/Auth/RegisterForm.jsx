import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, TextInput} from "react-native-paper";
import {formStyles} from "../../styles"; // Importar Image de 'react-native'

export default function RegisterForm() {
    return (
        <View>
            <TextInput
            label="Correo Electrónico"
            style={formStyles.input}
            ></TextInput>
            <TextInput
                label="Nombre de Usuario"
                style={formStyles.input}
            ></TextInput>
            <TextInput
                label="Contraseña"
                style={formStyles.input}
                secureTextEntry
            ></TextInput>
            <TextInput
                label="Repetir Contraseña"
                style={formStyles.input}
                secureTextEntry
            ></TextInput>
            <Button mode={"contained"} style={formStyles.btnSuccess}>Registrarse</Button>
            <Button mode={"text"}
                    style={formStyles.btnText}
                    labelStyle={formStyles.btnTextLabel}
                    >Iniciar sesión</Button>
        </View>
    );
}

const styles = StyleSheet.create({})
