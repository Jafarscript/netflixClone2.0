import {initializeApp} from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDsaLK7iT8nn6d-rE5uXBdyI3kB_utP07o",
    authDomain: "netflix-clone-20-e57e4.firebaseapp.com",
    projectId: "netflix-clone-20-e57e4",
    storageBucket: "netflix-clone-20-e57e4.appspot.com",
    messagingSenderId: "106124913461",
    appId: "1:106124913461:web:e78785ffb59691ba63fa7c"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { auth }
export default db