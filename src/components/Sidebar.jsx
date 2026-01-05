import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{
      width: "220px",
      height: "100vh",
      backgroundColor: "#1f2937",
      color: "white",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "15px"
    }}>
      <h2 style={{ color: "#facc15" }}>CRM</h2>
      <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
      <Link to="/customers" style={linkStyle}>Customers</Link>
      <Link to="/add-customer" style={linkStyle}>Add Customer</Link>
      <Link to="/leads" style={linkStyle}>Leads</Link>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: "#374151"
};

export default Sidebar;
