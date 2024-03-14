import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Login(props){
    const {name, lastname, isMan} = props;
return(
    <View style={styles.container}>
    <Text>Inicio de Sesión</Text>
    <Text>{`${name} ${lastname} ${isMan ? 'Sexo Masculino' : 'Sexo femenino'}`}</Text>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        background:'#FFF'

    }
})