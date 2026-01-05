import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import AddCustomer from "./pages/AddCustomer";
import Leads from "./pages/Leads";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar /> {/* Sidebar always visible */}
        <div style={{ padding: "20px", width: "100%" }}>
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
