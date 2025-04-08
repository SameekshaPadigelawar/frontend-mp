// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/tailorreview.css"; // Import CSS

// const TailorReviews = ({ tailorId }) => {
//   const [reviews, setReviews] = useState([]);
//   const [showReviews, setShowReviews] = useState(false); // Track visibility

//   useEffect(() => {
//     if (showReviews) {
//       axios
//         .get(`http://localhost:5000/api/reviews/${tailorId}`)
//         .then((response) => {
//           setReviews(response.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching reviews:", error);
//         });
//     }
//   }, [showReviews, tailorId]); // Fetch only when `showReviews` is true

//   return (
//     <div className="tailor-reviews-container">
//       <h2>Tailor Reviews</h2>
//       <button className="toggle-button" onClick={() => setShowReviews(!showReviews)}>
//         {showReviews ? "Hide Reviews" : "Show Reviews"}
//       </button>

//       {showReviews && (
//         <ul className="reviews-list">
//           {reviews.length > 0 ? (
//             reviews.map((review, index) => (
//               <li key={index} className="review-item">
//                 <strong>Rating:</strong> {review.rating} ⭐
//                 <p><strong>Comment:</strong> {review.comment}</p>
//                 <p><strong>By:</strong> {review.customer?.fullName || "Anonymous"}</p>
//               </li>
//             ))
//           ) : (
//             <p className="no-reviews">No reviews available.</p>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TailorReviews;





import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/tailorreview.css";

const TailorReviews = () => {
  const navigate = useNavigate();
  const { tailorId } = useParams(); // ✅ get tailorId from URL
  const [reviews, setReviews] = useState([]);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    if (showReviews) {
      axios
        .get(`http://localhost:5000/api/reviews/${tailorId}`)
        .then((response) => {
          setReviews(response.data);
        })
        .catch((error) => {
          console.error("Error fetching reviews:", error);
        });
    }
  }, [showReviews, tailorId]);

  return (
    <div className="tailor-reviews-container">
       <button className="back-button" onClick={() => navigate("/services")}>
      ← Back 
    </button>
      <h2>Tailor Reviews</h2>
      <button className="toggle-button" onClick={() => setShowReviews(!showReviews)}>
        {showReviews ? "Hide Reviews" : "Show Reviews"}
      </button>

      {showReviews && (
        <ul className="reviews-list">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <li key={index} className="review-item">
                <strong>Rating:</strong> {review.rating} ⭐
                <p><strong>Comment:</strong> {review.comment}</p>
                <p><strong>By:</strong> {review.customer?.fullName || "Anonymous"}</p>
              </li>
            ))
          ) : (
            <p className="no-reviews">No reviews available.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default TailorReviews;
