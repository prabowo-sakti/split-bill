import Friend from "./Friend";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friendriend friend={friend} />
      ))}
    </ul>
  );
}
