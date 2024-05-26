import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper'; // Importa los componentes de React Native Paper
import { publishPost, recoverData } from "../../api/posts";
import { API_URL } from "../../utils/constants";
import { log } from "expo/build/devtools/logger";

export default function Dashboard() {
    const [postData, setPostData] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = await recoverData();
            setPostData(data);
        }
        fetchData().then(r => log("ok"));
    }, []);

    const handleToggleView = () => {
        setShowForm(!showForm);
    };

    const handleFormSubmit = async () => {
        const result = await publishPost({
            "Titulo": titulo,
            "Mensaje": mensaje,
            "Fecha": new Date().toISOString(),
            "Recursos": []
        });
        if (result) {
            const updatedData = await recoverData();
            setPostData(updatedData);
        }
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Title>Últimos Posts</Title>
            <Button
                mode="contained"
                onPress={handleToggleView}
                style={{ marginTop: 10 }}
            >
                {showForm ? "Ver Posts" : "Crear Nuevo Post"}
            </Button>
            {showForm ? (
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
            ) : (
                postData && postData.map((post, index) => (
                    <Card key={index} style={{ marginTop: 10 }}>
                        <Card.Content>
                            <Title>{post.Titulo}</Title>
                            <Paragraph>{post.Fecha}</Paragraph>
                            <Paragraph>{post.Mensaje}</Paragraph>
                            {post.Recursos && post.Recursos.map((recurso, idx) => (
                                <Image
                                    key={idx}
                                    source={{ uri: `${API_URL}${recurso.url}` }}
                                    style={{ width: 200, height: 200 }}
                                />
                            ))}
                        </Card.Content>
                    </Card>
                ))
            )}
        </View>
    );
}
