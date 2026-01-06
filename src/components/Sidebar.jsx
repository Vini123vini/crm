import { Link } from "react-router-dom";

function Sidebar({ open }) {
  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <h2 className="logo">CRM</h2>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/customers">Customers</Link>
      <Link to="/add-customer">Add Customer</Link>
      <Link to="/leads">Leads</Link>
    </div>
  );
}

export default Sidebar;
