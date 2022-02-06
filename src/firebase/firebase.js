import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyD0M37T4D8OR-Xwt6G3KENhuhBef7X1mcE",
        authDomain: "proyecto-fotostore.firebaseapp.com",
        projectId: "proyecto-fotostore",
        storageBucket: "proyecto-fotostore.appspot.com",
        messagingSenderId: "235727484799",
        appId: "1:235727484799:web:e7f194fe60190ed2f64c4a"
    }
)

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}