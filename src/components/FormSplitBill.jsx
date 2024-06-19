import { useState } from "react";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [amount, setAmount] = useState(""); // State untuk menyimpan total tagihan
  const [myBill, setMyBill] = useState(""); // State untuk menyimpan tagihan saya
  const friendBill = amount ? amount - myBill : ""; // Hitung tagihan teman jika total tagihan diisi
  const [whoIsPaying, setWhoIsPaying] = useState("user"); // State untuk menentukan siapa yang membayar

  function handleSubmit(e) {
    e.preventDefault(); // Mencegah form submit default

    // Validasi: Jika amount atau myBill kosong, hentikan eksekusi
    //Jika salah satu true maka blok kode return akan dijalankan
    //!amount dan !myBill akan menghasilkan true, karena nilainya kosong.
    if (!amount || !myBill) return;

    // Panggil onSplitBill dengan nilai yang sesuai
    // Jika user yang membayar, friendBill ditambahkan ke saldo teman
    // Jika teman yang membayar, myBill dikurangi dari saldo teman
    onSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
  }

  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Patungan Bareng Si {selectedFriend.name}</h2>
      <label htmlFor="">💵Total Tagihan</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label htmlFor="">🙋‍♂️Tagihan Kamu</label>
      <input
        type="text"
        value={myBill}
        onChange={(e) => setMyBill(e.target.value)}
      />

      <label htmlFor="">🙎🏻‍♂️Tagihan {selectedFriend.name}</label>
      <input type="text" value={friendBill} disabled />

      <label htmlFor="">💰 Ditalangin Sama</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">Kamu</option>
        <option value="friend"> {selectedFriend.name}</option>
      </select>
      <button className="button">Tambah</button>
    </form>
  );
}
