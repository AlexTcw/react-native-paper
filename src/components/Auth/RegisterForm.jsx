import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, TextInput} from "react-native-paper";
import {formStyles} from "../../styles";
import {useFormik} from "formik";
import * as Yup from 'yup';

export default function RegisterForm({changeForm}) {
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
            console.log(formData);
        }
    });

    function initialValues() {
        return {
            email: "",
            userName: "",
            password: "",
            repeatPassword: "",
        };
    }

    function validationSchema() {
            return {
                email: Yup.string().email('Que paso master Correo electrónico inválido').required('Campo obligatorio'),
                userName: Yup.string().required('Campo obligatorio'),
                password: Yup.string().required('Campo obligatorio'),
                repeatPassword: Yup.string().oneOf([Yup.ref('password'), true], 'Las contraseñas no coinciden').required('Campo obligatorio'),
            }
    }

    return (
        <View>
            <TextInput
                label="Correo Electrónico"
                style={formStyles.input}
                onChangeText={(text) => formik.setFieldValue("email", text)}
                value={formik.values.email}
                error={formik.errors.email}
            />
            <TextInput
                label="Nombre de Usuario"
                style={formStyles.input}
                onChangeText={(text) => formik.setFieldValue("userName", text)}
                value={formik.values.userName}
                error={formik.errors.userName}
            />
            <TextInput
                label="Contraseña"
                style={formStyles.input}
                secureTextEntry
                onChangeText={(text) => formik.setFieldValue("password", text)}
                value={formik.values.password}
                error={formik.errors.password}
            />
            <TextInput
                label="Repetir Contraseña"
                style={formStyles.input}
                secureTextEntry
                onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
                value={formik.values.repeatPassword}
                error={formik.errors.repeatPassword}
            />
            <Button
                mode="contained"
                style={formStyles.btnSuccess}
                onPress={formik.handleSubmit}
            >
                Registrarse
            </Button>
            <Button
                mode="text"
                style={formStyles.btnText}
                labelStyle={formStyles.btnTextLabel}
                onPress={changeForm}
            >
                Iniciar sesión
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({});
