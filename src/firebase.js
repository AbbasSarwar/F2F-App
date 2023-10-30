import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyARYdO4a7NVsi0SKdpInkcSrHkKOp_VgqQ",
  authDomain: "f2fchat-ef450.firebaseapp.com",
  projectId: "f2fchat-ef450",
  storageBucket: "f2fchat-ef450.appspot.com",
  messagingSenderId: "1097504074335",
  appId: "1:1097504074335:web:11328c435d60d5e29cc9ea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();