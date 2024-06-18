export default function Friend({ teman, onSelected, selectedFriend }) {
  const isSelect = selectedFriend?.id === teman.id;
  return (
    <li className={isSelect ? "selected" : ""}>
      <img src={teman.image} alt={teman.name} />
      <h1>{teman.name}</h1>
      {teman.balance < 0 && (
        <p className="red">
          Kamu berhutang Rp {Math.abs(teman.balance)} ke {teman.name}
        </p>
      )}
      {teman.balance > 0 && (
        <p className="green">
          {teman.name} berhutang Rp {Math.abs(teman.balance)} ke kamu
        </p>
      )}
      {teman.balance === 0 && <p>kamu dan {teman.name} tidak ada hutang</p>}
      <button className="button" onClick={() => onSelected(teman)}>
        {/* Penjelasan isSelect
        
        Kode ini berfungsi ketika ID dari selectedFriend dan teman itu sama,
        yang akan menghasilkan output true, lalu kenapa ketika kita klik Tutup
        form akan tertutup? bukankah akan menghasilkan true terus?
        karena pada event handler handleShowSelectedFriend pada App.jsx
        Ketika selectedFriend?.id === teman.id menjadi true, akan diubah ke Null atau kosong*/}
        {isSelect ? "Tutup" : "Pilih"}
        {/* End*/}
      </button>
    </li>
  );
}
