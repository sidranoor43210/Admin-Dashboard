import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-semibold">Admin Panel</div>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Hello, Admin</span>
        <button className="text-gray-600">Logout</button>
      </div>
    </header>
  );
};

export default Header;
