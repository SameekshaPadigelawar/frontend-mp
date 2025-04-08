import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/contact.css"; // Ensure CSS is correctly imported

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (name && email && message) {
      setResponseMessage("Thank you for reaching out! We'll get back to you soon.");
      setIsError(false);
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } else {
      setResponseMessage("Please fill in all fields.");
      setIsError(true);
    }
  };

  return (
    <div className="contact-container">
      <button className="back-button"  onClick={() => navigate("/")}>
      ← Back to Home
    </button>
      <div className="container">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Send us a message.</p>

        <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your message..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>

        {responseMessage && (
          <div id="response-message" className={`response-message ${isError ? "error" : "success"}`}>
            {responseMessage}
          </div>
        )}

 
      </div>
    </div>
  );
};

export default Contact;
