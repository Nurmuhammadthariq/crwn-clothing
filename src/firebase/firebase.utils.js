import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDciMv2yU1MjjZSzGKWGo25pFv9EgJ2MSM',
  authDomain: 'crwn-db-bf17a.firebaseapp.com',
  projectId: 'crwn-db-bf17a',
  storageBucket: 'crwn-db-bf17a.appspot.com',
  messagingSenderId: '953808961088',
  appId: '1:953808961088:web:bc0028b4c99b137ebe29a5',
  measurementId: 'G-0J4CJ414EC',
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
