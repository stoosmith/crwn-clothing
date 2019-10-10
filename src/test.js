import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

/* Querying a firestore DB */
firestore.collection('users').doc('0JpQWCusCy1BJU3BdI6L').collection('cartItems').doc('KVsdvQz8Lc6qwNuxodX6');
/* OR */
firestore.doc('users/0JpQWCusCy1BJU3BdI6L/cartItems/KVsdvQz8Lc6qwNuxodX6');
/* OR */
firestore.collection('users/0JpQWCusCy1BJU3BdI6L/cartItems');
