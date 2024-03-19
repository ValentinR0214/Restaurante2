import React from 'react';
import Navigation from './src/modules/navigation/Navigation';
import {app, auth, db, storage} from './src/config/util/firebaseConnection';
import 'react-native-gesture-handler';

export default function App() {
  return (
    
    <Navigation />
    
  );
}