import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Index';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import Config from './pages/Config';
import Masuk from './pages/Masuk';
import Keluar from './pages/Keluar';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = true;
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to="/index" />} />
          <Route path="index" element={<Dashboard />} />
          <Route path="masuk" element={<Masuk />} />
          <Route path="keluar" element={<Keluar />} />
          <Route path="config" element={<Config />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
