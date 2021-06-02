import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
        apiKey: "AIzaSyDt5AA3Oo5A4HGSzLCRGiKquuh2XWR_Kdo",
        authDomain: "compelling-mesh-299811.firebaseapp.com",
        projectId: "compelling-mesh-299811",
        storageBucket: "compelling-mesh-299811.appspot.com",
        messagingSenderId: "335526991691",
        appId: "1:335526991691:web:3074f2d39ad1afbbe63ace",
        measurementId: "G-0WM6CL0RV5"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();