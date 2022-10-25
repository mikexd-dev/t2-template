// This is the go-to, all-in-one file for all Firebase related code.

import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIjO47BpIYTEUEKrpDin7qg_X205nROJo",
  authDomain: "authentick-app.firebaseapp.com",
  projectId: "authentick-app",
  storageBucket: "authentick-app.appspot.com",
  messagingSenderId: "463493083891",
  appId: "1:463493083891:web:99074f253de00cfa663d86",
  measurementId: "G-F9H2Q8KMKW",
};

function createFirebaseApp(config: any) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}
const firebaseApp = createFirebaseApp(firebaseConfig);

// Firestore (DB)
export const firestore = getFirestore(firebaseApp);

// Firebase Storage
// export const storage = getStorage(firebaseApp);
