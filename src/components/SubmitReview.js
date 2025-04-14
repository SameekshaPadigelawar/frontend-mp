// import React, { useState } from "react";
// import "../styles/submitreview.css";

// const SubmitReview = ({ tailorId, customerId }) => {
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/api/reviews", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ tailor: tailorId, customer: customerId, rating, comment }),
//       });

//       if (response.ok) {
//         alert("Review submitted successfully!");
//         setRating(5);
//         setComment("");
//       } else {
//         alert("Error submitting review.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Rating:
//           <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
//             {[1, 2, 3, 4, 5].map((num) => (
//               <option key={num} value={num}>
//                 {num}
//               </option>
//             ))}
//           </select>
//         </label>
//         <br />
//         <label>
//           Comment:
//           <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
//         </label>
//         <br />
//         <button type="submit">Submit Review</button>
//       </form>
//     </div>
//   );
// };

// export default SubmitReview;








// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // ✅ Add this
// import "../styles/submitreview.css";

// const SubmitReview = ({ tailorId, customerId }) => {
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate(); // ✅ Initialize navigate

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch("http://localhost:5000/api/reviews", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ tailor: tailorId, customer: customerId, rating, comment }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Review submitted successfully!");
//         setRating(5);
//         setComment("");

//         // ✅ Navigate to Services page after submission
//         navigate("/services"); // Change to your actual services route
//       } else {
//         // alert("Error submitting review.");
//          console.error("Server error:", data);
//         alert("Error: " + (data.message || "Failed to submit review."));
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="submit-review-container">
//       <h2>Submit Your Review</h2>

//       <form onSubmit={handleSubmit}>
//         <div className="review-inputs">
//           <div className="rating-box">
//             <label htmlFor="rating">Rating:</label>
//             <select
//               id="rating"
//               value={rating}
//               onChange={(e) => setRating(Number(e.target.value))}
//               className="rating-dropdown"
//             >
//               {[1, 2, 3, 4, 5].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="comment-box">
//             <label htmlFor="comment">Comment:</label>
//             <textarea
//               id="comment"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//               placeholder="Write your review here..."
//               className="comment-textarea"
//             />
//           </div>
//         </div>

//         <button type="submit" className="submit-button" disabled={isSubmitting}>
//           {isSubmitting ? "Submitting..." : "Submit Review"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SubmitReview;














// import React, { useState, useEffect } from "react";
// import { useNavigate , useParams} from "react-router-dom";
// import "../styles/submitreview.css";

// // const SubmitReview = ({ tailorId, customerId }) => {
// //   const [rating, setRating] = useState(5);
// //   const [comment, setComment] = useState("");
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const navigate = useNavigate();


// const SubmitReview = () => {
//   const { tailorId } = useParams(); // ✅ Fix: Get tailorId from URL
//   // const customerId = "67f0d6501b41bf63a495fc32"; // 🧪 Replace with actual user ID in future
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();

  

//   // ✅ Log the IDs for debugging
//   useEffect(() => {
//     console.log("Tailor ID:", tailorId);
//     console.log("Customer ID:", customerId);
//   }, [tailorId, customerId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch("http://localhost:5000/api/reviews", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           tailor: tailorId,
//           customer: customerId,
//           rating,
//           comment,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Review submitted successfully!");
//         setRating(5);
//         setComment("");
//         navigate("/services"); // ✅ Redirect to services page
//       } else {
//         console.error("Server error:", data);
//         alert("Error submitting review. Details: " + JSON.stringify(data));
//       }
//     } catch (error) {
//       console.error("Network or fetch error:", error);
//       alert("Network error: " + error.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="submit-review-container">
//       <h2>Submit Your Review</h2>

//       <form onSubmit={handleSubmit}>
//         <div className="review-inputs">
//           <div className="rating-box">
//             <label htmlFor="rating">Rating:</label>
//             <select
//               id="rating"
//               value={rating}
//               onChange={(e) => setRating(Number(e.target.value))}
//               className="rating-dropdown"
//             >
//               {[1, 2, 3, 4, 5].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="comment-box">
//             <label htmlFor="comment">Comment:</label>
//             <textarea
//               id="comment"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//               placeholder="Write your review here..."
//               className="comment-textarea"
//             />
//           </div>
//         </div>

//         <button type="submit" className="submit-button" disabled={isSubmitting}>
//           {isSubmitting ? "Submitting..." : "Submit Review"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SubmitReview;
//this code is also correct but we have to give customer id manually






import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/submitreview.css";

const SubmitReview = () => {
  const { tailorId } = useParams();
  const [customerId, setCustomerId] = useState(null);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();




  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && loggedInUser._id) {
      setCustomerId(loggedInUser._id);
      console.log("Logged-in customer ID:", loggedInUser._id);
    } else {
      console.warn("No logged-in user found.");
    }
  }, []);
  



  // // 🔍 Fetch latest customer
  // useEffect(() => {
  //   fetch("http://localhost:5000/api/auth/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // Filter users to get only customers
  //       const customers = data.filter(user => user.role === "customer");
  
  //       // Get the last customer in the list
  //       if (customers.length > 0) {
  //         const lastCustomer = customers[customers.length - 1];
  //         setCustomerId(lastCustomer._id);
  //         console.log("Last customer ID:", lastCustomer._id);
  //       } else {
  //         console.warn("No customers found.");
  //       }
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching users:", err);
  //     });
  // }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!customerId) {
      alert("Customer ID not loaded yet!");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tailor: tailorId,
          customer: customerId,
          rating,
          comment,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Review submitted successfully!");
        setRating(5);
        setComment("");
        navigate("/services");
      } else {
        alert("Error: " + JSON.stringify(data));
      }
    } catch (error) {
      alert("Network error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="submit-review-container">
        <button className="back-button" onClick={() => navigate("/services")}>
      ← Back 
    </button>
      <h2>Submit Your Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="review-inputs">
          <div className="rating-box">
            <label htmlFor="rating">Rating:</label>
            <select
              id="rating"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="rating-dropdown"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="comment-box">
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your review here..."
              className="comment-textarea"
            />
          </div>
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
};

export default SubmitReview;


//this above code takes lastcustomer dynamically





// import React, { useState } from "react";
// import "../styles/submitreview.css"; // Import your updated CSS
// const SubmitReview = ({ tailorId, customerId }) => {
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch("http://localhost:5000/api/reviews", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ tailor: tailorId, customer: customerId, rating, comment }),
//       });

//       if (response.ok) {
//         alert("Review submitted successfully!");
//         setRating(5);
//         setComment("");
//       } else {
//         alert("Error submitting review.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="submit-review-container">
//       <h2>Submit Your Review</h2>

//       <form onSubmit={handleSubmit}>
//         <div className="review-inputs">
//           <div className="rating-box">
//             <label htmlFor="rating">Rating:</label>
//             <select
//               id="rating"
//               value={rating}
//               onChange={(e) => setRating(Number(e.target.value))}
//               className="rating-dropdown"
//             >
//               {[1, 2, 3, 4, 5].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="comment-box">
//             <label htmlFor="comment">Comment:</label>
//             <textarea
//               id="comment"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//               placeholder="Write your review here..."
//               className="comment-textarea"
//             />
//           </div>
//         </div>

//         <button type="submit" className="submit-button" disabled={isSubmitting}>
//           {isSubmitting ? "Submitting..." : "Submit Review"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SubmitReview;

