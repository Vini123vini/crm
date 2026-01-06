import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import AddCustomer from "./pages/AddCustomer";
import Leads from "./pages/Leads";
import Sidebar from "./components/Sidebar";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar open={menuOpen} />
        <div className="main-content">
          <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/add-customer" element={<AddCustomer />} />
            <Route path="/leads" element={<Leads />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
