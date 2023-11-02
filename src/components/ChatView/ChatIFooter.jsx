import { useState } from "react";

export const ChatFooter = () => {
  const [msgContent, setMsgContent] = useState("");

  const handleSendMsg = (e) => {
    e.preventDefault();

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
