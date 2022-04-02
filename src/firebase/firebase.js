import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDU4-MUjLoKDJ6RxJCBLf5jkJyRCoUMI4U",
    authDomain: "hadigram-1ab20.firebaseapp.com",
    projectId: "hadigram-1ab20",
    storageBucket: "hadigram-1ab20.appspot.com",
    messagingSenderId: "332736840496",
    appId: "1:332736840496:web:a95e219316fcc95d11bef5"
  }).auth();