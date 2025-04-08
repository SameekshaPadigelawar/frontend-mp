// import React, { useEffect, useState } from "react";
import "../styles/searchresults.css"; // Keep your CSS separate

// const SearchResults = () => {
//   const [tailors, setTailors] = useState([]);
//   const [location, setLocation] = useState("");

//   useEffect(() => 
//     // Get search location from localStorage
//     const searchLocation = localStorage.getItem("searchLocation") || "";
//     setLocation(searchLocation);

//     // Fetch data from API
//     fetch("https://67c7277bc19eb8753e78d5e9.mockapi.io/tailors")
//       .then((response) => response.json())
//       .then((data) => {
//         if (!Array.isArray(data)) {
//           console.error("Unexpected API response:", data);
//           return;
//         }
//         const filteredTailors = data.filter((tailor) =>
//           tailor.location.toLowerCase().includes(searchLocation.toLowerCase())
//         );
//         setTailors(filteredTailors);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   // Handle request button click
//   const sendRequest = (tailorEmail) => {
//     alert(`Request sent to ${tailorEmail}!`);
//     window.location.href = "/customer-request"; // Redirect to request page
//   };

//   return (
//     <div className="main-container">
//       {/* Left Side: Video Section */}
//       <div className="video-container">
//         <video autoPlay loop muted>
//           <source src="tailor video.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       {/* Right Side: Search Results */}
//       <div className="results-container">
//         <h2>Available Tailors in {location}</h2>
//         <div className="search-results">
//           {tailors.length > 0 ? (
//             tailors.map((tailor) => (
//               <div key={tailor.id} className="tailor-card">
//                 <h3>{tailor.name}</h3>
//                 <p><strong>Location:</strong> {tailor.location}</p>
//                 <p><strong>Skills:</strong> {tailor.skills}</p>
//                 <p><strong>Availability:</strong> {tailor.availability}</p>
//                 <p><strong>Contact:</strong> {tailor.contact}</p>
//                 <button
//                   className="request-btn"
//                   onClick={() => sendRequest(tailor.email)}
//                 >
//                   Request
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p>No tailors found in this location.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchResults;




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
const SearchResults = () => {
  const [tailors, setTailors] = useState([]);
  const [location, setLocation] = useState("");
  const navigate = useNavigate(); // Hook for navigation
  useEffect(() => {
    // Get search results from localStorage
    const storedTailors = JSON.parse(localStorage.getItem("searchResults")) || [];
    const storedLocation = localStorage.getItem("searchLocation") || "";

    setTailors(storedTailors);
    setLocation(storedLocation);
  }, []);

  const handleRequest = (tailor) => {
    // Store requested tailor details in localStorage (or send to backend)
    localStorage.setItem("requestedTailor", JSON.stringify(tailor));

    // Navigate to customer request page
    navigate("/customerrequest");
  };

  return (
    <div className="search-results-container">
       <button className="back-button" onClick={() => navigate("/")}>
      ← Back to Home
    </button>
    <div className="main-container">
    
        {/* Left Side: Video Section */}
       <div className="video-container">
         <video autoPlay loop muted>
           <source src="/images/tailor-video.mp4" type="video/mp4" />
           Your browser does not support the video tag.
         </video>
       </div>

      {/* Right Side: Search Results */}
      <div className="results-container"> 
      <h2>Available Tailors in {location}</h2>
      <div className="search-results">
        {tailors.length > 0 ? (
          tailors.map((tailor) => (
            <div key={tailor.id} className="tailor-card">
              <h3>{tailor.fullName}</h3>
              <p><strong>Location:</strong> {tailor.locality}</p>
              <p><strong>Skills:</strong> {tailor.skills}</p>
              <p><strong>Availability:</strong> {tailor.availability}</p>
              <p><strong>Contact:</strong> {tailor.phone}</p>
              <button
                className="request-btn"
                // onClick={() => alert(`Request sent to ${tailor.email}`)}
                onClick={() => handleRequest(tailor)}
              >
                Request
              </button>
            </div>
          ))
        ) : (
          <p>No tailors found in this location.</p>
        )}
      </div>
      </div>
    </div>
    </div>
  );
};

export default SearchResults;
