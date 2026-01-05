import { useState } from "react";

function Customers() {
  const [search, setSearch] = useState("");
  const [customers] = useState([
    { name: "John Doe", phone: "9876543210", email: "john@example.com" },
    { name: "Jane Smith", phone: "9123456789", email: "jane@example.com" },
    { name: "Alice", phone: "9000000000", email: "alice@example.com" }
  ]);

  const filtered = customers.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Customers</h2>
      <input
        placeholder="Search by name"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: "10px", width: "50%", marginBottom: "10px" }}
      />
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th><th>Phone</th><th>Email</th>
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
  );
}

export default Customers;
