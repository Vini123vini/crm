function Dashboard() {
  const stats = [
    { title: "Customers", value: 120 },
    { title: "Leads", value: 45 },
    { title: "Deals", value: 18 }
  ];

  return (
    <div>
      <h2 style={{ color: "#1f2937" }}>Dashboard</h2>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {stats.map((stat, i) => (
          <div key={i} style={cardStyle}>
            <h3>{stat.value}</h3>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const cardStyle = {
  padding: "20px",
  backgroundColor: "#f3f4f6",
  borderRadius: "10px",
  width: "150px",
  textAlign: "center",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
};

export default Dashboard;
