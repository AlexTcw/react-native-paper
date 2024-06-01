import React from 'react';
import { View, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { API_URL } from '../../utils/constants';

export default function PostListComponent({ postData }) {
    return (
        <View>
            {postData && postData.map((post, index) => (
                <Card key={index} style={{ marginTop: 10 }}>
                    <Card.Content>
                        <Title>{post.Titulo}</Title>
                        <Paragraph>{post.Fecha}</Paragraph>
                        <Paragraph>{post.Mensaje}</Paragraph>
                        {post.Recursos.map((recurso, idx) => (
                            <Image
                                key={idx}
                                source={{uri: `${API_URL}${recurso.url}`}}
                                style={{width: 200, height: 200}}
                            />
                        )) && post.Recursos}
                    </Card.Content>
                </Card>
            ))}
        </View>
    );
}
