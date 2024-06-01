import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { updatePost } from "../../api/posts";

export default function EditPostComponent({ post, onSave, onCancel }) {
    const [editedPost, setEditedPost] = useState(post);
    const [errorMessage, setErrorMessage] = useState('');
    const [reload, setReload] = useState(false); // Variable de estado para indicar recarga

    const handleInputChange = (key, value) => {
        setEditedPost({
            ...editedPost,
            [key]: value
        });
    };

    const handleSave = async () => {
        const result = await updatePost(editedPost, editedPost.id);
        if (result && result.message) {
            onSave(editedPost);
            Alert.alert('Éxito', 'El post ha sido actualizado exitosamente.');
            onCancel(); // Llamar a onCancel después de completar el guardado
        } else {
            const errorMessage = result ? result.error : 'Error desconocido';
            setErrorMessage(errorMessage);
        }
    };

    const handleReturn = () => {
        onCancel(); // Llamar a la función onCancel al pulsar "Regresar"
    };

    // Efecto para recargar el componente cuando la variable de estado 'reload' cambia
    useEffect(() => {
        if (reload) {
            setReload(false); // Reiniciar la variable de estado 'reload'
            // Lógica para recargar el componente aquí...
        }
    }, [reload]);

    return (
        <View>
            <TextInput
                label="Título"
                value={editedPost.Titulo}
                onChangeText={(text) => handleInputChange('Titulo', text)}
                style={{ marginBottom: 10 }}
            />
            <TextInput
                label="Fecha"
                value={editedPost.Fecha}
                onChangeText={(text) => handleInputChange('Fecha', text)}
                style={{ marginBottom: 10 }}
            />
            <TextInput
                label="Mensaje"
                value={editedPost.Mensaje}
                onChangeText={(text) => handleInputChange('Mensaje', text)}
                style={{ marginBottom: 10 }}
            />
            {errorMessage ? <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text> : null}
            <Button mode="contained" onPress={handleSave} style={{ marginBottom: 10 }}>
                Guardar
            </Button>
            <Button mode="contained" onPress={onCancel} style={{ marginBottom: 10 }}>
                Cancelar
            </Button>
            <Button mode="contained" onPress={() => { handleReturn(); setReload(true); }} style={{ marginBottom: 10 }}>
                Regresar
            </Button>
        </View>
    );
}
