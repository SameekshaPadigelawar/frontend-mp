// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/tailordashboard.css"; 

// const TailorDashboard = () => {
//   const [tailor, setTailor] = useState(null);
//   const [requests, setRequests] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  
//     if (!loggedInUser) {
//       navigate("/login");
//       return;
//     }
  
//     if (loggedInUser.role !== "tailor") {
//       alert("Access denied! Only tailors can access this page.");
//       navigate("/login");
//       return;
//     }
  
//     setTailor(loggedInUser);
    
//   }, [navigate]);
  


//   const handleBack = () => {
//     navigate("/");
//   };

//   const handleLogout1 = () => {
//     localStorage.removeItem("loggedInUser");
//     navigate("/");
//   };

//   return (
//     <div className="dashboard-container">
//       {tailor ? (
//         <>
//           <h1>Welcome, {tailor.fullName}!</h1>
//           {tailor.profilePicture && (
//             // <img src={tailor.profilePicture} className="profile-picture" alt="profile" />
//             <img src="/images/tailor-profile.jpg" className="profile-picture" alt="profile" />
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








import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/tailordashboard.css";

const TailorDashboard = () => {
  const [tailor, setTailor] = useState(null);
  const [requests, setRequests] = useState([]);
  const [showRequests, setShowRequests] = useState(false); // ✅ new state
  const navigate = useNavigate();

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

    fetch(`http://localhost:5000/api/tailors/requests/tailor/${loggedInUser._id}`)
      .then((res) => res.json())
      .then((data) => {
        const tailorRequests = data.filter(
          (req) => req.tailor === loggedInUser._id
        );
        setRequests(tailorRequests);
      })
      .catch((err) => console.error("Error fetching requests:", err));
  }, [navigate]);

  const handleBack = () => {
    navigate("/");
  };

  const handleLogout1 = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };




  const updateRequestStatus = async (id, status) => {
    try {
      const res = await fetch(`http://localhost:5000/api/tailors/requests/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
  
      if (res.ok) {
        alert(`Request ${status}`);
        setRequests((prev) =>
          prev.map((req) => (req._id === id ? { ...req, status } : req))
        );
      } else {
        const errMsg = await res.text();
        alert("Error updating status: " + errMsg);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };
  




//   const updateRequestStatus = async (id, status) => {
//     try {
//         const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//       const res = await fetch(`http://localhost:5000/api/tailors/requests/${loggedInUser._id}/status`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ status }),
//       });

//       if (res.ok) {
//         alert(`Request ${status}`);
//         setRequests((prev) =>
//           prev.map((req) => (req._id === id ? { ...req, status } : req))
//         );
//       } else {
//         const errMsg = await res.text();
//         alert("Error updating status: " + errMsg);
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       alert("Something went wrong.");
//     }
//   };

  return (
    <div className="tailor-container"> 
    <div className="dashboard-container">
      {tailor ? (
        <>
          <h1>Welcome, {tailor.fullName}!</h1>

          {tailor.profilePicture && (
            <img
              src="/images/tailor-profile.jpg"
              className="profile-picture"
              alt="profile"
            />
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

          <hr />
          {/* ✅ Show Requests Button */}
          <button onClick={() => setShowRequests(!showRequests)}>
            {showRequests ? "Hide Requests" : "Show Requests"}
          </button>

          {/* ✅ Only show requests if showRequests is true */}
          {showRequests && (
            <>
              <h2>Customer Requests</h2>

              {requests.length === 0 ? (
                <p>No requests found.</p>
              ) : (
                <div className="requests-list">
                  {requests.map((req) => (
                    <div key={req._id} className="request-card">
                      <h3>{req.name}</h3>
                      <p><strong>Email:</strong> {req.email}</p>
                      <p><strong>Contact:</strong> {req.contact}</p>
                      <p><strong>Details:</strong> {req.details}</p>
                      <p><strong>Delivery Time:</strong> {req.time} hrs</p>
                      <p><strong>Location:</strong> {req.location}</p>
                      <p><strong>Status:</strong> {req.status}</p>

                      {req.status === "pending" && (
                        <div className="action-buttons">
                          <button onClick={() => updateRequestStatus(req._id, "accepted")}>
                            Accept
                          </button>
                          <button onClick={() => updateRequestStatus(req._id, "rejected")}>
                            Reject
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

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









// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/tailordashboard.css";

// const TailorDashboard = () => {
//   const [tailor, setTailor] = useState(null);
//   const [requests, setRequests] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

//     if (!loggedInUser) {
//       navigate("/login");
//       return;
//     }

//     if (loggedInUser.role !== "tailor") {
//       alert("Access denied! Only tailors can access this page.");
//       navigate("/login");
//       return;
//     }

//     setTailor(loggedInUser);

//     // 🔁 Fetch requests for this tailor
//     // fetch("http://localhost:5000/api/tailors/requests/tailor/67e18a7ed0f079c5a3378e06")
//     fetch(`http://localhost:5000/api/tailors/requests/tailor/${loggedInUser._id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         const tailorRequests = data.filter(
//           (req) => req.tailor === loggedInUser._id
//         );
//         setRequests(tailorRequests);
//       })
//       .catch((err) => console.error("Error fetching requests:", err));
//   }, [navigate]);

//   const handleBack = () => {
//     navigate("/");
//   };

//   const handleLogout1 = () => {
//     localStorage.removeItem("loggedInUser");
//     navigate("/");
//   };

//   const updateRequestStatus = async (id, status) => {
//     try {
//         const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//       const res = await fetch(`http://localhost:5000/api/tailors/requests/${loggedInUser._id}/status`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ status }),
//       });

//       if (res.ok) {
//         alert(`Request ${status}`);
//         setRequests((prev) =>
//           prev.map((req) => (req._id === id ? { ...req, status } : req))
//         );
//       } else {
//         const errMsg = await res.text();
//         alert("Error updating status: " + errMsg);
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       alert("Something went wrong.");
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       {tailor ? (
//         <>
//           <h1>Welcome, {tailor.fullName}!</h1>

//           {tailor.profilePicture && (
//             <img
//               src="/images/tailor-profile.jpg"
//               className="profile-picture"
//               alt="profile"
//             />
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

//           <hr />
//           <h2>Customer Requests</h2>

//           {requests.length === 0 ? (
//             <p>No requests found.</p>
//           ) : (
//             <div className="requests-list">
//               {requests.map((req) => (
//                 <div key={req._id} className="request-card">
//                   <h3>{req.name}</h3>
//                   <p><strong>Email:</strong> {req.email}</p>
//                   <p><strong>Contact:</strong> {req.contact}</p>
//                   <p><strong>Details:</strong> {req.details}</p>
//                   <p><strong>Delivery Time:</strong> {req.time} hrs</p>
//                   <p><strong>Location:</strong> {req.location}</p>
//                   <p><strong>Status:</strong> {req.status}</p>

//                   {req.status === "pending" && (
//                     <div className="action-buttons">
//                       <button onClick={() => updateRequestStatus(req._id, "accepted")}>
//                         Accept
//                       </button>
//                       <button onClick={() => updateRequestStatus(req._id, "rejected")}>
//                         Reject
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}

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
