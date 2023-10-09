import { initializeApp } from "firebase/app"
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
} from "firebase/auth"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.envVITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGE_SENDERID,
    appId: import.meta.env.VITE_APPID,
    measurementId: import.meta.env.VITE_MEASUREMENTID,
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GoogleAuthProvider()

export { auth, provider }


// onAuthStateChanged(auth, (user) => {})
