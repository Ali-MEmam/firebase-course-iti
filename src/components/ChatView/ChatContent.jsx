import { useCollectionData } from "react-firebase-hooks/firestore";
import { ChatMassage } from ".";
import { auth, msgsCol, useSecondUser } from "../../config";
import { useEffect, useMemo, useState } from "react";
import { query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export const ChatContent = () => {
  const { secondUser } = useSecondUser();
  const [sortedMsgs, setSortedMsgs] = useState([]);
  const [user] = useAuthState(auth);
  const filterMsgsQuery = useMemo(
    () =>
      !!user &&
      !!secondUser?.uid &&
      query(
        msgsCol,
        where("relation", "in", [
          `${user?.uid}/${secondUser?.uid}`,
          `${secondUser?.uid}/${user?.uid}`,
        ])
      ),
    [user, secondUser]
  );
  const [msgs] = useCollectionData(filterMsgsQuery);
  useEffect(() => {
    setSortedMsgs(msgs?.sort((a, b) => a.createdAt - b.createdAt));
  }, [msgs]);
  return (
    <div className="chat-area-main">
      {sortedMsgs?.map((data, index) => (
        <ChatMassage
          key={index}
          owner={data?.createdBy === user?.uid}
          msgData={data?.content}
          createdAt={data?.createdAt}
          photoURL={
            data?.createdBy === user?.uid
              ? user?.photoURL
              : secondUser?.photoURL
          }
        />
      ))}
    </div>
  );
};
