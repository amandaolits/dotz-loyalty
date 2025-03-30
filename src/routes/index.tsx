import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';
import AddressPage from '../pages/AddressPage';
import StatementPage from '../pages/StatementPage';

const RoutesConfig = () => (
  <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/statement" element={<StatementPage />} />
      </Routes>
    </Router>
  </UserProvider>
);

export default RoutesConfig;
