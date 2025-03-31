import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./services/userService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // To navigate after successful login

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setError(""); // Clear previous error

    try {
      const credentials = { email, password };
      await login(credentials);
      navigate("/posts");
    } catch (err) {
      // Set error message for invalid login (incorrect password)
      setError("รหัสผ่านผิดพลาด");
    }
  };

  return (
    <div className="login-container" style={{ background: "#1E90FF" }}>
      <img
        src="logoHandy.png"
        alt="Logo"
        style={{
          width: 250,
          height: "auto",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      {/* ฟอร์ม Login */}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <p
            style={{
              color: "#FFFFFF",
              fontFamily: "Prompt",
              fontSize: 16,
              fontWeight: 600,
              marginLeft: 48,
              marginTop: 0,
            }}
          >
            อีเมล์ผู้ใช้งาน
          </p>
          <label htmlFor="email"></label>
          <input
            style={{
              color: "black",
              backgroundColor: "#D9D9D9",
              marginLeft: 48,
              fontSize: 16,
              width: 300,
              paddingBlock: 16,
              border: "2px solid #D9D9D9",
              borderRadius: 10,
            }}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-group">
          <p
            style={{
              color: "#FFFFFF",
              fontFamily: "Prompt",
              fontSize: 16,
              fontWeight: 600,
              marginLeft: 48,
              marginTop: 16,
            }}
          >
            รหัสผ่าน
          </p>
          <input
            style={{
              color: "black",
              backgroundColor: "#D9D9D9",
              marginLeft: 48,
              fontSize: 16,
              width: 300,
              paddingBlock: 16,
              border: "2px solid #D9D9D9",
              borderRadius: 10,
            }}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        {/* แสดงข้อความผิดพลาด */}
        {error && (
          <p
            style={{
              color: "red",
              textAlign: "center",
              fontFamily: "Prompt",
              fontSize: 14,
              fontWeight: 400,
              marginTop: 10,
            }}
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          style={{
            display: "block",
            margin: "0 auto",
            marginTop: 30,
            color: "#1E90FF",
            backgroundColor: "#D9D9D9",
            fontFamily: "Prompt",
            fontSize: 16,
            fontWeight: 600,
            width: 130,
            paddingBlock: 5,
            border: "2px solid #D9D9D9",
            borderRadius: 10,
          }}
        >
          เข้าสู่ระบบ
        </button>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <p
            style={{
              textAlign: "center",
              marginTop: 5,
              marginBottom: 100,
              color: "#FFFFFF",
              fontFamily: "Prompt",
              fontSize: 14,
              fontWeight: 400,
            }}
          >
            สมัครสมาชิก
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
