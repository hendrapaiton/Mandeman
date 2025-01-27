import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps { }

const Sidebar: React.FC<SidebarProps> = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white shadow-lg transition-all duration-300 ease-in-out flex flex-col">
      <h1 className="h-16 flex items-center px-12 border-b text-xl font-bold text-gray-800">
        <i className="bi bi-globe-asia-australia mr-3"></i>
        <span className="uppercase">Mandeman</span>
      </h1>
      <div className="flex-grow overflow-y-auto">
        <nav className="mt-5">
          <Link
            to="/index"
            className={`flex items-center px-6 py-3 transition-colors duration-200 ${location.pathname === '/index' ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600' : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            <i className="bi bi-house-door text-lg mr-3"></i>
            <span>Beranda</span>
          </Link>
          <Link
            to="/masuk"
            className={`flex items-center px-6 py-3 transition-colors duration-200 ${location.pathname === '/masuk' ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600' : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            <i className="bi bi-envelope text-lg mr-3"></i>
            <span>Surat Masuk</span>
          </Link>
          <Link
            to="/keluar"
            className={`flex items-center px-6 py-3 transition-colors duration-200 ${location.pathname === '/keluar' ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600' : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            <i className="bi bi-envelope-paper text-lg mr-3"></i>
            <span>Surat Keluar</span>
          </Link>
          <Link
            to="/setting"
            className={`flex items-center px-6 py-3 transition-colors duration-200 ${location.pathname === '/setting' ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600' : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            <i className="bi bi-gear text-lg mr-3"></i>
            <span>Pengaturan</span>
          </Link>
        </nav>
      </div>
      <div className="border-t mt-auto">
        <Link
          to="/logout"
          className="flex items-center w-full px-6 py-4 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors duration-200"
        >
          <i className="bi bi-box-arrow-left text-lg mr-3"></i>
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
