import React, { useState, useEffect } from 'react';
import { View, Image, Alert } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { API_URL } from '../../utils/constants';
import { deletePost } from "../../api/posts";
import EditPostComponent from './EditPostComponent'; // Importamos el componente de edición
import { recoverData } from "../../api/posts"; // Importamos la función para recuperar los datos

export default function PostListComponent({ postData }) {
    const [posts, setPosts] = useState(postData);
    const [editingPost, setEditingPost] = useState(null); // Estado para controlar si se está editando un post

    useEffect(() => {
        setPosts(postData);
    }, [postData]);

    const handleDelete = async (id) => {
        const result = await deletePost(id);
        if (result && result.message) {
            Alert.alert('Success', result.message);
            // Actualizar la lista de posts después de borrar uno con éxito
            const updatedPosts = posts.filter(post => post.id !== id);
            setPosts(updatedPosts);
        } else {
            Alert.alert('Error', 'Failed to delete post');
        }
    };

    const handleUpdate = (post) => {
        setEditingPost(post); // Establecer el post que se está editando
    };

    const handleSaveEdit = (updatedPost) => {
        // Guardar el post actualizado
        console.log('Guardando post actualizado:', updatedPost);
        // Aquí podrías llamar a una función para enviar los datos actualizados al servidor
        setEditingPost(null); // Finalizar la edición
    };

    const handleCancelEdit = () => {
        setEditingPost(null); // Cancelar la edición
    };

    const handleReload = async () => {
        try {
            // Recuperar los datos actualizados de las publicaciones
            const updatedPosts = await recoverData();

            // Verificar si se obtuvieron los datos correctamente
            if (updatedPosts) {
                // Actualizar el estado de las publicaciones con los datos recuperados
                setPosts(updatedPosts);
                console.log("Datos recargados correctamente:", updatedPosts);
            } else {
                console.error("No se pudieron recuperar los datos de las publicaciones.");
            }
        } catch (error) {
            console.error("Error al recargar los datos:", error);
        }
    };

    return (
        <View>
            <Button mode="contained" onPress={handleReload} style={{ marginBottom: 10, marginTop: 10 }}>
                Recargar
            </Button>
            {posts && posts.map((post, index) => (
                <View key={index}>
                    {editingPost === post ? ( // Mostrar el componente de edición si se está editando este post
                        <EditPostComponent
                            post={post}
                            onSave={handleSaveEdit}
                            onCancel={handleCancelEdit}
                        />
                    ) : (
                        <Card style={{ marginTop: 10 }}>
                            <Card.Content>
                                <Title>{post.Titulo}</Title>
                                <Paragraph>{post.Fecha}</Paragraph>
                                <Paragraph>{post.Mensaje}</Paragraph>
                                {post.Recursos.map((recurso, idx) => (
                                    <Image
                                        key={idx}
                                        source={{ uri: `${API_URL}${recurso.url}` }}
                                        style={{ width: 200, height: 200 }}
                                    />
                                ))}
                                <Button mode="contained" onPress={() => handleDelete(post.id)}>
                                    Delete Post
                                </Button>
                                <Button mode="contained" onPress={() => handleUpdate(post)} style={{ marginTop: 10 }}>
                                    Actualizar
                                </Button>
                            </Card.Content>
                        </Card>
                    )}
                </View>
            ))}
        </View>
    );
}
