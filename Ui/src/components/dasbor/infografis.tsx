import React from 'react';

interface InfografisProps { }

const Infografis: React.FC<InfografisProps> = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-purple-100 text-sm font-medium">Total Surat</p>
            <h3 className="text-white text-3xl font-bold mt-2">2,847</h3>
          </div>
          <div className="bg-purple-400/30 rounded-full p-3">
            <i className="bi bi-envelope text-2xl text-white"></i>
          </div>
        </div>
        <div className="mt-4 flex items-center text-purple-100">
          <i className="bi bi-arrow-up-short text-lg"></i>
          <span className="text-sm font-medium">12% dari bulan lalu</span>
        </div>
      </div>
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-100 text-sm font-medium">Surat Masuk</p>
            <h3 className="text-white text-3xl font-bold mt-2">1,438</h3>
          </div>
          <div className="bg-blue-400/30 rounded-full p-3">
            <i className="bi bi-envelope-paper text-2xl text-white"></i>
          </div>
        </div>
        <div className="mt-4 flex items-center text-blue-100">
          <i className="bi bi-arrow-up-short text-lg"></i>
          <span className="text-sm font-medium">8% minggu ini</span>
        </div>
      </div>
      <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-emerald-100 text-sm font-medium">Surat Keluar</p>
            <h3 className="text-white text-3xl font-bold mt-2">1,409</h3>
          </div>
          <div className="bg-emerald-400/30 rounded-full p-3">
            <i className="bi bi-envelope-paper-fill text-2xl text-white"></i>
          </div>
        </div>
        <div className="mt-4 flex items-center text-emerald-100">
          <i className="bi bi-arrow-up-short text-lg"></i>
          <span className="text-sm font-medium">5% dari kemarin</span>
        </div>
      </div>
      <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-amber-100 text-sm font-medium">Rating Terkirim</p>
            <h3 className="text-white text-3xl font-bold mt-2">94%</h3>
          </div>
          <div className="bg-amber-400/30 rounded-full p-3">
            <i className="bi bi-check2-circle text-2xl text-white"></i>
          </div>
        </div>
        <div className="mt-4 flex items-center text-amber-100">
          <i className="bi bi-arrow-up-short text-lg"></i>
          <span className="text-sm font-medium">Sangat Baik</span>
        </div>
      </div>
    </div>
  );
};

export default Infografis;
