import AsyncStorage from "@react-native-async-storage/async-storage";
import {TOKEN} from "../utils/constants";


export const setTokenApi = async() => {
    try {
        await AsyncStorage.setItem(TOKEN, value);
        return true
    } catch (e) {
        return null
    }
}

export  const getTokenApi = async() => {
    try {
        const value = await AsyncStorage.getItem(TOKEN);
        return value
    } catch (e) {
        return null
    }
};

export  const setTokenApi = async() =>{
    try {
        const value = await AsyncStorage.getItem(TOKEN);
        return value
    } catch (e) {
        return null
    }
};

export const getData = async () =>{
    try {
        const value = await AsyncStorage.getItem(TOKEN)
        if (value != null){
            
        }
    } catch (e) {
        
    }
}