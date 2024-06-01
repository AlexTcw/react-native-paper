import React from 'react';
import { TextInput, View } from 'react-native';
import { Button, Card } from 'react-native-paper';

export default function FormComponent({ titulo, setTitulo, mensaje, setMensaje, handleFormSubmit }) {
    return (
        <Card style={{ marginTop: 10 }}>
            <Card.Content>
                <TextInput
                    placeholder="Título"
                    onChangeText={text => setTitulo(text)}
                    value={titulo}
                    style={{ marginBottom: 10 }}
                />
                <TextInput
                    placeholder="Mensaje"
                    onChangeText={text => setMensaje(text)}
                    value={mensaje}
                    multiline
                    style={{ marginBottom: 10 }}
                />
                <Button
                    mode="contained"
                    onPress={handleFormSubmit}
                >
                    Publicar
                </Button>
            </Card.Content>
        </Card>
    );
}
