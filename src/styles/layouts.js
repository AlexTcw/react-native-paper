import {StyleSheet} from "react-native";

const layoutStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        justifyContent: "center",
        padding: 50,
    },
    logo: {
        height: 100,
        width: "100%",
        resizeMode: "contain",
        marginBottom: 20,
    },
});

export default layoutStyles;