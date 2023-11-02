export const FriendInbox = ({ data }) => {
  return (
    <div
      className={`msg ${false && "active"}`}
      onClick={() => console.log(data)}
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
