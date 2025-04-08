import React from "react"; 
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

export default HowItWorks;
