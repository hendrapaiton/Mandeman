import React from 'react';
import Infografis from '../components/dasbor/Infografis';
import Terbaru from '../components/dasbor/Terbaru';
import Aktifitas from '../components/dasbor/Aktifitas';

interface DashboardProps { }

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="p-8">
      <Infografis />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <Terbaru />
        <Aktifitas />
      </div>
    </div>
  );
};

export default Dashboard;
