import { getAuth } from 'firebase/auth'
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDocs, collection, query, getFirestore, addDoc, deleteDoc, doc } from 'firebase/firestore';

import { PUBLIC_API_KEY, PUBLIC_APP_ID, PUBLIC_AUTH_DOMAIN, PUBLIC_MEASUREMENT_ID, PUBLIC_MESSAGING_SENDER_ID, PUBLIC_PROJECT_ID, PUBLIC_STORAGE_BUCKET } from "$env/static/public"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: PUBLIC_API_KEY,
    authDomain: PUBLIC_AUTH_DOMAIN,
    projectId: "iedc-backend-57b57",
    storageBucket: "iedc-backend-57b57.appspot.com",
    messagingSenderId: PUBLIC_MESSAGING_SENDER_ID,
    appId: PUBLIC_APP_ID,
    measurementId: "G-2JHGTZ82DM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage();
const db = getFirestore()

const pathReference = ref(storage, 'screenshots/2021-08-19.png')

export async function loadImage() {
    try {
        const res = await getDownloadURL(pathReference)
        return res
    }
    catch {
        return ""
    }
}

export async function uploadImage(blob) {

}

export async function addEvent(eventData) {
    const docRef = await addDoc(collection(db, "events"), eventData)
}

export async function deleteEvent(eventId) {
    await deleteDoc(doc(db, "events", eventId))
}

export async function getAllEvents() {
    const q = query(collection(db, "events"));
    let events = []
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        events.push({...doc.data(), docId: doc.id})
    });

    return events

}
