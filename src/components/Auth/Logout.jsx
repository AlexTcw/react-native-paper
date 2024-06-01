import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Button} from "react-native-paper";

export default function Logout({authData}) {

    console.log("hola")

return (
  <View style={styles.container}>
     <Button mode="contained" title='cerrar sesión' onPress={authData.logout}>Cerrar session</Button>
  </View>
)

}

const styles =  StyleSheet.create({
   container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
   }
       
}) 