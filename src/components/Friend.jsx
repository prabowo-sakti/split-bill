export default function friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h1>{friend.name}</h1>
      {friend.balance < 0 && (
        <p className="red">
          Kamu berhutang Rp {Math.abs(friend.balance)} ke {friend.name}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} berhutang Rp {Math.abs(friend.balance)} ke kamu
        </p>
      )}
      {friend.balance === 0 && (
        <p className="green">
          {friend.name} berhutang Rp {Math.abs(friend.balance)} ke kamu
        </p>
      )}
    </li>
  );
}
