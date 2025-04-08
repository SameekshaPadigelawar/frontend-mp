import React from "react";

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

export default About;
