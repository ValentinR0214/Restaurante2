import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // Corregir el nombre del paquete
import Home from '../../home/adapters/screens/Home';
import { StyleSheet } from 'react-native'; // Agregar la importación de StyleSheet


const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ title: 'Restaurantes' }} // Corregir la palabra options
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
