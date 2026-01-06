import { useState } from "react";

function Customers() {
  const [search, setSearch] = useState("");
  const customers = [
    { name: "John Doe", phone: "9876543210", email: "john@example.com" },
    { name: "Jane Smith", phone: "9123456789", email: "jane@example.com" },
    { name: "Alice", phone: "9000000000", email: "alice@example.com" },
  ];

  const filtered = customers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container customers-page">
      <h2 style={{ marginBottom: "10px" }}>Customers</h2>

      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ maxWidth: "300px", marginBottom: "12px" }}
      />

      {/* 👉 Scroll hint for mobile */}
      <p style={{ fontSize: "12px", color: "#6b7280", marginBottom: "6px" }}>
        Swipe horizontally to view all columns →
      </p>

      <div className="customers-table-wrapper">
        <table className="customers-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, i) => (
              <tr key={i}>
                <td>{c.name}</td>
                <td>{c.phone}</td>
                <td>{c.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers;
