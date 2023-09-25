// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { signOut, getAuth, signInWithRedirect, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,

} from 'firebase/firestore';


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBleWldg8NXPWDodp8Lkb2TsVdXPjGdnFM",
  authDomain: "big-db-70dd1.firebaseapp.com",
  projectId: "big-db-70dd1",
  storageBucket: "big-db-70dd1.appspot.com",
  messagingSenderId: "94611600457",
  appId: "1:94611600457:web:53843bbd5f33ddf2953b98"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters(
    {
        prompt: 'select_account'
    }
);

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();
export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);

  });
  await batch.commit();
  console.log('done');
}

export const getCategoriesAndDocuments = async() => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})

  return categoryMap;
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

if(!userSnapshot.exists()){
  const {displayName, email} = userAuth;
  const createdAt = new Date();
  try{
    await setDoc(userDocRef, {
      displayName,
      email, 
      createdAt,
      ...additionalInformation
    });
  }
  catch(error) {
    
    console.log('error creating the user', error.message);
  }
}
return userDocRef;
}
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback);