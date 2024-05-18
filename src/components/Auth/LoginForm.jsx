import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Button, TextInput} from "react-native-paper";
import {formStyles} from "../../styles"; // Importar Image de 'react-native'

export default function LoginForm({changeForm}) {
    return(
        <View>
            <TextInput
                label="Correo Electrónico"
                style={formStyles.input}
            ></TextInput>
            <TextInput
                label="Contraseña"
                style={formStyles.input}
                secureTextEntry
            ></TextInput>
            <Button mode={"contained"} style={formStyles.btnSuccess}>Iniciar sesión</Button>
            <Button mode={"text"}
                    onPress={changeForm}
                    style={formStyles.btnText}
                    labelStyle={formStyles.btnTextLabel}
            >Registrarse</Button>
        </View>
    )
}

const styles = StyleSheet.create({})