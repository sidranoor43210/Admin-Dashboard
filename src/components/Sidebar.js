import React from 'react';
import { Link } from 'react-router-dom';  // Link to navigate

const Sidebar = () => {
  return (
    <div className="w-50 h-screen bg-gray-800 text-white">
      <div className="p-4 text-lg font-semibold">Admin Dashboard</div>
      <ul>
        {/* Dashboard Link */}
        <li className="p-4 hover:bg-gray-700">
          <Link to="/">Dashboard</Link> 
        </li>

        {/* Users Link */}
        <li className="p-4 hover:bg-gray-700">
          <Link to="/users">Users</Link> 
        </li>

        {/* Settings Link */}
        <li className="p-4 hover:bg-gray-700">
          <Link to="/settings">Settings</Link>  
        </li>

        {/* Reports Link */}
        <li className="p-4 hover:bg-gray-700">
          <Link to="/reports">Reports</Link> 
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
