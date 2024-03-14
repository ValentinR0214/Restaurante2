import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCF9lXaNFpIKiV8tuziJTfyA5zoC7lM1YU",
  authDomain: "restaurantea-1b7d2.firebaseapp.com",
  projectId: "restaurantea-1b7d2",
  storageBucket: "restaurantea-1b7d2.appspot.com",
  messagingSenderId: "374959592262",
  appId: "1:374959592262:web:c12aa3e3ceb6e2711dcb47"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

const db = getFirestore(app);
const storage = getStorage(app);

  export{app, auth, db, storage};