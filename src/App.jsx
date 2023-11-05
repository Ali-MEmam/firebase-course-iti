import { useAuthState } from "react-firebase-hooks/auth";
import "./App.scss";
import { auth, firebaseApp, usersCol } from "./config";
import { ChatView, Login } from "./layout";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useEffect, useMemo } from "react";
import { addDoc, limit, query, where } from "firebase/firestore";
function App() {
  const [user] = useAuthState(auth);
  const isUserExist = useMemo(
    () => user && query(usersCol, where("uid", "==", user.uid)),
    [user]
  );
  const [users] = useCollectionData(isUserExist);
  useEffect(() => {
    if (!!user && !!users && users.length === 0) {
      addDoc(usersCol, {
        uid: user?.uid,
        photoURL: user?.photoURL,
        displayName: user?.displayName,
      });
    }
  }, [user, users]);
  return <div className="app">{user?.uid ? <ChatView /> : <Login />}</div>;
}
export default App;
