import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-7SKVCDu27Qjorrz1MrruMkCOiHYUR5c",
    authDomain: "dropbox-v2-51c1e.firebaseapp.com",
    projectId: "dropbox-v2-51c1e",
    storageBucket: "dropbox-v2-51c1e.appspot.com",
    messagingSenderId: "390912324515",
    appId: "1:390912324515:web:5faec60bf9f1b14589a016"
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);


export { db, storage };