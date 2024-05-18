import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'; // Importar Image de 'react-native'
import { layoutStyles } from "../styles/index";
import logo from "../../assets/icon.png";
import RegisterForm from "../components/Auth/RegisterForm";
import LoginForm from "../components/Auth/LoginForm";

export default function Auth() {
    const [showLogin, setShowLogin] = useState(false);
    const changeForm = ()=>setShowLogin(!showLogin)
    return (
        <View style={layoutStyles.container}>
            <Image
                source={logo}
                style={layoutStyles.logo}
            />
            {showLogin ?
                <LoginForm changeForm={changeForm}/> :
                <RegisterForm changeForm={changeForm} />}
        </View>
    );
}
