import { ChatMassage } from ".";

export const ChatContent = () => {
  return (
    <div className="chat-area-main">
      {[].map((data, index) => (
        <ChatMassage
          key={index}
          owner={data?.createdBy === "current"}
          msgData={data?.Msg}
          photoURL={data?.createdBy === "current" ? "photoUrl" : "photoUrl"}
        />
      ))}
    </div>
  );
};
