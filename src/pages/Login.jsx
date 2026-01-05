import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password!");
      return;
    }
    // For demo: login success alert
    alert(`Logged in as ${email}${remember ? " (Remember Me)" : ""}`);
    navigate("/dashboard"); // Navigate to dashboard
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={{ color: "#1f2937", marginBottom: "20px" }}>CRM Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <div style={optionsStyle}>
          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />{" "}
            Show Password
          </label>

          <label>
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />{" "}
            Remember Me
          </label>
        </div>

        <button onClick={handleLogin} style={buttonStyle}>
          Login
        </button>
      </div>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f3f4f6",
};

const boxStyle = {
  padding: "40px",
  backgroundColor: "white",
  borderRadius: "15px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  width: "350px",
  textAlign: "center",
};

const inputStyle = {
  padding: "12px",
  width: "100%",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const optionsStyle = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "14px",
  margin: "10px 0",
};

const buttonStyle = {
  padding: "12px 20px",
  width: "100%",
  backgroundColor: "#facc15",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Login;
