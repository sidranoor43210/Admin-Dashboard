// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import Settings from './components/Settings'; 
import Reports from './components/Reports';  

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        
        {/* Main content area */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />  
            <Route path="/users" element={<UserManagement />} />  
            <Route path="/settings" element={<Settings />} /> 
            <Route path="/reports" element={<Reports />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
