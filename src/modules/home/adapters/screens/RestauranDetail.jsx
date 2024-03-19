import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';

export default function RestauranDetail(props) {
  const { item } = props.route.params;

  console.log(item);

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        initialRegion={{
          latitude: 18.8504360178492,
          longitude: -99.20069096669755,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  map: {
    width: '100%',
    height: '100%',
  },
})
