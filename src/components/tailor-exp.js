// // Keep your imports same
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/tailordb.css";

// const TailorDashboard = () => {
//   const [tailor, setTailor] = useState(null);
//   const [requests, setRequests] = useState([]);
//   const [showRequests, setShowRequests] = useState(false);
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

//     fetch(`http://localhost:5000/api/tailors/requests/tailor/${loggedInUser._id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         const tailorRequests = data.filter((req) => req.tailor === loggedInUser._id);
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
//       const res = await fetch(`http://localhost:5000/api/tailors/requests/${id}/status`, {
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
//     <div className="tailor-container">
//       {tailor ? (
//         <div className="dashboard-wrapper">
//           {/* Left Side */}
//           <div className="left-panel">
//             <h1>Welcome, {tailor.fullName}!</h1>
//             {tailor.profilePicture && (
//               <img
//                 src="/images/tailor-profile.jpg"
//                 className="profile-picture"
//                 alt="profile"
//               />
//             )}

//             <div className="user-details">
//               <p><strong>Full Name:</strong> {tailor.fullName}</p>
//               <p><strong>Email:</strong> {tailor.email}</p>
//               <p><strong>Phone Number:</strong> {tailor.phone || "Not Provided"}</p>
//               <p><strong>Role:</strong> {tailor.role}</p>
//               <p><strong>Locality:</strong> {tailor.locality || "Not Provided"}</p>
//               <p><strong>Skills:</strong> {tailor.skills || "Not Provided"}</p>
//               <p><strong>Availability:</strong> {tailor.availability || "Not Provided"}</p>
//             </div>

//             <button className="back-button" onClick={handleBack}>Back</button>
//             <button className="logout-button1" onClick={handleLogout1}>Logout</button>
//           </div>

//           {/* Right Side */}
//           <div className="right-panel">
//             <button className="toggle-btn" onClick={() => setShowRequests(!showRequests)}>
//               {showRequests ? "Hide Requests" : "Show Requests"}
//             </button>

//             {showRequests && (
//               <>
//                 <h2>Customer Requests</h2>
//                 {requests.length === 0 ? (
//                   <p>No requests found.</p>
//                 ) : (
//                   <div className="requests-list">
//                     {requests.map((req) => (
//                       <div key={req._id} className="request-card">
//                         <h3>{req.name}</h3>
//                         <p><strong>Email:</strong> {req.email}</p>
//                         <p><strong>Contact:</strong> {req.contact}</p>
//                         <p><strong>Details:</strong> {req.details}</p>
//                         <p><strong>Delivery Time:</strong> {req.time} hrs</p>
//                         <p><strong>Location:</strong> {req.location}</p>
//                         <p><strong>Status:</strong> {req.status}</p>

//                         {req.status === "pending" && (
//                           <div className="action-buttons">
//                             <button className="accept-button" onClick={() => updateRequestStatus(req._id, "accepted")}>
//                               Accept
//                             </button>
//                             <button  className="reject-button" onClick={() => updateRequestStatus(req._id, "rejected")}>
//                               Reject
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       ) : (
//         <h1>Loading your dashboard...</h1>
//       )}
//     </div>
//   );
// };

// export default TailorDashboard;














// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/tailordb.css";

// const TailorDashboard = () => {
//   const [tailor, setTailor] = useState(null);
//   const [requests, setRequests] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const [showRequests, setShowRequests] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//     const token = localStorage.getItem("token");

//     if (!loggedInUser) {
//       navigate("/login");
//       return;
//     }

//     if (loggedInUser.role?.toLowerCase() !== "tailor") {
//       alert("Access denied! Only tailors can access this page.");
//       navigate("/login");
//       return;
//     }

//     setTailor(loggedInUser);

//     // Fetch tailor's requests
//     fetch(`http://localhost:5000/api/tailors/requests/tailor/${loggedInUser._id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         const tailorRequests = data.filter((req) => req.tailor === loggedInUser._id);
//         setRequests(tailorRequests);
//       })
//       .catch((err) => console.error("Error fetching requests:", err));

//     // Fetch notifications
//     fetch(`http://localhost:5000/api/notifications/${loggedInUser._id}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((res) => res.json())
//       .then((data) => setNotifications(data))
//       .catch((err) => console.error("Error fetching notifications:", err));
//   }, [navigate]);

//   const handleBack = () => {
//     navigate("/");
//   };

//   const handleLogout1 = () => {
//     localStorage.removeItem("loggedInUser");
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   const updateRequestStatus = async (id, status) => {
//     let cost = null;

//     if (status === "accepted") {
//       cost = prompt("Enter the cost for this request:");

//       if (!cost || isNaN(cost)) {
//         alert("Invalid cost entered.");
//         return;
//       }
//     }

//     try {
//       const res = await fetch(`http://localhost:5000/api/tailors/requests/${id}/status`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ status, cost }),
//       });

//       if (res.ok) {
//         alert(`Request ${status}`);
//         setRequests((prev) =>
//           prev.map((req) =>
//             req._id === id ? { ...req, status, cost: cost ?? req.cost } : req
//           )
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
//     <div className="tailor-container">
//       {tailor ? (
//         <div className="dashboard-wrapper">
//           {/* Left Side */}
//           <div className="left-panel">
//             <h1>Welcome, {tailor.fullName}!</h1>
//             {tailor.profilePicture && (
//               <img
//                 src="/images/tailor-profile.jpg"
//                 className="profile-picture"
//                 alt="profile"
//               />
//             )}

//             <div className="user-details">
//               <p><strong>Full Name:</strong> {tailor.fullName}</p>
//               <p><strong>Email:</strong> {tailor.email}</p>
//               <p><strong>Phone Number:</strong> {tailor.phone || "Not Provided"}</p>
//               <p><strong>Role:</strong> {tailor.role}</p>
//               <p><strong>Locality:</strong> {tailor.locality || "Not Provided"}</p>
//               <p><strong>Skills:</strong> {tailor.skills || "Not Provided"}</p>
//               <p><strong>Availability:</strong> {tailor.availability || "Not Provided"}</p>
//             </div>
//             <div className="button-group">
//               <button className="back-button" onClick={handleBack}>Back</button>
//               <button className="logout-button1" onClick={handleLogout1}>Logout</button>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="right-panel">
//             {/* Notifications */}
//             {notifications.length > 0 && (
//               <div className="notification-box">
//                 <h3>Notifications</h3>
//                 <ul>
//                   {notifications.map((note, index) => (
//                     <li key={index}>{note.message}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             <button className="toggle-btn" onClick={() => setShowRequests(!showRequests)}>
//               {showRequests ? "Hide Requests" : "Show Requests"}
//             </button>

//             {showRequests && (
//               <>
//                 <h2>Customer Requests</h2>
//                 {requests.length === 0 ? (
//                   <p>No requests found.</p>
//                 ) : (
//                   <div className="requests-list">
//                     {requests.map((req) => (
//                       <div key={req._id} className="request-card">
//                         <h3>{req.name}</h3>
//                         <p><strong>Email:</strong> {req.email}</p>
//                         <p><strong>Contact:</strong> {req.contact}</p>
//                         <p><strong>Details:</strong> {req.details}</p>
//                         <p><strong>Delivery Time:</strong> {req.time} hrs</p>
//                         <p><strong>Location:</strong> {req.location}</p>
//                         <p><strong>Status:</strong> {req.status}</p>
//                         {req.cost && (
//                           <p><strong>Cost:</strong> ₹{req.cost}</p>
//                         )}

//                         {req.status === "pending" && (
//                           <div className="action-buttons">
//                             <button
//                               className="accept-button"
//                               onClick={() => updateRequestStatus(req._id, "accepted")}
//                             >
//                               Accept
//                             </button>
//                             <button
//                               className="reject-button"
//                               onClick={() => updateRequestStatus(req._id, "rejected")}
//                             >
//                               Reject
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       ) : (
//         <h1>Loading your dashboard...</h1>
//       )}
//     </div>
//   );
// };

// export default TailorDashboard;
















// // Keep your imports same-correct code
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/tailordb.css";

const TailorDashboard = () => {
  const [tailor, setTailor] = useState(null);
  const [requests, setRequests] = useState([]);
  const [showRequests, setShowRequests] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      navigate("/login");
      return;
    }

    // if (loggedInUser.role !== "tailor")
     if (loggedInUser.role?.toLowerCase() !== "tailor") {
        
      alert("Access denied! Only tailors can access this page.");
      navigate("/login");
      return;
    }

    setTailor(loggedInUser);

    fetch(`http://localhost:5000/api/tailors/requests/tailor/${loggedInUser._id}`)
      .then((res) => res.json())
      .then((data) => {
        const tailorRequests = data.filter((req) => req.tailor === loggedInUser._id);
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
    let cost = null;

    if (status === "accepted") {
      cost = prompt("Enter the cost for this request:");

      if (!cost || isNaN(cost)) {
        alert("Invalid cost entered.");
        return;
      }
    }

    try {
      const res = await fetch(`http://localhost:5000/api/tailors/requests/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, cost }),
      });

      if (res.ok) {
        alert(`Request ${status}`);
        setRequests((prev) =>
          prev.map((req) =>
            req._id === id ? { ...req, status, cost: cost ?? req.cost } : req
          )
        );
      }
       else {
        const errMsg = await res.text();
        alert("Error updating status: " + errMsg);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="tailor-container">
      {tailor ? (
        <div className="dashboard-wrapper">
          {/* Left Side */}
          <div className="left-panel">
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
            <div className="button-group">
            <button className="back-button" onClick={handleBack}>Back</button>
            <button className="logout-button1" onClick={handleLogout1}>Logout</button>
          </div>
          </div>
          {/* Right Side */}
          <div className="right-panel">
            <button className="toggle-btn" onClick={() => setShowRequests(!showRequests)}>
              {showRequests ? "Hide Requests" : "Show Requests"}
            </button>

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
                        {/* <p><strong>Status:</strong> {req.status}</p> */}
                        <p><strong>Status:</strong> 
  <span style={{ 
    color: req.status === "cancelled" ? "red" :
           req.status === "accepted" ? "green" :
           req.status === "rejected" ? "gray" : "black"
  }}>
    {req.status}
  </span>
</p>

{req.status === "cancelled" && (
  <p style={{ color: "red", fontWeight: "bold" }}>
    ⚠️ This request has been cancelled by the customer.
  </p>
)}

                        {req.cost && (
                          <p><strong>Cost:</strong> ₹{req.cost}</p>
                        )}

                        {req.status === "pending" && (
                          <div className="action-buttons">
                            <button
                              className="accept-button"
                              onClick={() => updateRequestStatus(req._id, "accepted")}
                            >
                              Accept
                            </button>
                            <button
                              className="reject-button"
                              onClick={() => updateRequestStatus(req._id, "rejected")}
                            >
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
          </div>
        </div>
      ) : (
        <h1>Loading your dashboard...</h1>
      )}
    </div>
  );
};

export default TailorDashboard;


























// // Keep your imports same
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/tailordb.css";

// const TailorDashboard = () => {
//   const [tailor, setTailor] = useState(null);
//   const [requests, setRequests] = useState([]);
//   const [showRequests, setShowRequests] = useState(false);
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

//     fetch(`http://localhost:5000/api/tailors/requests/tailor/${loggedInUser._id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         const tailorRequests = data
//           .filter((req) => req.tailor === loggedInUser._id)
//           .sort((a, b) => {
//             if (a.status === "accepted") return -1;
//             if (b.status === "accepted") return 1;
//             return 0;
//           });
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
//     let cost = null;

//     if (status === "accepted") {
//       cost = prompt("Enter the cost for this request:");

//       if (cost === null || cost.trim() === "" || isNaN(cost)) {
//         alert("Invalid cost entered.");
//         return;
//       }
//     }

//     try {
//       const res = await fetch(`http://localhost:5000/api/tailors/requests/${id}/status`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ status, cost }),
//       });

//       if (res.ok) {
//         alert(`Request ${status}`);
//         const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//         const response = await fetch(`http://localhost:5000/api/tailors/requests/tailor/${loggedInUser._id}`);
//         const updatedRequests = await response.json();
//         const tailorRequests = updatedRequests
//           .filter((req) => req.tailor === loggedInUser._id)
//           .sort((a, b) => {
//             if (a.status === "accepted") return -1;
//             if (b.status === "accepted") return 1;
//             return 0;
//           });
//         setRequests(tailorRequests);
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
//     <div className="tailor-container">
//       {tailor ? (
//         <div className="dashboard-wrapper">
//           {/* Left Side */}
//           <div className="left-panel">
//             <h1>Welcome, {tailor.fullName}!</h1>
//             {tailor.profilePicture && (
//               <img
//                 src="/images/tailor-profile.jpg"
//                 className="profile-picture"
//                 alt="profile"
//               />
//             )}

//             <div className="user-details">
//               <p><strong>Full Name:</strong> {tailor.fullName}</p>
//               <p><strong>Email:</strong> {tailor.email}</p>
//               <p><strong>Phone Number:</strong> {tailor.phone || "Not Provided"}</p>
//               <p><strong>Role:</strong> {tailor.role}</p>
//               <p><strong>Locality:</strong> {tailor.locality || "Not Provided"}</p>
//               <p><strong>Skills:</strong> {tailor.skills || "Not Provided"}</p>
//               <p><strong>Availability:</strong> {tailor.availability || "Not Provided"}</p>
//             </div>

//             <button className="back-button" onClick={handleBack}>Back</button>
//             <button className="logout-button1" onClick={handleLogout1}>Logout</button>
//           </div>

//           {/* Right Side */}
//           <div className="right-panel">
//             <button className="toggle-btn" onClick={() => setShowRequests(!showRequests)}>
//               {showRequests ? "Hide Requests" : "Show Requests"}
//             </button>

//             {showRequests && (
//               <>
//                 <h2>Customer Requests</h2>
//                 {requests.length === 0 ? (
//                   <p>No requests found.</p>
//                 ) : (
//                   <div className="requests-list">
//                     {requests.map((req) => (
//                       <div key={req._id} className="request-card">
//                         <h3>{req.name}</h3>
//                         <p><strong>Email:</strong> {req.email}</p>
//                         <p><strong>Contact:</strong> {req.contact}</p>
//                         <p><strong>Details:</strong> {req.details}</p>
//                         <p><strong>Delivery Time:</strong> {req.time} hrs</p>
//                         <p><strong>Location:</strong> {req.location}</p>
//                         <p><strong>Status:</strong> {req.status}</p>
//                         {req.cost != null && (
//                           <p><strong>Cost:</strong> ₹{req.cost}</p>
//                         )}

//                         {req.status === "pending" && (
//                           <div className="action-buttons">
//                             <button
//                               className="accept-button"
//                               onClick={() => updateRequestStatus(req._id, "accepted")}
//                             >
//                               Accept
//                             </button>
//                             <button
//                               className="reject-button"
//                               onClick={() => updateRequestStatus(req._id, "rejected")}
//                             >
//                               Reject
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       ) : (
//         <h1>Loading your dashboard...</h1>
//       )}
//     </div>
//   );
// };

// export default TailorDashboard;
