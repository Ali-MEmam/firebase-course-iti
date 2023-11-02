import { FriendInbox } from ".";

export const FriendList = () => {
  return (
    <>
      {[]
        ?.filter((data) => true)
        ?.map((data) => (
          <FriendInbox active data={data} key={data.uid} />
        ))}
    </>
  );
};
