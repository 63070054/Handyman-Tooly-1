import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";

const BackButtonPage = () => {

  return (
    <div
      style={{
        height: 16,
        background: "#1E90FF",
        display: "flex",
        alignItems: "center",
        paddingLeft: 10, // ระยะห่างไอคอนจากขอบ
      }}
    >
      <AiOutlineLeft size={16} color="white" />
    </div>
  );
};

export default BackButtonPage;
