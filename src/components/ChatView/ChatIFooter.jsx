import { addDoc } from "firebase/firestore";
import { useState } from "react";
import { auth, msgsCol, useSecondUser } from "../../config";
import { useAuthState } from "react-firebase-hooks/auth";

export const ChatFooter = () => {
  const [msgContent, setMsgContent] = useState("");
  const { secondUser } = useSecondUser();
  const [user] = useAuthState(auth);
  const handleSendMsg = (e) => {
    e.preventDefault();
    addDoc(msgsCol, {
      createdBy: user?.uid,
      createdAt: new Date(),
      content: msgContent,
      relation: `${user.uid}/${secondUser.uid}`,
    });
    setMsgContent("");
  };
  return (
    <div className="chat-area-footer">
      <form onSubmit={handleSendMsg}>
        <input
          type="text"
          value={msgContent}
          onChange={(e) => setMsgContent(e.target.value)}
          placeholder="Type something here..."
        />
        <button type="submit">Send 🕊 </button>
      </form>
    </div>
  );
};
