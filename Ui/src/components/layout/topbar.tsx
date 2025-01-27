import React from 'react';

interface TopbarProps { }

const Topbar: React.FC<TopbarProps> = () => {
  return (
    <div className="bg-white shadow-sm mx-8">
      <div className="px-8 py-2 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
          <p className="text-sm text-gray-600">Selamat datang kembali, Admin</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <i className="bi bi-bell text-xl"></i>
          </button>
          <div className="flex items-center space-x-3 border-l pl-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              A
            </div>
            <span className="text-sm font-medium text-gray-700">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
