import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackButtonPage from "./BackButtonPage";
import {
  getProvinces,
  getAmphures,
  getTambons,
} from "./services/locationService";

const CreatePost = () => {
  const [job, setJob] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [amphures, setAmphures] = useState([]);
  const [tambons, setTambons] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedAmphure, setSelectedAmphure] = useState("");
  const [selectedTambon, setSelectedTambon] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        setLoading(true);
        const response = await getProvinces();
        setProvinces(response.data);
      } catch (err) {
        setError("Failed to fetch provinces.");
      } finally {
        setLoading(false);
      }
    };
    fetchProvinces();
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      const fetchAmphures = async () => {
        try {
          setLoading(true);
          const response = await getAmphures(selectedProvince);
          setAmphures(response.data);
        } catch (err) {
          setError("Failed to fetch amphures.");
        } finally {
          setLoading(false);
        }
      };
      fetchAmphures();
    } else {
      setAmphures([]);
      setSelectedAmphure("");
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedAmphure) {
      const fetchTambons = async () => {
        try {
          setLoading(true);
          const response = await getTambons(selectedAmphure);
          setTambons(response.data);
        } catch (err) {
          setError("Failed to fetch tambons.");
        } finally {
          setLoading(false);
        }
      };
      fetchTambons();
    } else {
      setTambons([]);
      setSelectedTambon("");
    }
  }, [selectedAmphure]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      job,
      price,
      description,
      provinceId: selectedProvince,
      amphureId: selectedAmphure,
      tambonId: selectedTambon,
    };
    console.log("โพสต์ข้อมูล:", postData);
    navigate("/posts");
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

      <form onSubmit={handleSubmit}>
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
            className="label"
          >
            ชื่องาน
          </p>
          <input
            type="text"
            placeholder="Job Name"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            className="input-field"
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
            className="label"
          >
            ราคา
          </p>
          <input
            type="number"
            placeholder="฿xxx"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input-field"
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
            className="label"
          >
            รายละเอียดงาน
          </p>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-field"
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

        <div className="province-filters" style={{ display: "flex", flexDirection: "column",}}>
          <select
            onChange={(e) => setSelectedProvince(e.target.value)}
            value={selectedProvince}
            className="select-field"
            style={{
                color: "black",
                backgroundColor: "#D9D9D9",
                marginLeft: 48,
                marginTop: 16,
                marginBottom:16,
                fontSize: 16,
                width: 320,
                paddingBlock: 16,
                border: "2px solid #D9D9D9",
                borderRadius: 10,
              }}
          >
            <option value="">เลือกจังหวัด</option>
            {provinces.map((province) => (
              <option key={province.provinceId} value={province.provinceId}>
                {province.nameTH}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setSelectedAmphure(e.target.value)}
            value={selectedAmphure}
            disabled={!selectedProvince}
            className="select-field"
            style={{
                color: "black",
                backgroundColor: "#D9D9D9",
                marginLeft: 48,
                marginTop: 16,
                marginBottom:16,
                fontSize: 16,
                width: 320,
                paddingBlock: 16,
                border: "2px solid #D9D9D9",
                borderRadius: 10,
              }}
          >
            <option value="">เลือกอำเภอ</option>
            {amphures.map((amphure) => (
              <option key={amphure.amphureId} value={amphure.amphureId}>
                {amphure.nameTH}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setSelectedTambon(e.target.value)}
            value={selectedTambon}
            disabled={!selectedAmphure}
            className="select-field"
            style={{
              color: "black",
              backgroundColor: "#D9D9D9",
              marginLeft: 48,
              marginTop: 16,
              marginBottom:16,
              fontSize: 16,
              width: 320,
              paddingBlock: 16,
              border: "2px solid #D9D9D9",
              borderRadius: 10,
            }}
          >
            <option value="">เลือกตำบล</option>
            {tambons.map((tambon) => (
              <option key={tambon.tambonId} value={tambon.tambonId}>
                {tambon.nameTH}
              </option>
            ))}
          </select>
        </div>
        
        <button
          type="submit"
          className="submit-button"
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
            marginBottom: 50,
          }}
        >
          โพสต์
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
