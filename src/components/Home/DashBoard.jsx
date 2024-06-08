import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { publishPost, recoverData } from "../../api/posts";
import { log } from "expo/build/devtools/logger";
import FormComponent from "../CRUD-Posts/Form";
import PostListComponent from "../CRUD-Posts/posts";

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
        <ScrollView style={{ flex: 1, padding: 20 }}>
            <View style={{ flex: 1, marginBottom: 80 }}>
                <Title>Últimos Posts</Title>
                <Button
                    mode="contained"
                    onPress={handleToggleView}
                    style={{ marginTop: 10 }}
                >
                    {showForm ? "Ver Posts" : "Crear Nuevo Post"}
                </Button>
                {showForm ? (
                    <FormComponent
                        titulo={titulo}
                        setTitulo={setTitulo}
                        mensaje={mensaje}
                        setMensaje={setMensaje}
                        handleFormSubmit={handleFormSubmit}
                    />
                ) : (
                    <PostListComponent postData={postData} />
                )}
            </View>
        </ScrollView>
    );
}
