import { getAuth } from 'firebase/auth'
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDocs, collection, query, getFirestore, addDoc, deleteDoc, doc } from 'firebase/firestore';

import { PUBLIC_API_KEY, PUBLIC_APP_ID, PUBLIC_AUTH_DOMAIN, PUBLIC_MEASUREMENT_ID, PUBLIC_MESSAGING_SENDER_ID, PUBLIC_PROJECT_ID, PUBLIC_STORAGE_BUCKET } from "$env/static/public"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0DjodnciGm4X7UsNXNuvH9CenkH_01jY",
    authDomain: "iedc-backend-57b57.firebaseapp.com",
    projectId: "iedc-backend-57b57",
    storageBucket: "iedc-backend-57b57.appspot.com",
    messagingSenderId: PUBLIC_MESSAGING_SENDER_ID,
    appId: PUBLIC_APP_ID,
    measurementId: "G-2JHGTZ82DM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage()
const db = getFirestore()
export const auth = getAuth()

const pathReference = ref(storage, 'screenshots/2021-08-19.png')

/**
 * 
 * @param {import('firebase/storage').StorageReference} pathRef 
 * @returns String
 */

export async function loadImage(pathRef) {
    try {
        const res = await getDownloadURL(pathRef)
        return res
    }
    catch {
        return ""
    }
}


// handling events

/**
 * @param {{ eventName: string; linkToGuidelines: string; linkToReg: string; posterImage: string; price: number; venue: string; }} eventData
 */
export async function addEvent(eventData) {
    const docRef = await addDoc(collection(db, "events"), eventData)
}

/**
 * @param {string} eventId
 */
export async function deleteEvent(eventId) {
    await deleteDoc(doc(db, "events", eventId))
}

export async function getAllEvents() {
    const q = query(collection(db, "events"));
    /**
     * @type {{ docId: string; }[]}
     */
    let events = []
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        events.push({...doc.data(), docId: doc.id})
    });

    return events

}


// handling lectures
export async function addLecture(eventData) {
    const docRef = await addDoc(collection(db, "lectures"), eventData)
}

/**
 * @param {string} eventId
 */
export async function deleteLecture(eventId) {
    await deleteDoc(doc(db, "lectures", eventId))
}

export async function getAllLectures() {
    const q = query(collection(db, "lectures"));
    /**
     * @type {{ docId: string; }[]}
     */
    let events = []
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        events.push({...doc.data(), docId: doc.id})
    });

    return events

}

// handling workshops
export async function addWorkshop(eventData) {
    const docRef = await addDoc(collection(db, "workshops"), eventData)
}

/**
 * @param {string} eventId
 */
export async function deleteWorkshop(eventId) {
    await deleteDoc(doc(db, "workshops", eventId))
}

export async function getAllWorkshops() {
    const q = query(collection(db, "workshops"));
    /**
     * @type {{ docId: string; }[]}
     */
    let events = []
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        events.push({...doc.data(), docId: doc.id})
    });

    return events

}