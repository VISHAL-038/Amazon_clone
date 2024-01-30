// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBecF8fpiLFMkERUTz4OVPGJx1NJBbeydc",
  authDomain: "amazoina-ca22d.firebaseapp.com",
  projectId: "amazoina-ca22d",
  storageBucket: "amazoina-ca22d.appspot.com",
  messagingSenderId: "532590964029",
  appId: "1:532590964029:web:2da2ca15257970f4bde954",
  measurementId: "G-FXVRC5YFMR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig
// const analytics = getAnalytics(app);