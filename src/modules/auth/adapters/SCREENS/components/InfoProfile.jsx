import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import UsuarioAvatar from "../../../../../../assets/usuario.png";
import { Avatar } from '@rneui/base';
import * as imagePicker from 'expo-image-picker';
import { getAuth, updateProfile } from 'firebase/auth';
import { storage } from '../../../../../config/util/firebaseConnection';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import Loading from '../../../../../kernel/components/Loading';

export default function InfoProfile(props) {
  const { infoUser: { photoURL, displayName, email, uid } } = props;
  const [showLoading, setShowLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const uploadImage = async (uri) => {
    setShowLoading(true);
    const response = await fetch(uri);
    const { _bodyBlob } = response;
    const storageRef = ref(storage, `avatar/${uid}`);
    return uploadBytes(storageRef, _bodyBlob);
  };

  const uploadPhotoUrl = async () => {
    try {
      const url = await getDownloadURL(ref(storage, `avatar/${uid}`));
      await updateProfile(getAuth().currentUser, {
        photoURL: url,
      });
    } catch (error) {
      console.error(error);
      alert('Error al actualizar la foto de perfil');
    } finally {
      setShowLoading(false);
    }
  };

  const changeAvatar = async () => {
    const { status } = await imagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'denied') {
      const result = await imagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setIsVisible(true);
        try {
          await uploadImage(result.assets[0].uri);
          await uploadPhotoUrl();
          alert('Foto de perfil actualizada');
        } catch (error) {
          alert('Error al subir la imagen');
        } finally {
          setIsVisible(false);
        }
      } else {
        alert('Es necesario aceptar los permisos de la galería');
      }
    }
  };

  return (
    <View style={styles.row}>
      <Avatar
        size={64}
        rounded
        source={photoURL ? { uri: photoURL } : UsuarioAvatar}
        title="Bj"
        containerStyle={{ backgroundColor: 'grey' }}
      >
        <Avatar.Accessory size={23} onPress={changeAvatar} />
      </Avatar>
      <View style={{ flexDirection: 'column', marginLeft: 16 }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
          {displayName || 'Anonimo'}
        </Text>
        <Text style={{ fontSize: 12 }}>
          {email || "No hay correo electronico"}
        </Text>
      </View>
      <Loading
        visible={isVisible}
        title='Cambiando foto de perfil'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 16,
  },
});
