import { getAuth } from "firebase/auth";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getDocs,
  collection,
  query,
  getFirestore,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";

// import { PUBLIC_API_KEY, PUBLIC_APP_ID, PUBLIC_AUTH_DOMAIN, PUBLIC_MEASUREMENT_ID, PUBLIC_MESSAGING_SENDER_ID, PUBLIC_PROJECT_ID, PUBLIC_STORAGE_BUCKET } from "$env/static/public"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0DjodnciGm4X7UsNXNuvH9CenkH_01jY",

  authDomain: "iedc-backend-57b57.firebaseapp.com",

  projectId: "iedc-backend-57b57",

  storageBucket: "iedc-backend-57b57.appspot.com",

  messagingSenderId: "998530857834",

  appId: "1:998530857834:web:36b38caae67c14e2124313",

  measurementId: "G-2JHGTZ82DM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage();
const db = getFirestore();
export const auth = getAuth();

const pathReference = ref(storage, "screenshots/2021-08-19.png");

/**
 *
 * @param {import('firebase/storage').StorageReference} pathRef
 * @returns String
 */

export async function loadImage(pathRef) {
  try {
    const res = await getDownloadURL(pathRef);
    return res;
  } catch {
    return "";
  }
}

// handling events

/**
 * @param {{ eventName: string; linkToGuidelines: string; linkToReg: string; posterImage: string; price: number; venue: string; }} eventData
 */
export async function addEvent(eventData) {
  const docRef = await addDoc(collection(db, "events"), {
    ...eventData,
    completed: false,
  });
}

/**
 * @param {string} eventId
 */
export async function deleteEvent(eventId) {
  await deleteDoc(doc(db, "events", eventId));
}

// handling lectures
/**
 * @param {any} eventData
 */
export async function addLecture(eventData) {
  const docRef = await addDoc(collection(db, "lectures"), {
    ...eventData,
    completed: false,
  });
}

/**
 * @param {string} eventId
 */
export async function deleteLecture(eventId) {
  await deleteDoc(doc(db, "lectures", eventId));
}

// handling workshops
/**
 * @param {any} eventData
 */
export async function addWorkshop(eventData) {
  const docRef = await addDoc(collection(db, "workshops"), {
    ...eventData,
    completed: false,
  });
}

/**
 * @param {string} eventId
 */
export async function deleteWorkshop(eventId) {
  await deleteDoc(doc(db, "workshops", eventId));
}

// sets the value of the completed property to whatever state
/**
 * @param {string} id
 * @param {any} state
 */
export async function markEventComplete(id, state) {
  await setDoc(doc(db, "events", id), { completed: state }, { merge: true });
}

// sets the value of the completed property to whatever state
/**
 * @param {string} id
 * @param {any} state
 */
export async function markLectureComplete(id, state) {
  await setDoc(doc(db, "lectures", id), { completed: state }, { merge: true });
}

// sets the value of the completed property to whatever state
/**
 * @param {string} id
 * @param {any} state
 */
export async function markWorkshopComplete(id, state) {
  await setDoc(doc(db, "workshops", id), { completed: state }, { merge: true });
}

// handling speakers
/**
 * @param {string} collectionname
 * @param {any} Data
 */
export async function addData(collectionname, Data) {
  const docRef = await addDoc(collection(db, collectionname), { ...Data });
}

/**
 * @param {string} collectionname
 * @param {string} Id
 */
export async function deleteData(collectionname, Id) {
  await deleteDoc(doc(db, collectionname, Id));
}

/**
 * @param {string} collectionname
 */
export async function getAllData(collectionname) {
  const q = query(collection(db, collectionname));
  /**
   * @type {{ docId: string; }[]}
   */
  let list = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    list.push({ ...doc.data(), docId: doc.id });
  });

  list = list.sort((a, b) => a.Priority - b.Priority);

  return list;
}

export async function getAllDataFormatted(collectionname) {
  const q = query(collection(db, collectionname));
  /**
   * @type {{ docId: string; }[]}
   */
  let list = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    list.push({ ...doc.data(), docId: doc.id });
  });

  list = list.sort((a, b) => a.Priority - b.Priority);

  let new_events = [];
  for (let event of list) {
    if (event.posterImage != null) {
      console.log(event.posterImage)
      const imgUrl = await getDownloadURL(ref(storage, event.posterImage));
      new_events.push({ ...event, imgUrl });
    }
    else if (event.Image != null) {
      const imgUrl = await getDownloadURL(ref(storage, event.Image));
      new_events.push({ ...event, imgUrl });
    }
    else {
      new_events.push(event);
    }

  }

  return new_events;
}
