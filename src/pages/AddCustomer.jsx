import { useState } from "react";

function AddCustomer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {
    if(name && phone && email){
      alert(`Customer Added: ${name}`);
      setName(""); setPhone(""); setEmail("");
    } else {
      alert("Fill all fields!");
    }
  };

  return (
    <div>
      <h2>Add Customer</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} style={inputStyle}/><br /><br />
      <input placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} style={inputStyle}/><br /><br />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle}/><br /><br />
      <button onClick={handleSave} style={buttonStyle}>Save</button>
    </div>
  );
}

const inputStyle = { padding: "10px", width: "80%", borderRadius: "5px", margin: "5px 0" };
const buttonStyle = { padding: "10px 20px", backgroundColor: "#facc15", border: "none", borderRadius: "5px", cursor: "pointer" };

export default AddCustomer;
