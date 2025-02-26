import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState(null); // state สำหรับเก็บรูปภาพ

  const handleSubmit = (e) => {
    e.preventDefault();

    // ตรวจสอบข้อมูลที่กรอก
    if (!email || !password) {
      setError("Please enter both email and password");
    } else {
      setError("");
      // ทำการ login (ตัวอย่าง, ควรเชื่อม API จริงในโปรเจ็กต์จริง)
      console.log("Logging in with:", email, password);
      if (image) {
        console.log("Uploaded image:", image);
      }
    }
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
    <div className="login-container" style={{ background: '#1E90FF' }}>
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
              color: "#D9D9D9",
              backgroundColor: '#D9D9D9',
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
              marginTop: 32,
            }}
          >
            รหัสผ่าน
          </p>
          <input
            style={{
              color: "#D9D9D9",
              backgroundColor: '#D9D9D9',
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

        <button
          type="submit"
          style={{
            display: 'block',
            margin: '0 auto',
            marginTop: 30,
            color: '#1E90FF',
            backgroundColor: '#D9D9D9',
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
        <p
            style={{
              textAlign: 'center',
              marginBlock: 5,
              color: "#FFFFFF",
              fontFamily: "Prompt",
              fontSize: 14,
              fontWeight: 400,
            }}
          >
            ลืมรหัสผ่าน
          </p>
          <p
            style={{
              textAlign: 'center',
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
      </form>
    </div>
  );
};

export default Login;
