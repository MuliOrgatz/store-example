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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        }catch(error){
            console.log('eror creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;