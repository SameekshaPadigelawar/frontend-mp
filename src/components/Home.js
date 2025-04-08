import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const images = [
  { src: "/images/tailor-hp3.jpg", text: "Find Expert Tailors Near You, Hassle-Free!" },
  { src: "/images/tailor-hp.png", text: "Get stitching estimates and receive outfits on time!" },
  { src: "/images/tailors-hp3.jpg", text: "Custom Men's Tailoring Available!" }
];

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
        <a href="#header">About Us</a> 
        <Link to="/services">Services</Link>
        <Link to="/login">Login</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}

function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {images.map((image, i) => (
        <div key={i} className={`carousel-item ${i === index ? "active" : ""}`}>
          <img src={image.src} alt={`Slide ${i}`} className="carousel-image" />
          <div className="overlay">
            {/* <h2>{image.text}</h2> */}
            <h2>Find Expert Tailors Near You, Hassle-Free!</h2>
              <p>Connect with skilled tailors, get stitching estimates, and receive your outfits on time.</p>
              <button className="btn">Find a Tailor</button>
              <button className="btn outline">Join as a Tailor</button>
          </div>
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
}

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        {[
          { icon: "📝", title: "Submit Request", text: "Customers submit their stitching request." },
          { icon: "💰", title: "Get Estimates", text: "Tailors provide cost and time estimates." },
          { icon: "📍", title: "Choose a Tailor", text: "Pick a tailor based on location & ratings." },
          { icon: "✅", title: "Receive Order", text: "Outfit is stitched and delivered on time." }
        ].map((step, i) => (
          <div className="step" key={i}>
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SmartMatching() {
  return (
    <section className="smart-matching">
      <h2>Smart Matching System</h2>
      <div className="matching-container">
        <div className="matching-step">
          <div className="icon">📍</div>
          <h3>Location-Based Matching</h3>
          <p>We find tailors near you to ensure fast service.</p>
        </div>
        <div className="matching-step">
          <div className="icon">⏳</div>
          <h3>Deadline Check</h3>
          <p>System alerts if the tailor is too far to meet your deadline.</p>
        </div>
        <div className="matching-step">
          <div className="icon">⭐</div>
          <h3>Ratings & Reviews</h3>
          <p>Choose tailors based on customer feedback.</p>
        </div>
        <div className="matching-step">
          <div className="icon">✅</div>
          <h3>Best Match Suggestion</h3>
          <p>We suggest the best tailor for your needs.</p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about">
      <header id="header">
        <h1>About Us</h1>
        <p>Discover our mission and how we connect you with expert tailors effortlessly.</p>
      </header>
      <div className="content">
        <h2>Who We Are</h2>
        <p>We are a platform dedicated to connecting skilled tailors with customers who need high-quality stitching and alterations. Our goal is to make custom tailoring simple, accessible, and hassle-free.</p>
      </div>
      <div className="content">
        <h2>Our Mission</h2>
        <p>Our mission is to bridge the gap between professional tailors and customers by providing a seamless experience for both.</p>
      </div>
      <div className="content">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Expert tailors at your service</li>
          <li>Easy and quick bookings</li>
          <li>Affordable and transparent pricing</li>
          <li>Timely delivery</li>
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 SewSmart | All rights reserved</p>
      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms & Conditions</a>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <HowItWorks />
      <SmartMatching />
      <About />
      <Footer />
    </div>
  );
}

export default Home;































 
