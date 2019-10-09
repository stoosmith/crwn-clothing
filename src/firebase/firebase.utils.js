import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyA1cfKvmP7uGCMTjyTvOZxA7-6poqNNcZk",
        authDomain: "crwn-db-3428b.firebaseapp.com",
        databaseURL: "https://crwn-db-3428b.firebaseio.com",
        projectId: "crwn-db-3428b",
        storageBucket: "crwn-db-3428b.appspot.com",
        messagingSenderId: "402759210856",
        appId: "1:402759210856:web:b5b9d1b5b75fe2a429e8dd",
        measurementId: "G-MJ9GW35YE9"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;