// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl8HF-WONTiLB_uq1qOeJUlZ16rKiKNLA",
  projectId: "gourmet-reservas",
  authDomain: "gourmet-reservas.firebaseapp.com",
  storageBucket: "gourmet-reservas.appspot.com",
  messagingSenderId: "17973040334",
  appId: "1:17973040334:web:e590d1eda1b69ccbf62c9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFileUsuarios(file){
  const storageRef = ref(storage, 'usuarios/' + v4())
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}

export async function uploadFileRestaurantes(file){
  const storageRef = ref(storage, 'restaurantes/' + v4())
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}