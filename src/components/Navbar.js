import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for React Router
// import "../styles/navbar.css"; 
function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="logo">
          <span className="ai-name">SewSmart</span>
        </div>
        <div className="search-bar">
          <input type="text" id="locationInput" placeholder="Enter your location" />
          <button onClick={() => alert("Search functionality to be implemented")}>
            Search
          </button>
        </div>
      </div>

      {/* Profile Icon (Hidden by Default) */}
      <div id="profileIconContainer" style={{ display: "none" }}>
        <img id="profileIcon" src="/images/profile-image.jpg" alt="Profile" style={{ width: "40px", cursor: "pointer" }} />
        <div id="profileMenu" className="dropdown-menu" style={{ display: "none" }}>
          <Link to="/profile">Your Profile</Link> {/* ✅ Converted to React Router */}
          <Link to="/logout">Logout</Link>         {/* ✅ Converted to React Router */}
        </div>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/login">Login</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;

