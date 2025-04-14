// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/tailordashboard.css"; // Keep your CSS in a separate file

// const TailorDashboard = () => {
//   const [tailor, setTailor] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch users and logged-in user from local storage
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const loggedInEmail = localStorage.getItem("loggedInUser");

//     if (!loggedInEmail) {
//       navigate("/login"); // Redirect if not logged in
//       return;
//     }

//     const foundTailor = users.find((user) => user.email === loggedInEmail);

//     if (!foundTailor || foundTailor.role !== "tailor") {
//       alert("Access denied! Only tailors can access this page.");
//       navigate("/login");
//       return;
//     }

//     setTailor(foundTailor);
//   }, [navigate]);

//   // Handle Back
//   const handleBack = () => {
//     navigate("/"); // Redirect to home page
//   };


//   // Handle logout
//   const handleLogout1 = () => {
//     localStorage.removeItem("loggedInUser"); // Remove session
//     navigate("/"); // Redirect to home page
//   };

//   return (
//     <div className="dashboard-container">
//       {tailor ? (
//         <>
//           <h1>Welcome, {tailor.fullName}!</h1>
//           {tailor.profilePicture && (
//             <img src={tailor.profilePicture} className="profile-picture" alt="Profile" />
//           )}
//           <div className="user-details">
//             <p><strong>Full Name:</strong> {tailor.fullName}</p>
//             <p><strong>Email:</strong> {tailor.email}</p>
//             <p><strong>Phone Number:</strong> {tailor.phone || "Not Provided"}</p>
//             <p><strong>Role:</strong> {tailor.role}</p>
//             <p><strong>Locality:</strong> {tailor.locality || "Not Provided"}</p>
//             <p><strong>Skills:</strong> {tailor.skills || "Not Provided"}</p>
//             <p><strong>Availability:</strong> {tailor.availability || "Not Provided"}</p>
//           </div>
//           <button className="back-button" onClick={handleBack}>Back</button>
//           <button className="logout-button1" onClick={handleLogout1}>Logout</button>
//         </>
//       ) : (
//         <h1>Loading your dashboard...</h1>
//       )}
//     </div>
//   );
// };

// export default TailorDashboard;








// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import TailorReviews from "./TailorReviews"; // Import reviews component
// // import SubmitReview from "./SubmitReview"; // Import review submission component
// // import "../styles/tailordashboard.css"; // Keep your CSS in a separate file

// // const TailorDashboard = () => {
// //   const [tailor, setTailor] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // Fetch users and logged-in user from local storage
// //     const users = JSON.parse(localStorage.getItem("users")) || [];
// //     const loggedInEmail = localStorage.getItem("loggedInUser");

// //     if (!loggedInEmail) {
// //       navigate("/login"); // Redirect if not logged in
// //       return;
// //     }

// //     const foundTailor = users.find((user) => user.email === loggedInEmail);

// //     if (!foundTailor || foundTailor.role !== "tailor") {
// //       alert("Access denied! Only tailors can access this page.");
// //       navigate("/login");
// //       return;
// //     }

// //     setTailor(foundTailor);
// //   }, [navigate]);

// //   // Handle Back
// //   const handleBack = () => {
// //     navigate("/"); // Redirect to home page
// //   };

// //   // Handle logout
// //   const handleLogout1 = () => {
// //     localStorage.removeItem("loggedInUser"); // Remove session
// //     navigate("/"); // Redirect to home page
// //   };

// //   return (
// //     <div className="dashboard-container">
// //       {tailor ? (
// //         <>
// //           <h1>Welcome, {tailor.fullName}!</h1>
// //           {tailor.profilePicture && (
// //             <img src={tailor.profilePicture} className="profile-picture" alt="Profile" />
// //           )}
// //           <div className="user-details">
// //             <p><strong>Full Name:</strong> {tailor.fullName}</p>
// //             <p><strong>Email:</strong> {tailor.email}</p>
// //             <p><strong>Phone Number:</strong> {tailor.phone || "Not Provided"}</p>
// //             <p><strong>Role:</strong> {tailor.role}</p>
// //             <p><strong>Locality:</strong> {tailor.locality || "Not Provided"}</p>
// //             <p><strong>Skills:</strong> {tailor.skills || "Not Provided"}</p>
// //             <p><strong>Availability:</strong> {tailor.availability || "Not Provided"}</p>
// //           </div>

// //           {/* ⭐ Show Tailor's Reviews */}
// //           <h2>Customer Reviews</h2>
// //           <TailorReviews tailorId={tailor._id} />

// //           {/* ⭐ Allow Customers to Submit a Review */}
// //           <h2>Submit a Review</h2>
// //           <SubmitReview tailorId={tailor._id} customerId={tailor._id} /> 

// //           <button className="back-button" onClick={handleBack}>Back</button>
// //           <button className="logout-button1" onClick={handleLogout1}>Logout</button>
// //         </>
// //       ) : (
// //         <h1>Loading your dashboard...</h1>
// //       )}
// //     </div>
// //   );
// // };

// // export default TailorDashboard;




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/tailordashboard.css"; 
// import "../styles/tailordb.css"; 
const TailorDashboard = () => {
  const [tailor, setTailor] = useState(null);
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();



  // useEffect(() => {
  //   const users = JSON.parse(localStorage.getItem("users")) || [];
  //   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // 👈 Correct this
  
  //   if (!loggedInUser) {
  //     navigate("/login"); 
  //     return;
  //   }
  
  //   const foundTailor = users.find((user) => user.email === loggedInUser.email); // 👈 Match by email
  
  //   if (!foundTailor || foundTailor.role !== "tailor") {
  //     alert("Access denied! Only tailors can access this page.");
  //     navigate("/login");
  //     return;
  //   }
  
  //   setTailor(foundTailor);
  
  //   const allRequests = JSON.parse(localStorage.getItem("requests")) || [];
  //   setRequests(allRequests.filter(req => req.tailorEmail === loggedInUser.email && req.status === "Pending"));
  // }, [navigate]);
  






  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  
    if (!loggedInUser) {
      navigate("/login");
      return;
    }
  
    if (loggedInUser.role !== "tailor") {
      alert("Access denied! Only tailors can access this page.");
      navigate("/login");
      return;
    }
  
    setTailor(loggedInUser);
  
    // 🔥 Fetch requests from backend for this tailor
    const fetchRequests = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/tailors/requests/tailor/${loggedInUser._id}`);
        const data = await response.json();
  
        // Only show "Pending" requests
        setRequests(data.filter(req => req.status === "Pending"));
      } catch (err) {
        console.error("Failed to fetch requests from backend:", err);
      }
    };
  
    fetchRequests();
  }, [navigate]);
  





  // useEffect(() => {
  //   const users = JSON.parse(localStorage.getItem("users")) || [];
  //   const loggedInEmail = localStorage.getItem("loggedInUser");

  //   if (!loggedInEmail) {
  //     navigate("/login"); 
  //     return;
  //   }

  //   const foundTailor = users.find((user) => user.email === loggedInEmail);

  //   if (!foundTailor || foundTailor.role !== "tailor") {
  //     alert("Access denied! Only tailors can access this page.");
  //     navigate("/login");
  //     return;
  //   }

  //   setTailor(foundTailor);

  //   const allRequests = JSON.parse(localStorage.getItem("requests")) || [];
  //   setRequests(allRequests.filter(req => req.tailorEmail === loggedInEmail && req.status === "Pending"));
  // }, [navigate]);

  // const handleRequestAction = (index, status) => {
  //   const updatedRequests = [...requests];
  //   updatedRequests[index].status = status;
  //   setRequests(updatedRequests);
  //   localStorage.setItem("requests", JSON.stringify(updatedRequests));
  // };





  const handleRequestAction = async (index, status) => {
    const requestToUpdate = requests[index];
  
    try {
      await fetch(`http://localhost:5000/api/requests/${requestToUpdate._id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
  
      // Update local state after backend confirms
      const updatedRequests = [...requests];
      updatedRequests[index].status = status;
  
      const visibleRequests = updatedRequests.filter(req => req.status === "Pending");
      setRequests(visibleRequests);
  
    } catch (error) {
      console.error("Failed to update request status:", error);
    }
  };
  






  // const handleRequestAction = (index, status) => {
  //   // Get all requests from localStorage
  //   const allRequests = JSON.parse(localStorage.getItem("requests")) || [];
  
  //   // Find the correct request based on details (you may use an ID in future for better tracking)
  //   const updatedRequests = allRequests.map((req) => {
  //     if (
  //       req.email === requests[index].email &&
  //       req.details === requests[index].details &&
  //       req.time === requests[index].time
  //     ) {
  //       return { ...req, status };
  //     }
  //     return req;
  //   });
  
  //   localStorage.setItem("requests", JSON.stringify(updatedRequests));
  // //   // Refresh visible requests in dashboard
  // //   setRequests(updatedRequests.filter(req => req.tailorEmail === tailor.email && req.status === "Pending"));
  // // };
  // const visibleRequests = updatedRequests.filter(
  //   (req) => req.tailorEmail === tailor.email && req.status === "Pending"
  // );
  // setRequests(visibleRequests);
// };
  


  const handleBack = () => {
    navigate("/");
  };

  const handleLogout1 = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };


  return (
    <div className="tailor-container"> 
    <div className="dashboard-container">
      {tailor ? (
        <>
          <h1>Welcome, {tailor.fullName}!</h1>
          {tailor.profilePicture && (
            // <img src={tailor.profilePicture} className="profile-picture" alt="profile" />
            <img src="/images/tailor-profile.jpg" className="profile-picture" alt="profile" />
          )}
          <div className="user-details">
            <p><strong>Full Name:</strong> {tailor.fullName}</p>
            <p><strong>Email:</strong> {tailor.email}</p>
            <p><strong>Phone Number:</strong> {tailor.phone || "Not Provided"}</p>
            <p><strong>Role:</strong> {tailor.role}</p>
            <p><strong>Locality:</strong> {tailor.locality || "Not Provided"}</p>
            <p><strong>Skills:</strong> {tailor.skills || "Not Provided"}</p>
            <p><strong>Availability:</strong> {tailor.availability || "Not Provided"}</p>
          </div>
          {/* <h2>Open Requests</h2>
          <ul>
            {requests.map((req, index) => (
              <li key={index}>
                {req.details} 
                <button onClick={() => handleRequestAction(index, "Accepted")}>Accept</button>
                <button onClick={() => handleRequestAction(index, "Rejected")}>Reject</button>
              </li>
            ))}
          </ul> */}

<h2 className="requests-title">Open Requests</h2>
<ul className="requests-list">
  {requests.map((req, index) => (
    <li className="request-item" key={index}>
      {/* {req.details} */}
      <strong>{req.name}</strong> wants: {req.details}<br />
              📞 {req.contact} | 📍 {req.location} | ⏰ {req.time} hrs
      <div className="request-actions">
        <button onClick={() => handleRequestAction(index, "Accepted")}>Accept</button>
        <button onClick={() => handleRequestAction(index, "Rejected")}>Reject</button>
      </div>
    </li>
  ))}
</ul>

          <button className="back-button" onClick={handleBack}>Back</button>
          <button className="logout-button1" onClick={handleLogout1}>Logout</button>
        </>
      ) : (
        <h1>Loading your dashboard...</h1>
      )}
    </div>
    </div>
  );
};

export default TailorDashboard;
