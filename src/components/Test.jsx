import {StyleSheet, Text, View} from "react-native";
import {Button} from "react-native-paper";
import React from "react";


export default function Test() {
    return(
        <View>
            <Text>Componente Test</Text>
            <Button
                icon={"camera"}  mode={"contained"}
                onPress={()=>console.log("pressed")}
                title={"Press me"}>Press me
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({})