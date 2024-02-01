// Import the functions you need from the SDKs you need
import { getFirestore} from "firebase/firestore";
// storage for images and videos
import { getStorage } from "firebase/storage";

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyA-1qJpCt4M04_q6-XUYnJNtoT7sARZ_Zg",
  authDomain: "cosee-fbd40.firebaseapp.com",
  projectId: "cosee-fbd40",
  storageBucket: "cosee-fbd40.appspot.com",
  messagingSenderId: "725791732485",
  appId: "1:725791732485:web:119da81ca8e0b0288b3d6c"
};


// Initialize Firebase

 const app = initializeApp(firebaseConfig);

 // Initialize Cloud Firestore and get a reference to the service
 const db = getFirestore(app);
 // Initialize image storage 
 const storage = getStorage(app);

export {storage, db};
