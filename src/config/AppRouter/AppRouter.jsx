import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Dashboard from '../../pages/Home/dashboard/Dashboard';


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Example Route */}
        <Route path="/" element={<Dashboard />} /> {/* Example Route */}

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
