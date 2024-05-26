import {StyleSheet, View} from 'react-native'
import React from 'react'
import {Button, TextInput} from 'react-native-paper'
import {formStyles} from '../../styles'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {loginApi} from '../../api/users'
import useAuth from "../../hooks/useAuth";

export default function LoginForm({changeForm}) {

    const {login} = useAuth()
    //console.log(auth)

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            console.log(formData);
            try {
                const response = await loginApi(formData)
                //console.log(response)
                //console.log(response.user.name)
                login(response)
            } catch (error) {
                console.log(error)
            }
        }
    });

    function initialValues() {
        return {
            identifier: "",
            password: ""
        }
    }

    function validationSchema() {
        return {
            identifier: Yup.string().email().required(true),
            password: Yup.string().required(true)
        }
    }

    return (
        <View>
            <TextInput
                label="Correo electronico o Username"
                style={formStyles.input}
                onChangeText={(text) => formik.setFieldValue('identifier', text)}
                value={formik.values.identifier}
                error={formik.errors.identifier}
            />
            <TextInput
                label="Contraseña"
                style={formStyles.input}
                secureTextEntry
                onChangeText={(text) => formik.setFieldValue('password', text)}
                value={formik.values.password}
                error={formik.errors.password}
            />
            <Button
                mode="contained"
                style={formStyles.btnSuccess}
                onPress={formik.handleSubmit}>
                Iniciar Sesion
            </Button>
            <Button
                mode="text"
                style={formStyles.btnText}
                labelStyle={formStyles.btnTextLabel}
                onPress={changeForm}>
                Registrarse
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({})