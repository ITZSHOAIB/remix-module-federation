import type React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 p-10">
      <h2 className="text-4xl font-bold text-white mb-6">
        Welcome to our Module Federation Games!
      </h2>
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
