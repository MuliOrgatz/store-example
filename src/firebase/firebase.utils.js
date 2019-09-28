import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB-lrwFalbMBC63KIKUqVhm2GPJQ82uLXE",
    authDomain: "store-db-1ed77.firebaseapp.com",
    databaseURL: "https://store-db-1ed77.firebaseio.com",
    projectId: "store-db-1ed77",
    storageBucket: "",
    messagingSenderId: "251393015254",
    appId: "1:251393015254:web:6ec1e374a82acc284cb877",
    measurementId: "G-SGSM3K3LGY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;