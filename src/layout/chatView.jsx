import { ChatContent, ChatFooter, ChatTitle, FriendList } from "../components";

export const ChatView = () => {
  return (
    <>
      <div className="header">
        <div className="user-settings">
          <button>Logout</button>
        </div>
      </div>
      <div className="wrapper">
        <div className="conversation-area">
          <FriendList />
        </div>
        <div className="chat-area">
          {false ? (
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
