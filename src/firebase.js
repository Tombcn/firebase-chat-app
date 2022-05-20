import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyANrbYmfsAmipxOH8dpqDUi1THMrOgYi5U",
  authDomain: "chat-app-8b8d0.firebaseapp.com",
  projectId: "chat-app-8b8d0",
  storageBucket: "chat-app-8b8d0.appspot.com",
  messagingSenderId: "811662616104",
  appId: "1:811662616104:web:6f3cdd28d04c9ed62cf71d"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }