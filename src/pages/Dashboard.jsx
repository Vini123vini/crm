import React from "react";

function Dashboard() {
  const stats = [
    { title: "Customers", value: 120, color: "#facc15" },
    { title: "Leads", value: 45, color: "#34d399" },
    { title: "Deals", value: 18, color: "#60a5fa" },
    { title: "Revenue", value: "$12K", color: "#f87171" },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="cards-wrapper">
        {stats.map((stat, i) => (
          <div className="card" key={i} style={{ backgroundColor: stat.color }}>
            <h3>{stat.value}</h3>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
