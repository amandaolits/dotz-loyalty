import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { UserProvider } from "../context/UserContext";
import AddressPage from "../pages/AddressPage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import StatementPage from "../pages/StatementPage";
import PrivateRoute from "./PrivateRoute";

const RoutesConfig = () => (
  <AuthProvider>
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/address" element={<AddressPage />} />
            <Route path="/statement" element={<StatementPage />} />
          </Route>
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Router>
    </UserProvider>
  </AuthProvider>
);

export default RoutesConfig;
