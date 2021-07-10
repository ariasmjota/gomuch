import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1K1y_QiIIc4CQUH1Ep-3dh4iX72UDW7Q",
  authDomain: "gomunch-87de6.firebaseapp.com",
  databaseURL: "https://gomunch-87de6.firebaseio.com",
  projectId: "gomunch-87de6",
  storageBucket: "gomunch-87de6.appspot.com",
  messagingSenderId: "237109917644",
  appId: "1:237109917644:web:cc802b60d636fb52dd4f69",
  measurementId: "G-C3E3NG7X0X",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
