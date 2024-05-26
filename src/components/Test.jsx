import {Text, View} from 'react-native';
import React from 'react';

export default function Test() {
    return (
        <View>
            <Text>Component test</Text>
            <Button
                icon="camera"
                mode="contained"
                onPress={() => console.log('Pressed')}>
                Press me
            </Button>

        </View>
    );
}

const styles = StyleSheet.create();