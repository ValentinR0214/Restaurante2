import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // Corregir el nombre del paquete
import Favorites from '../../favorites/adapters/screens/Favorites';
import { StyleSheet } from 'react-native'; // Agregar la importación de StyleSheet


const Stack = createStackNavigator();

export default function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Favorites'
        component={Favorites}
        options={{ title: 'Mis favoritos' }} // Corregir la palabra options
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
