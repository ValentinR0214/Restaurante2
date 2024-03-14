import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // Corregir el nombre del paquete
import CreateAccount from '../../auth/adapters/SCREENS/CreateAccount'
import Login from '../../auth/adapters/SCREENS/Login';
import UserGuest from '../../auth/adapters/SCREENS/UserGuest';
import Profile from '../../auth/adapters/SCREENS/Profile';
import UserLogged from '../../auth/adapters/SCREENS/UserLogged';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName='UserGuest'>
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ title: 'Inicio de sesion' }}
            />
            <Stack.Screen
                name='CreateAccount'
                component={CreateAccount}
                options={{ title: 'Crea tu cuenta' }}
            />
            <Stack.Screen
                name='UserGuest'
                component={UserGuest}
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen
                name='UserLogged'
                component={UserLogged}
                options={{ title: 'Cuenta' }}
            />
            <Stack.Screen
                name='Profile'
                component={Profile}
                options={{ title: 'Mi Perfil' }}
            />
        </Stack.Navigator>
    );
}
