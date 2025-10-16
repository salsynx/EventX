// /js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCzBInzu6CYO7SyMFWjw7YHhKDCmxeJ688",
  authDomain: "eventx-tm-hackattack.firebaseapp.com",
  projectId: "eventx-tm-hackattack",
  storageBucket: "eventx-tm-hackattack.appspot.com",
  messagingSenderId: "128226433491",
  appId: "1:128226433491:web:089d250300b3988cdeb726"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
