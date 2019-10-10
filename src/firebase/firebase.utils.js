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
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;