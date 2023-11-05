import { useSecondUser } from "../../config";

export const FriendInbox = ({ data }) => {
  const { secondUser, setSecondUser } = useSecondUser();
  return (
    <div
      className={`msg ${data?.uid === secondUser?.uid && "active"}`}
      onClick={() => setSecondUser(data)}
    >
      <div className="msg-profile group">
        <img src={data?.photoURL} alt="user-image" />
      </div>
      <div className="msg-detail">
        <div className="msg-username">{data?.displayName}</div>
      </div>
    </div>
  );
};
