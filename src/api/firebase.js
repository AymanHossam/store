import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD19Vh6dL5ZL5cy8BjxY15I5fTExafSsmc",
    authDomain: "auth-7fa81.firebaseapp.com",
    databaseURL: "https://auth-7fa81.firebaseio.com",
    storageBucket: "gs://auth-7fa81.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default firebase