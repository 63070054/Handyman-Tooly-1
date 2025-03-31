import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import BackButtonPage from "./BackButtonPage";

const Account = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, phone };
    console.log("ข้อมูลผู้ใช้งาน: ", userData);
    navigate("/FullAccount"); // นำทางหลังจากส่งฟอร์ม
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <BackButtonPage
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
        }}
      />
      <img
        src="wonder.png"
        alt="wonder"
        style={{
          width: 160,
          height: "auto",
          display: "block",
          margin: "60px auto 0",
          borderRadius: "50%",
        }}
      />

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <p style={styles.label}>ชื่อผู้ใช้งาน</p>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </div>

        <div className="input-group">
          <p style={styles.label}>หมายเลขโทรศัพท์</p>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
          />
        </div>

        <div className="input-group">
          <p style={styles.label}>อีเมล์ผู้ใช้งาน</p>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>
          ยืนยัน
        </button>
        <div style={{ height: 220 }}></div>
      </form>
    </div>
  );
};

// สไตล์รวม
const styles = {
  label: {
    color: "#FFFFFF",
    fontFamily: "Prompt",
    fontSize: 16,
    fontWeight: 600,
    marginLeft: 48,
    marginTop: 16,
  },
  input: {
    color: "black",
    backgroundColor: "#D9D9D9",
    marginLeft: 48,
    fontSize: 16,
    width: 300,
    paddingBlock: 16,
    border: "2px solid #D9D9D9",
    borderRadius: 10,
  },
  button: {
    display: "block",
    margin: "30px auto 50px",
    color: "#1E90FF",
    backgroundColor: "#D9D9D9",
    fontFamily: "Prompt",
    fontSize: 16,
    fontWeight: 600,
    width: 130,
    paddingBlock: 5,
    border: "2px solid #D9D9D9",
    borderRadius: 10,
  },
};

export default Account;
