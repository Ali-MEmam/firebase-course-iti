import { format } from "date-fns";

export const ChatMassage = ({ owner, msgData, photoURL, createdAt }) => {
  return (
    <div className={`chat-msg ${owner && "owner"}`}>
      <div className="chat-msg-profile">
        <img className="chat-msg-img" src={photoURL || ""} alt="" />
        <div className="chat-msg-date">{`Message sent ${format(
          createdAt.toDate(),
          "hh:mm a"
        )}`}</div>
      </div>
      <div className="chat-msg-content">
        <div className="chat-msg-text">{msgData}</div>
      </div>
    </div>
  );
};
