import React, { useState, useEffect } from 'react';
import { View, Image, Alert } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { API_URL } from '../../utils/constants';
import { deletePost, recoverData } from "../../api/posts";
import EditPost from './EditPost'; // Importamos el componente de edición

export default function PostListComponent({ postData }) {
    const [posts, setPosts] = useState(postData || []);
    const [editingPost, setEditingPost] = useState(null);

    useEffect(() => {
        setPosts(postData);
    }, [postData]);

    const handleDelete = async (id) => {
        try {
            const result = await deletePost(id);
            if (result && result.message) {
                Alert.alert('Success', result.message);

                const updatedPosts = posts.filter(post => post.id !== id);
                setPosts(updatedPosts);
            } else {
                Alert.alert('Error', 'Failed to delete post');
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to delete post');
            console.error(error);
        }
    };

    const handleUpdate = (post) => {
        setEditingPost(post); // Establecer el post que se está editando
    };

    const handleSaveEdit = (updatedPost) => {
        console.log('Guardando post actualizado:', updatedPost);

        // Actualizar la lista de posts con el post editado
        const updatedPosts = posts.map(post =>
            post.id === updatedPost.id ? updatedPost : post
        );

        // Actualizar el estado de posts con la lista actualizada
        setPosts(updatedPosts);

        // Resetear el post en edición a null
        setEditingPost(null);
    };


    const handleCancelEdit = () => {
        setEditingPost(null); // Cancelar la edición
    };

    const handleReload = async () => {
        try {
            const updatedPosts = await recoverData();
            if (updatedPosts) {
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
            <Button mode="contained" onPress={handleReload}
                    style={{ marginBottom: 10, marginTop: 10 }}
                    buttonColor="#ce7e00"
                    textColor="#FFFFFF">

                    Recargar
            </Button>
            {Array.isArray(posts) && posts.map((post, index) => (
                <View key={index}>
                    {editingPost === post ? (
                        <EditPost
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
                                <Button
                                    mode="contained"
                                    onPress={() => handleDelete(post.id)}
                                    style={{ marginTop: 10 }}
                                    buttonColor="#e06666"
                                    textColor="#FFFFFF"
                                >
                                    Borrar
                                </Button>
                                <Button
                                    mode="contained"
                                    onPress={() => handleUpdate(post)}
                                    style={{ marginTop: 10 }}
                                    buttonColor="#6fa8dc"
                                    textColor="#FFFFFF"
                                >
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
