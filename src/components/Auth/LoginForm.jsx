import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { formStyles } from '../../styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginApi } from '../../api/users';
import useAuth from '../../hooks/useAuth';

export default function LoginForm({ changeForm }) {
    const { login } = useAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema),
        onSubmit: async (formData) => {
            try {
                const response = await loginApi(formData);
                if (response.statusCode) throw new Error('Error en la autenticación');
                login(response);
            } catch (error) {
                console.error(error);
            }
        },
    });

    function initialValues() {
        return {
            identifier: '',
            password: '',
        };
    }

    const validationSchema = {
        identifier: Yup.string().email('Correo electrónico inválido').required('El correo es obligatorio'),
        password: Yup.string().required('La contraseña es obligatoria'),
    };

    return (
        <View>
            <TextInput
                label="Correo electrónico o Username"
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
                onPress={formik.handleSubmit}
            >
                Iniciar Sesión
            </Button>
            <Button
                mode="text"
                style={formStyles.btnText}
                labelStyle={formStyles.btnTextLabel}
                onPress={changeForm}
            >
                Registrarse
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({});
