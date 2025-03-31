import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginorRegister from "./LoginorRegister"; // This will be the default screen with buttons for Login/Register
import Login from "./Login"; // Your Login component
import Register from "./Register"; // Your Register component
import Post from "./Post";
import PostDetail from "./PostDetail";
import CreatePost from "./CreatePost";
import FullAccount from "./FullAccount";
import Account from "./Account";
import { PiMagnifyingGlassPlusDuotone } from "react-icons/pi";
import MyReview from "./MyReview";
import MyPost from "./MyPost";


function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          background: "#1E90FF",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          justifyContent: "center",
          padding: 16,
        }}
      >
        <Routes>
          <Route path="/" element={<LoginorRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<Post/>} />
          <Route path="/posts/:postId" element={<PostDetail />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/account" element={<Account />} />
          <Route path="/fullaccount" element={<FullAccount />} />
          <Route path="/myreview" element={<MyReview />} />
          <Route path="/mypost" element={<MyPost />} />
          {" "}\
          {/* PostDetail route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
