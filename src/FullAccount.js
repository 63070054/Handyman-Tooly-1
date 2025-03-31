import BackButtonPage from "./BackButtonPage";
import { Link } from "react-router-dom";

const FullAccount = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BackButtonPage />
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
      <p
        style={{
          color: "#FFFFFF",
          fontFamily: "Prompt",
          fontSize: 32,
          fontWeight: 700,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          margin: 8,
        }}
      >
        นางสมร
      </p>
      <div
        style={{
          backgroundColor: "#D9D9D9",
          display: "flex",
          flexDirection: "column",
          borderRadius: 10,
          height: "100%",
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        <Link
          to="/account"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "black",
              fontFamily: "Prompt",
              fontSize: 16,
              fontWeight: 600,
              marginTop: 32,
            }}
          >
            ข้อมูลส่วนตัว
          </p>
          <p>></p>
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: 25,
            paddingRight: 25,
            height: 2,
            backgroundColor: "#A0ADBA",
          }}
        ></div>
        <Link
          to="/mypost"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "black",
              fontFamily: "Prompt",
              fontSize: 16,
              fontWeight: 600,
              marginTop: 32,
            }}
          >
            "โพสต์ของฉัน
          </p>
          <p>></p>
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: 25,
            paddingRight: 25,
            height: 2,
            backgroundColor: "#A0ADBA",
          }}
        ></div>
        <Link
          to="/myreview"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "black",
              fontFamily: "Prompt",
              fontSize: 16,
              fontWeight: 600,
              marginTop: 32,
            }}
          >
            รีวิวการทำงาน
          </p>
          <p>></p>
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: 25,
            paddingRight: 25,
            height: 2,
            backgroundColor: "#A0ADBA",
          }}
        ></div>
        <Link
          to="/"
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            color: "black",
            fontFamily: "Prompt",
            fontSize: 16,
            fontWeight: 600,
            marginBottom: 16,
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          ออกจากระบบ
        </Link>
      </div>
    </div>
  );
};

export default FullAccount;
