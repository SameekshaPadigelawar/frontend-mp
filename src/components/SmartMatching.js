import React from "react";
import "../styles/styles.css";
// import "../styles/smartmatching.css"; 
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

export default SmartMatching;
