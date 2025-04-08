// import React, { useEffect, useState } from "react";
// import "../styles/services.css";
// // import tailorImage from "../images/tailor-profile.jpg"; 

// function Services() {
//   const [tailors, setTailors] = useState([]);

//   useEffect(() => {
//     // Replace with your actual API URL
//     fetch("http://localhost:5000/api/auth/users")
//       .then((response) => response.json())
//       .then((data) => {
//         // Filter only tailors
//         const tailorUsers = data.filter(user => user.role === "tailor");
//         setTailors(tailorUsers);
//       })
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   return (
//     <div className="service-container"> 
//     <div className="services">
//       <h2>Available Tailors</h2>
//       <div className="tailor-list">
//         {tailors.length > 0 ? (
//           tailors.map((tailor) => (
//             <div key={tailor.id} className="tailor-card">
//               {/* <img src={tailor.profilePicture || "https://via.placeholder.com/100"} alt={tailor.name} /> */}
//               <img src="/images/tailor-profile.jpg" alt="Tailor Image"></img>
//               {/* <img src={tailorImage} alt="Tailor Image" /> */}
//               <h3>{tailor.fullName}</h3>
//               <p><strong>Email:</strong> {tailor.email}</p>
//               <p><strong>Contact:</strong> {tailor.phone}</p>
//               <p><strong>Locality:</strong> {tailor.locality}</p>
//               <p><strong>Skills:</strong> {tailor.skills}</p>
//               <p><strong>Availability:</strong> {tailor.availability ? "Available" : "Not Available"}</p>
//             </div>
//           ))
//         ) : (
//           <p>Loading tailors...</p>
//         )}
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Services;








import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/services.css";

function Services() {
  const [tailors, setTailors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTailors, setFilteredTailors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/users")
      .then((response) => response.json())
      .then((data) => {
        const tailorUsers = data.filter(user => user.role === "tailor");
        setTailors(tailorUsers);
        setFilteredTailors(tailorUsers); // show all initially
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleSearch = () => {
    const results = tailors.filter((tailor) =>
      tailor.locality.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTailors(results);
  };

  const handleShowReviewsClick = (tailorId) => {
    navigate(`/tailor-reviews/${tailorId}`);
  };

  const handleRateClick = (tailorId) => {
    navigate(`/submit-review/${tailorId}`);
  };

  const handleRequestClick = (tailorId) => {
    navigate(`/customer-request/${tailorId}`);
  };

  return (
    <div className="service-container">
      <div className="services">
        <h2>Available Tailors</h2>
        <div className="header-with-back">
    <button className="back-button" onClick={() => navigate("/")}>
      ← Back to Home
    </button>
    </div>

        {/* 🔍 Search Bar with Button */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter your location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>

        <div className="tailor-list">
          {filteredTailors.length > 0 ? (
            filteredTailors.map((tailor) => (
              <div key={tailor._id} className="tailor-card">
                <img src="/images/tailor-profile.jpg" alt="Tailor" />
                <h3>{tailor.fullName}</h3>
                <p><strong>Email:</strong> {tailor.email}</p>
                <p><strong>Contact:</strong> {tailor.phone}</p>
                <p><strong>Locality:</strong> {tailor.locality}</p>
                <p><strong>Skills:</strong> {tailor.skills}</p>
                <p><strong>Availability:</strong> {tailor.availability ? "Available" : "Not Available"}</p>
                <button onClick={() => handleShowReviewsClick(tailor._id)} className="show-reviews-button">
                  Show Reviews
                </button>
                <button onClick={() => handleRateClick(tailor._id)} className="rate-button">
                  Rate Tailor
                </button>
                <button onClick={() => handleRequestClick(tailor._id)} className="request-button">
                  Request Tailor
                </button>
              </div>
            ))
          ) : (
            <p>No tailors found for this location.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;
//correct code with search bar











// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/services.css";

// function Services() {
//   const [tailors, setTailors] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch list of tailors from your backend
//     fetch("http://localhost:5000/api/auth/users")
//       .then((response) => response.json())
//       .then((data) => {
//         const tailorUsers = data.filter(user => user.role === "tailor");
//         setTailors(tailorUsers);
//       })
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   const handleShowReviewsClick = (tailorId) => {
//     navigate(`/tailor-reviews/${tailorId}`); // Redirect to the TailorReviews page to show reviews
//   };

//   const handleRateClick = (tailorId) => {
//     navigate(`/submit-review/${tailorId}`); // Redirect to the SubmitReview page to submit a new review
//   };

//   const handleRequestClick = (tailorId) => {
//     navigate(`/customer-request/${tailorId}`); // Redirect to the CustomerRequest page for a specific tailor
//   };

//   return (
//     <div className="service-container">
//       <div className="services">
//         <h2>Available Tailors</h2>
//         <div className="tailor-list">
//           {tailors.length > 0 ? (
//             tailors.map((tailor) => (
//               <div key={tailor._id} className="tailor-card">
//                <img src="/images/tailor-profile.jpg" alt="" />
//                 <h3>{tailor.fullName}</h3>
//                 <p><strong>Email:</strong> {tailor.email}</p>
//                 <p><strong>Contact:</strong> {tailor.phone}</p>
//                 <p><strong>Locality:</strong> {tailor.locality}</p>
//                 <p><strong>Skills:</strong> {tailor.skills}</p>
//                 <p><strong>Availability:</strong> {tailor.availability ? "Available" : "Not Available"}</p>
//                 {/* Buttons for Show Reviews and Rate */}
//                 <button onClick={() => handleShowReviewsClick(tailor._id)} className="show-reviews-button">
//                   Show Reviews
//                 </button>
//                 <button onClick={() => handleRateClick(tailor._id)} className="rate-button">
//                   Rate Tailor
//                 </button>
//                 <button onClick={() => handleRequestClick(tailor._id)} className="request-button">
//                   Request Tailor
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p>Loading tailors...</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Services;

// correct code with out search bar