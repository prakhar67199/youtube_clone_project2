import {getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDdY2Vov8A-6HZwNW-qYxPQjDeJxsZCzro",
  authDomain: "auth-54e34.firebaseapp.com",
  databaseURL: "https://auth-54e34-default-rtdb.firebaseio.com",
  projectId: "auth-54e34",
  storageBucket: "auth-54e34.appspot.com",
  messagingSenderId: "1042877779477",
  appId: "1:1042877779477:web:cc94813a30e4670314881c",
  measurementId: "G-BM6K3ZYRSB"
};

const app = getApps.length >0 ?getApp(): initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};