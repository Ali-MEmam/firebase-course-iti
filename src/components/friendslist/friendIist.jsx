import { useCollectionData } from "react-firebase-hooks/firestore";
import { FriendInbox } from ".";
import { auth, usersCol } from "../../config";
import { useMemo } from "react";
import { query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export const FriendList = () => {
  const [user] = useAuthState(auth);
  const filterUsersQuery = useMemo(
    () => user && query(usersCol, where("uid", "!=", user.uid)),
    []
  );
  const [users] = useCollectionData(filterUsersQuery);

  return (
    <>
      {users?.map((data) => (
        <FriendInbox active data={data} key={data.uid} />
      ))}
    </>
  );
};
