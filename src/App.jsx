import FriendList from "./components/FriendList";
import "./App.css";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sukma",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Parjo",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [addFriend, setAddFriend] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  // Menampilkan dan menyembunyikan FormAddFriend dengan state showAddFriend
  function handleShowAddFriend() {
    setShowAddFriend((tampilkan) => !tampilkan);
    setSelectedFriend(null);
  }
  // * //

  //state Selected akan berisi objek, ketika tampilkan?.id === friend.id = false.
  //maka state selectedFriend, akan menjadi objek, karena simbol : mengartikan jika keadaan false
  //yang dimana ketika false, state selectedFriend berisi objek friend.
  function handleShowSelectedFriend(friend) {
    setSelectedFriend((tampilkan) =>
      tampilkan?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    // Update state addFriend dengan nilai baru
    setAddFriend(
      addFriend.map((friend) => {
        // Jika id teman sesuai dengan id teman yang dipilih, perbarui saldo
        if (friend.id === selectedFriend?.id) {
          return {
            ...friend,
            balance: friend.balance + value, // Tambahkan atau kurangi saldo teman
          };
        }
        return friend; // Kembalikan teman lain tanpa perubahan
      })
    );
    setSelectedFriend(null); // Setel selectedFriend menjadi null setelah pembagian tagihan
  }

  // Dan newFriend yang diteruskan sebagai argumen onAddFriend pada FormAddFriend adalah friend pada event handler ini
  function handleAddFriend(friend) {
    setAddFriend((prevFriend) => [...prevFriend, friend]);
  }
  // * //

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={addFriend}
          onSelected={handleShowSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <button className="button" onClick={handleShowAddFriend}>
          {showAddFriend ? "Tutup" : "Tambah Teman"}{" "}
        </button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
