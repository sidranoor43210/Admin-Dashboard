// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import Settings from './components/Settings';  // Import Settings component
import Reports from './components/Reports';  // Import Reports component

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main content area */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />  {/* Dashboard Route */}
            <Route path="/users" element={<UserManagement />} />  {/* User Management Route */}
            <Route path="/settings" element={<Settings />} />  {/* Settings Route */}
            <Route path="/reports" element={<Reports />} />  {/* Reports Route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
