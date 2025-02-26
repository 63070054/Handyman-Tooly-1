import React, { useState } from "react";
import { Link } from "react-router-dom";

const PDPAAccount = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null); // state สำหรับเก็บรูปภาพ

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="login-container" style={{ background: "#1E90FF" }}>
      <img
        src="wonder.png"
        alt="wonder"
        style={{
          width: 160,
          height: "auto",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "50%",
        }}
      />
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
            เลขบัตรประชาชน
          </p>
          <input
            type="tel"
            placeholder="XXXXXXXXXXXXXX"
            value={id}
            onChange={(e) => setId(e.target.value)}
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
          />
        </div>
      </form>

      {/* ช่องกรอกหมายเลขโทรศัพท์ */}
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
          หมายเลขโทรศัพท์
        </p>
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
        />
      </div>

      {/* ฟอร์ม Login */}
      <form onSubmit={handleImageChange}>
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

        <Link to="/login" style={{ textDecoration: "none" }}>
          <p
            style={{
              textAlign: "center",
              marginTop: 32,
              marginBottom: 100,
              color: "#FFFFFF",
              fontFamily: "Prompt",
              fontSize: 14,
              fontWeight: 400,
            }}
          >
            ออกจากระบบ
          </p>
        </Link>
      </form>
    </div>
  );
};

export default PDPAAccount;
