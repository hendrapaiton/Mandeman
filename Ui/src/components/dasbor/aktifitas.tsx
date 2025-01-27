import React from 'react';

interface AktifitasProps { }

const Aktifitas: React.FC<AktifitasProps> = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Aktivitas Terkini</h2>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <i className="bi bi-envelope text-blue-600"></i>
          </div>
          <div>
            <p className="text-sm text-gray-800">Surat masuk baru telah ditambahkan</p>
            <p className="text-xs text-gray-500 mt-1">2 menit yang lalu</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
            <i className="bi bi-check-circle text-green-600"></i>
          </div>
          <div>
            <p className="text-sm text-gray-800">Surat keluar telah disetujui</p>
            <p className="text-xs text-gray-500 mt-1">1 jam yang lalu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aktifitas;
