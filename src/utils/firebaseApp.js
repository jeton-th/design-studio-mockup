import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBphQGqgvq8MLcbxU8rMCsDsmuO-qFGs8M',
  authDomain: 'design-studio-jt.firebaseapp.com',
  databaseURL: 'https://design-studio-jt.firebaseio.com',
  projectId: 'design-studio-jt',
  storageBucket: 'design-studio-jt.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
});

export const firestore = firebaseApp.firestore();
export default firebaseApp;
