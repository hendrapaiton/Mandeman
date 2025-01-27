import React, { useState } from 'react';

const Masuk = () => {
  const [suratMasuk, setSuratMasuk] = useState([
    { id: 1, nomor: '001/MSK/2023', tanggal: '2023-01-01', perihal: 'Surat Masuk 1' },
    { id: 2, nomor: '002/MSK/2023', tanggal: '2023-01-02', perihal: 'Surat Masuk 2' },
    // ...other data...
  ]);

  const [form, setForm] = useState({ id: '', nomor: '', tanggal: '', perihal: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuratMasuk([...suratMasuk, { ...form, id: suratMasuk.length + 1 }]);
    setForm({ id: '', nomor: '', tanggal: '', perihal: '' });
  };

  return (
    <div className="p-8">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Surat Masuk</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Tambah Surat</button>
        </div>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 text-left">ID</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">Nomor</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">Tanggal</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">Perihal</th>
            </tr>
          </thead>
          <tbody>
            {suratMasuk.map((surat, index) => (
              <tr key={surat.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="py-2 px-4 border-b border-gray-200">{surat.id}</td>
                <td className="py-2 px-4 border-b border-gray-200">{surat.nomor}</td>
                <td className="py-2 px-4 border-b border-gray-200">{surat.tanggal}</td>
                <td className="py-2 px-4 border-b border-gray-200">{surat.perihal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Tambah Surat Masuk</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="nomor"
              value={form.nomor}
              onChange={handleChange}
              placeholder="Nomor Surat"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="date"
              name="tanggal"
              value={form.tanggal}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="text"
              name="perihal"
              value={form.perihal}
              onChange={handleChange}
              placeholder="Perihal"
              className="border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <button type="submit" className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Masuk;
