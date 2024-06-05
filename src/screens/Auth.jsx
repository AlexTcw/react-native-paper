import {Image, View} from 'react-native';
import React, {useState} from 'react';
import {layoutStyles} from '../styles/index';
import cerberoIcon from '../../assets/cerbero.png';
import RegisterForm from '../components/Auth/RegisterForm';
import LoginForm from '../components/Auth/LoginForm';

export default function Auth() {
    const [showLogin, setShowLogin] = useState(false)
    const changeForm = () => setShowLogin(!showLogin)

    return (
        <View style={layoutStyles.container}>
            <Image
                source={cerberoIcon}
                style={layoutStyles.logo}
            />
            {showLogin ?
                <LoginForm changeForm={changeForm}/> :
                <RegisterForm changeForm={changeForm}/>}
        </View>
    );
}