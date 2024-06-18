import { useState } from "react";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() !== "") {
      // Web crypto API bukan fungsi bawaan javascript, tapi fitur dari browser modern
      const id = crypto.randomUUID();
      // ** //

      const newFriend = {
        id,
        name,
        image: `${image}?=${id}`,
        balance: 0,
      };
      // Ini merupakan props dari app.jsx dan argumen newFriend pada onAddfriend diteruskan ke komponen App
      onAddFriend(newFriend);
      // ** //
      setName("");
      setImage("");
      console.log(newFriend);
    }
  }

  return (
    <form action="" className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="">🙍 Nama</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="">📷Gambar</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button className="button">Tambah</button>
    </form>
  );
}
