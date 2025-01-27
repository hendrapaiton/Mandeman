import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Copyright from './copyright';

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
          <Copyright />
        </main>
      </div>
    </div>
  );
};

export default Layout;
