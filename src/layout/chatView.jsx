import { signOut } from "firebase/auth";
import { ChatContent, ChatFooter, ChatTitle, FriendList } from "../components";
import { auth, useSecondUser } from "../config";

export const ChatView = () => {
  const { secondUser } = useSecondUser();

  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <>
      <div className="header">
        <div className="user-settings">
          <button onClick={() => handleSignout()}>Logout</button>
        </div>
      </div>
      <div className="wrapper">
        <div className="conversation-area">
          <FriendList />
        </div>
        <div className="chat-area">
          {!!secondUser?.uid ? (
            <>
              <ChatTitle />
              <ChatContent />
              <ChatFooter />
            </>
          ) : (
            <div className="welcome-msg">Chat Application</div>
          )}
        </div>
      </div>
    </>
  );
};
