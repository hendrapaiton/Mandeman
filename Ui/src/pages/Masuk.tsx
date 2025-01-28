import React, { useState } from 'react';

const Masuk = () => {
  const [suratMasuk, setSuratMasuk] = useState([
    { id: 1, index: '2023-1234567890', tanggal: '2023-01-01', berkas: 'berkas1.pdf' },
    { id: 2, index: '2023-0987654321', tanggal: '2023-01-02', berkas: 'berkas2.pdf' },
    // ...other data...
  ]);

  const [form, setForm] = useState({ id: '', index: '', tanggal: '', berkas: '' });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuratMasuk([...suratMasuk, { ...form, id: suratMasuk.length + 1 }]);
    setForm({ id: '', index: '', tanggal: '', berkas: '' });
    setShowForm(false);
  };

  const handleDisposisi = (id: number) => {
    // Handle disposisi action
  };

  const handleEdit = (id: number) => {
    // Handle edit action
  };

  const handleDelete = (id: number) => {
    setSuratMasuk(suratMasuk.filter(surat => surat.id !== id));
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="p-8">
      {!showForm ? (
        <>
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-semibold">Surat Masuk</h1>
              <button onClick={() => setShowForm(true)} className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
                <i className="bi bi-plus-circle mr-2"></i> Tambah Surat
              </button>
            </div>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200 text-left">No</th>
                  <th className="py-2 px-4 border-b border-gray-200 text-left">Index</th>
                  <th className="py-2 px-4 border-b border-gray-200 text-left">Tanggal</th>
                  <th className="py-2 px-4 border-b border-gray-200 text-left">Berkas</th>
                  <th className="py-2 px-4 border-b border-gray-200 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {suratMasuk.map((surat, index) => (
                  <tr key={surat.id} className={index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2 px-4 border-b border-gray-200">{index + 1}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{surat.index}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{surat.tanggal}</td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      <a href={`/path/to/berkas/${surat.berkas}`} download className="text-blue-500 underline">
                        {surat.berkas} <i className="bi bi-file-earmark-arrow-down"></i>
                      </a>
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200 text-right">
                      <div className="flex justify-end space-x-2">
                        <button onClick={() => handleDisposisi(surat.id)} className="bg-teal-500 text-white px-2 py-1 rounded flex items-center">
                          <i className="bi bi-arrow-right-circle mr-1"></i> Disposisi
                        </button>
                        <button onClick={() => handleEdit(surat.id)} className="bg-yellow-500 text-white px-2 py-1 rounded flex items-center">
                          <i className="bi bi-pencil-square mr-1"></i> Edit
                        </button>
                        <button onClick={() => handleDelete(surat.id)} className="bg-red-500 text-white px-2 py-1 rounded flex items-center">
                          <i className="bi bi-trash mr-1"></i> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Tambah Surat Masuk</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="index"
                value={form.index}
                onChange={handleChange}
                placeholder="Index"
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
                name="berkas"
                value={form.berkas}
                onChange={handleChange}
                placeholder="Berkas"
                className="border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div className="mt-4 flex space-x-2">
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
                <i className="bi bi-floppy mr-2"></i> Submit
              </button>
              <button type="button" onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded flex items-center">
                <i className="bi bi-x-circle mr-2"></i> Batal
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Masuk;
