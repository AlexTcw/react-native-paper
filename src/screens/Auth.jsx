import {Image, View} from 'react-native';
import React, {useState} from 'react';
import {layoutStyles} from '../styles/index';
import ZeldaIcon from '../../assets/ZeldaIcon.jpg';
import RegisterForm from '../components/Auth/RegisterForm';
import LoginForm from '../components/Auth/LoginForm';

export default function Auth() {
    const [showLogin, setShowLogin] = useState(false)
    const changeForm = () => setShowLogin(!showLogin)

    return (
        <View style={layoutStyles.container}>
            <Image
                source={ZeldaIcon}
                style={layoutStyles.logo}
            />
            {showLogin ?
                <LoginForm changeForm={changeForm}/> :
                <RegisterForm changeForm={changeForm}/>}
        </View>
    );
}