import React from "react";

const Config: React.FC = () => {
  return (
    <div className="flex pt-4 mx-4">
      <div className="w-1/2 p-4 border-r border-gray-200">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-md font-semibold uppercase mb-4">Pengaturan Pengguna</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                value="@username"
                disabled
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Masukkan password anda"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Konfirmasi</label>
              <input
                type="password"
                placeholder="Konfirmasi password anda"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Ubah Password
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-md font-semibold uppercase mb-4">Pengaturan Sistem</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Instansi</label>
              <input
                type="text"
                placeholder="Masukkan nama instansi"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Alamat Instansi</label>
              <textarea
                rows={5}
                placeholder="Masukkan alamat instansi"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nomor Kontak</label>
              <input
                type="text"
                placeholder="Masukkan nomor kontak"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Simpan Pengaturan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Config;
