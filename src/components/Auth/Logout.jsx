import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Logout() {

return (
  <View style={styles.container}>
     <Text>Zona de Usuarios</Text>
     <button title='cerrar sesión' onPress={authData.Logout}></button>
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