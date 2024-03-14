import React, { useState } from "react";
import { View, StyleSheet, Alert } from 'react-native';
import { Input, Button, Icon } from '@rneui/base';

import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../../../config/util/firebaseConnection'


export default function CreateAccount(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showMessage, setShowMessage] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }
  
    if (email === '' || password === '' || confirmPassword === '') {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
  
    if (password.length < 6) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Usuario registrado con éxito:', user);
    } catch (error) {
      console.error('Error al registrar el usuario:', error.message);
      Alert.alert('Error', 'No se pudo completar el registro');
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Correo@gmail.com"
        label="Correo Electronico: *"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
        labelStyle={styles.label}
        containerStyle={styles.input}
        errorMessage={showMessage}
        rightIcon={
          <Icon
            type="material-community"
            name="email-outline"
            color="tomato"
          />
        }
      />

      <Input
        placeholder='*********'
        label='Contraseña: *'
        onChangeText={text => setPassword(text)}
        labelStyle={styles.label}
        containerStyle={styles.input}
        secureTextEntry={showPassword}
        rightIcon={
          <Icon
            type='material-community'
            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
            color='tomato'
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        errorMessage={showMessage}
      />

      <Input
        placeholder='*********'
        label='Confirmar Contraseña: *'
        onChangeText={text => setConfirmPassword(text)}
        labelStyle={styles.label}
        containerStyle={styles.input}
        secureTextEntry={showPassword}
        rightIcon={
          <Icon
            type='material-community'
            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
            color='tomato'
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        errorMessage={showMessage}
      />

      <Button
        title='Registrarse'
        onPress={handleRegister}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnStyle}
        titleStyle={{ color: '#000' }}
      />

      <Button
        title='Iniciar Sesion'
        type='clear'
        onPress={() => navigation.navigate('Login')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  label: {
    color: 'tomato',
  },
  btnStyle: {
    backgroundColor: '#fcd562',
  },
  btnContainer: {
    width: '80%',
  }
});
