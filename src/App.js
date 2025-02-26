import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginorRegister from "./LoginorRegister"; // This will be the default screen with buttons for Login/Register
import Login from "./Login";  // Your Login component
import Register from "./Register";  // Your Register component
import Account from "./Account";
import PDPAAccount from "./PDPAAccount";

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
          justifyContent: "center",
        }}
      >
      <PDPAAccount />
        {/* <Routes>
          <Route path="/" element={<LoginorRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
