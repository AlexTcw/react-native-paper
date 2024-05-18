import { StyleSheet } from 'react-native';

const layoutStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding:20,
    },
    logo:{
        width:"100%",
        height:100,
        resizeMode: 'contain', // Ajusta la imagen dentro de sus límites manteniendo su relación de aspecto
        marginBottom:20,
    }
});

export default layoutStyles;
