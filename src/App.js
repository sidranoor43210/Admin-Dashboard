import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import Settings from './components/Settings'; 
import Reports from './components/Reports';  
import Header from './components/Header';

const App = () => {
  return (
<div className='bg-gray-200' > 
  <Header/>
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
    </div>
  );
};

export default App;
