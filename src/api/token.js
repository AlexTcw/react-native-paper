import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN } from "../utils/constants";

// Función para establecer el token en AsyncStorage
export const setTokenApi = async (value) => {
    try {
        await AsyncStorage.setItem(TOKEN, value);
        return true;
    } catch (e) {
        console.error("Error setting token:", e);
        return null;
    }
};

// Función para obtener el token desde AsyncStorage
export const getTokenApi = async () => {
    try {
        const value = await AsyncStorage.getItem(TOKEN);
        return value;
    } catch (e) {
        console.error("Error getting token:", e);
        return null;
    }
};

// Función para obtener algún dato usando el token desde AsyncStorage
export const getData = async () => {
    try {
        const token = await AsyncStorage.getItem(TOKEN);
        if (token != null) {
            // Aquí puedes agregar la lógica para usar el token
            // por ejemplo, hacer una llamada a la API
            console.log("Token found:", token);
            // return someData;
        } else {
            console.log("No token found");
            return null;
        }
    } catch (e) {
        console.error("Error getting data:", e);
        return null;
    }
};

export const removeTokenApi = async () => {
    try {
        await AsyncStorage.removeItem(TOKEN);
        return true;
    } catch (e) {
        return null;
    }
};