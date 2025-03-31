import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts } from "./services/postService"; // Import API call for fetching posts
import {
  getProvinces,
  getAmphures,
  getTambons,
} from "./services/locationService"; // Import location API calls
import "./App.css";

const MyPost = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [jobPosts, setJobPosts] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [amphures, setAmphures] = useState([]);
  const [tambons, setTambons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedAmphure, setSelectedAmphure] = useState(null);
  const [selectedTambon, setSelectedTambon] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      // Create an object to hold query parameters
      const params = {};

      // Add parameters only if they are not null
      if (selectedProvince) params.provinceId = selectedProvince;
      if (selectedAmphure) params.amphureId = selectedAmphure;
      if (selectedTambon) params.tambonId = selectedTambon;

      // Make the API call with the params
      const response = await getPosts(params);

      console.log("response", response);
      setJobPosts(response.data);
    } catch (err) {
      setError("Failed to fetch posts.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch provinces
  useEffect(() => {
    const fetchProvinces = async () => {
      setLoading(true);
      try {
        const response = await getProvinces();
        setProvinces(response.data);
      } catch (err) {
        setError("Failed to fetch provinces.");
      } finally {
        setLoading(false);
      }
    };
    fetchProvinces();
    fetchPosts();
  }, []);

  // Fetch amphures when a province is selected
  useEffect(() => {
    if (selectedProvince) {
      const fetchAmphures = async () => {
        setLoading(true);
        try {
          const response = await getAmphures(selectedProvince);
          setAmphures(response.data);
        } catch (err) {
          setError("Failed to fetch amphures.");
        } finally {
          setLoading(false);
        }
      };
      fetchAmphures();
    }
  }, [selectedProvince]);

  // Fetch tambons when an amphure is selected
  useEffect(() => {
    if (selectedAmphure) {
      const fetchTambons = async () => {
        setLoading(true);
        try {
          const response = await getTambons(selectedProvince, selectedAmphure);
          setTambons(response.data);
        } catch (err) {
          setError("Failed to fetch tambons.");
        } finally {
          setLoading(false);
        }
      };
      fetchTambons();
    }
  }, [selectedAmphure]);

  // Fetch posts based on selected location filters
  useEffect(() => {
    if (selectedProvince && selectedAmphure && selectedTambon) {
      fetchPosts();
    }
  }, [selectedProvince, selectedAmphure, selectedTambon]);

  const handlePostClick = (postId) => {
    navigate(`/posts/${postId}`);
  };

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button
          className="circle-image"
          onClick={() => navigate("/FullAccount")}
        >
          <img src="profileImage" alt="Profile" />
        </button>

        {/* Filters for Location */}
        <input
          type="text"
          placeholder="Search"
          style={{
            color: "black",
            backgroundColor: "#FFFFFF",
            marginLeft: 10,
            fontSize: 16,
            width: 300,
            paddingBlock: 16,
            border: "2px solid #D9D9D9",
            borderRadius: 10,
          }}
        />
      </div>
      <div clasName="province-filters">
        <select
          onChange={(e) => setSelectedProvince(e.target.value)}
          value={selectedProvince}
          style={{
            color: "black",
            backgroundColor: "#FFFFFF",
            marginLeft: 5,
            marginRight: 5,
            marginTop: 16,
            marginBottom: 16,
            fontSize: 16,
            width: 120,
            paddingBlock: 6,
            border: "2px solid #D9D9D9",
            borderRadius: 5,
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
          style={{
            color: "black",
            backgroundColor: "#FFFFFF",
            marginLeft: 5,
            marginRight: 5,
            marginTop: 16,
            marginBottom: 16,
            fontSize: 16,
            width: 120,
            paddingBlock: 6,
            border: "2px solid #D9D9D9",
            borderRadius: 5,
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
          style={{
            color: "black",
            backgroundColor: "#FFFFFF",
            marginLeft: 5,
            marginRight: 5,
            marginTop: 16,
            marginBottom: 16,
            fontSize: 16,
            width: 120,
            paddingBlock: 6,
            border: "2px solid #D9D9D9",
            borderRadius: 5,
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

      <div className="screensize_white">
        <ul className="menu">
          <li>
            <button
              style={{
                width: "45.54px",
                height: "45.54px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                border: "2px solid gold",
              }}
            >
              <img
                src="menu.jpg"
                style={{
                  width: "100%",
                  height: "65%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                alt="menu"
              />
            </button>
            <ul className="dropdown">
              <li>
                <a
                  href="#"
                  style={{
                    width: "45.54px",
                    height: "45.54px",
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                    border: "2px solid gold",
                  }}
                >
                  <img
                    src="chat.png"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                    alt="chat"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    width: "45.54px",
                    height: "45.54px",
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                    border: "2px solid gold",
                  }}
                >
                  <img
                    src="add.png"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                    alt="add"
                  />
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="post-container">
          {jobPosts.map((post) => (
            <button
              key={post._id}
              onClick={() => handlePostClick(post._id)}
              className="post_box"
            >
              <div className="pic_job">
                <img src={post.img} alt="Job" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <div className="title-price-address-container">
                  <div className="title">
                    <p>{post.title}</p>
                  </div>
                  <div className="box_price">
                    <a>
                      {post.minimumPrice} - {post.maximumPrice} ฿
                    </a>{" "}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div className="circle-image-technician">
                    <img src={post.userId.imageUrl} alt={post.userId.name} />
                  </div>
                  <b>{post.userId.name}</b>
                  <div className="star-rating">
                    {[...Array(5)].map((_, index) => {
                      return (
                        <span
                          key={index}
                          className={
                            index < post.averageReview
                              ? "filled-star"
                              : "empty-star"
                          }
                        >
                          ★
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="box_address_container">
                <div className="box_address">
                  <a>{post.province.nameTH}</a>
                </div>
                <div className="box_address">
                  <a>{post.amphure.nameTH}</a>
                </div>
                <div className="box_address">
                  <a>{post.tambon.nameTH}</a>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyPost;
