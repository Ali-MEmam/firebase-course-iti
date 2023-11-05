import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

export const usersCol = collection(firestore, "users");
export const msgsCol = collection(firestore, "msgs");

// const [user] = useAuthState(auth)
// query(usersCol / usersCol , where('','',''),limit())
// const [collection] = useCollectionData(usersCol / msgsCol )
// https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth
// https://firebase.google.com/docs/firestore/query-data/get-data
