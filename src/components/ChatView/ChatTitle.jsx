import { useSecondUser } from "../../config";

export const ChatTitle = () => {
  const { secondUser } = useSecondUser();
  return (
    <div className="chat-area-header">
      <div className="chat-area-title">{secondUser?.displayName}</div>
    </div>
  );
};
