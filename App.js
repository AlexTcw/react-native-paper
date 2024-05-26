import {Text} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import React, {useEffect, useMemo, useState} from 'react';

import Auth from './src/screens/Auth';
import AuthContext from "./src/components/context/AuthContext";
import {setTokenApi} from "./src/api/token";

export default function App() {

    const [auth, setAuth] = useState(undefined);

    useEffect(() => {
        setAuth(null)
    }, []);

    const login = (user)=>{
        /*console.log('LOGGIN APP')
        console.log(user)*/
        setTokenApi(user.jwt)
        setAuth({
            token : user.jwt,
            idUser:user.id
        })
    }

    const authData = useMemo(() => ({
        auth,
        login,
        logout: () => null
    }), [auth]);

    if (auth === undefined) return null;

    return (
        <AuthContext.Provider value={authData}>
            <PaperProvider>
                {auth ? <Text>Zona de Usuarios</Text> : <Auth/>}
            </PaperProvider>
        </AuthContext.Provider>
    );
}
