import * as firebase from 'firebase';

const firebaseConfig={
    apiKey: "AIzaSyCYgckH6HMZCferDYAt9ISY9saa9hCYqDU",
    authDomain: "fir-rn-4652b.firebaseapp.com",
    databaseURL: "https://fir-rn-4652b.firebaseio.com",
    projectId: "fir-rn-4652b",
    storageBucket: "fir-rn-4652b.appspot.com",
    messagingSenderId: "704244728030",
    appId: "1:704244728030:web:b7296631fd3f3b872b824f"
}

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;