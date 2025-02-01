import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1 className=" bg-gray-300 h-10 rounded flex items-center justify-center
       text-2xl font-semibold">Dashboard</h1>
      <div className="mt-6">
        {/*cards for the Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-semibold">Total Users</h2>
            <p>1,200</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-semibold">Active Sessions</h2>
            <p>320</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-semibold">Reports</h2>
            <p>New Reports Pending</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
