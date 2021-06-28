import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC-vKOH7ZiIqfVZif5KVBnGG7lU6HhuMiE",
  authDomain: "olx-app-e0cd3.firebaseapp.com",
  projectId: "olx-app-e0cd3",
  storageBucket: "olx-app-e0cd3.appspot.com",
  messagingSenderId: "187335750176",
  appId: "1:187335750176:web:cf521f85af640cbd850245",
  measurementId: "G-L9962696V6"
};
  
export default firebase.initializeApp(firebaseConfig)