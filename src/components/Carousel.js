import React, { useEffect, useState } from "react";
const images = [
  { src: "/images/tailor-hp3.jpg", text: "Find Expert Tailors Near You, Hassle-Free!" },
  { src: "/images/tailor-hp.png", text: "Get stitching estimates and receive outfits on time!" },
  { src: "/images/tailors-hp3.jpg", text: "Custom Men's Tailoring Available!" }
];

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
            <h2>{image.text}</h2>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
}

export default Carousel;


