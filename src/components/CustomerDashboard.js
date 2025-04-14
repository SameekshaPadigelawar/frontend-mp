// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/customerdashboard.css";

// const CustomerDashboard = () => {
//   const [customer, setCustomer] = useState(null);
//   const navigate = useNavigate();
//   const [customerRequests, setCustomerRequests] = useState([]);
//   useEffect(() => {
//     // Get users and logged-in email from local storage
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const loggedInEmail = localStorage.getItem("loggedInUser");

//     if (!loggedInEmail) {
//       navigate("/"); // Redirect to home if not logged in
//       return;
//     }

//     const foundCustomer = users.find((user) => user.email === loggedInEmail);

//     if (!foundCustomer) {
//       alert("Access denied! Only registered users can access this page.");
//       navigate("/");
//       return;
//     }

//     if (foundCustomer.role !== "customer") {
//       alert("Access denied! Only customers can access this page.");
//       navigate("/");
//       return;
//     }
//     setCustomer(foundCustomer);


//     const allRequests = JSON.parse(localStorage.getItem("requests")) || [];
//     const userRequests = allRequests.filter(req => req.email === loggedInEmail);
//     setCustomerRequests(userRequests);



//   }, [navigate]);

//   // Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser"); // Remove session
//     navigate("/"); // Redirect to home page
//   };

  
//   // Handle Back
//   const handleBack = () => {
//     navigate("/"); // Redirect to home page
//   };


//   return (
//     <div className="dashboard-container">
//       {customer ? (
//         <>
//           <h1>Welcome, {customer.fullName}!</h1>
//           <div className="user-details">
//             <p><strong>Full Name:</strong> {customer.fullName}</p>
//             <p><strong>Email:</strong> {customer.email}</p>
//             <p><strong>Phone:</strong> {customer.phone || "N/A"}</p>
//             <p><strong>Role:</strong> {customer.role}</p>
//           </div>
//           <button className="back-button1" onClick={handleBack}>Back</button>
//           <button className="logout-button" onClick={handleLogout}>Logout</button>

//           <h2>Your Stitching Requests</h2>
// {customerRequests.length > 0 ? (
//   <ul>
//     {customerRequests.map((req, index) => (
//       <li key={index}>
//         <strong>Request:</strong> {req.details}<br />
//         <strong>Status:</strong> {req.status || "Pending"}
//       </li>
//     ))}
//   </ul>
// ) : (
//   <p>No requests found.</p>
// )}


//         </>
//       ) : (
//         <h1>Loading your dashboard...</h1>
//       )}
//     </div>
//   );
// };

// export default CustomerDashboard;

//this above code is correct for signup




// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/customerdashboard.css";

// const CustomerDashboard = () => {
//   const [customer, setCustomer] = useState(null);
//   const [requests, setRequests] = useState([]);
//   const navigate = useNavigate();

  
//   useEffect(() => {
//     const storedUser = localStorage.getItem("loggedInUser");

//     if (!storedUser) {
//       alert("Access Denied! Please log in first.");
//       navigate("/");
//       return;
//     }

//     const foundCustomer = JSON.parse(storedUser);

//     if (!foundCustomer || foundCustomer.role !== "customer") {
//       alert("Access Denied! Only customers can access.");
//       navigate("/");
//       return;
//     }

//     setCustomer(foundCustomer);

//     const allRequests = JSON.parse(localStorage.getItem("requests")) || [];
//     setRequests(allRequests.filter(req => req.customerEmail === foundCustomer.email));
//   }, [navigate]);

//   useEffect(() => {
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const loggedInEmail = localStorage.getItem("loggedInUser");

//     if (!loggedInEmail) {
//       navigate("/");
//       return;
//     }

//     const foundCustomer = users.find((user) => user.email === loggedInEmail);

//     if (!foundCustomer) {
//       alert("Access denied! Only registered users can access this page.");
//       navigate("/");
//       return;
//     }

//     if (foundCustomer.role !== "customer") {
//       alert("Access denied! Only customers can access this page.");
//       navigate("/");
//       return;
//     }

//     setCustomer(foundCustomer);

//     const allRequests = JSON.parse(localStorage.getItem("requests")) || [];
//     setRequests(allRequests.filter(req => req.customerEmail === loggedInEmail));
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     navigate("/");
//   };

//   const handleBack = () => {
//     navigate("/");
//   };

//   return (
//     <div className="dashboard-container">
//       {customer ? (
//         <>
//           <h1>Welcome, {customer.fullName}!</h1>
//           <div className="user-details">
//             <p><strong>Full Name:</strong> {customer.fullName}</p>
//             <p><strong>Email:</strong> {customer.email}</p>
//             <p><strong>Phone:</strong> {customer.phone || "N/A"}</p>
//             <p><strong>Role:</strong> {customer.role}</p>
//           </div>
//           <h2>Your Requests</h2>
//           <ul>
//             {requests.map((req, index) => (
//               <li key={index}>
//                 {req.details} - <strong>{req.status}</strong>
//               </li>
//             ))}
//           </ul>
//           <button className="back-button1" onClick={handleBack}>Back</button>
//           <button className="logout-button" onClick={handleLogout}>Logout</button>
//         </>
//       ) : (
//         <h1>Loading your dashboard...</h1>
//       )}
//     </div>
//   );
// };

// export default CustomerDashboard;



















// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/customerdashboard.css";

// const CustomerDashboard = () => {
//   const [customer, setCustomer] = useState(null);
//   const [requests, setRequests] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = localStorage.getItem("loggedInUser");

//     if (!storedUser) {
//       alert("Access Denied! Please log in first.");
//       navigate("/");
//       return;
//     }

//     const foundCustomer = JSON.parse(storedUser);

//     if (!foundCustomer || foundCustomer.role !== "customer") {
//       alert("Access Denied! Only customers can access.");
//       navigate("/");
//       return;
//     }

//     setCustomer(foundCustomer);
      

//     const allRequests = JSON.parse(localStorage.getItem("requests")) || [];
//     setRequests(allRequests.filter(req => req.customerEmail === foundCustomer.email));
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   const handleBack = () => {
//     navigate("/");
//   };


  
//   return (
//     <div className="dashboard-container">
//       {customer ? (
//         <>
//           <h1>Welcome, {customer.fullName}!</h1>
//           <div className="user-details">
//             <p><strong>Full Name:</strong> {customer.fullName}</p>
//             <p><strong>Email:</strong> {customer.email}</p>
//             <p><strong>Phone:</strong> {customer.phone || "N/A"}</p>
//             <p><strong>Role:</strong> {customer.role}</p>
//           </div>
//           {/* <h2>Your Requests</h2>
//           <ul>
//             {requests.map((req, index) => (
//               <li key={index}>
//                 {req.details} - <strong>{req.status}</strong>
//               </li>
//             ))}
//           </ul> */}
//           <h2>Your Requests</h2>
//           <ul>
//             {requests.map((req, index) => (
//               <li key={index}>
//                 <strong>Details:</strong> {req.details}<br />
//                 <strong>Status:</strong> {req.status}<br />
//                 <strong>Tailor:</strong> {req.tailor?.fullName || "N/A"}
//               </li>
//             ))}
//           </ul>
//           <button className="back-button1" onClick={handleBack}>Back</button>
//           <button className="logout-button" onClick={handleLogout}>Logout</button>
//         </>
//       ) : (
//         <h1>Loading your dashboard...</h1>
//       )}
//     </div>
//   );
// };

// export default CustomerDashboard;
//this is ccorrect for login

























// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/customerdashboard.css";

// const CustomerDashboard = () => {
//   const [customer, setCustomer] = useState(null);
//   const [requests, setRequests] = useState([]);
//   const [selectedRequestId, setSelectedRequestId] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = localStorage.getItem("loggedInUser");

//     if (!storedUser) {
//       alert("Access Denied! Please log in first.");
//       navigate("/");
//       return;
//     }

//     const foundCustomer = JSON.parse(storedUser);

//     if (!foundCustomer || foundCustomer.role !== "customer") {
//       alert("Access Denied! Only customers can access.");
//       navigate("/");
//       return;
//     }

//     setCustomer(foundCustomer);

//     // Fetching customer requests only if the customer is set
//     const fetchRequests = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/requests/customer/${foundCustomer._id}`);
        
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }

//         const data = await response.json();
//         setRequests(data);
//       } catch (err) {
//         console.error("Error fetching requests:", err);
//         alert("Failed to load requests.");
//       }
//     };

//     fetchRequests();
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   const handleBack = () => {
//     navigate("/");
//   };

//   const toggleRequestStatus = (id) => {
//     if (selectedRequestId === id) {
//       setSelectedRequestId(null); // hide if same is clicked again
//     } else {
//       setSelectedRequestId(id); // show if different
//     }
//   };

//   return (
//     <div className="customer-container">
//       <div className="dashboard-container">
//         {customer ? (
//           <>
//             <h1>Welcome, {customer.fullName}!</h1>
//             <div className="user-details">
//               <p><strong>Full Name:</strong> {customer.fullName}</p>
//               <p><strong>Email:</strong> {customer.email}</p>
//               <p><strong>Phone:</strong> {customer.phone || "N/A"}</p>
//               <p><strong>Role:</strong> {customer.role}</p>
//             </div>
//             <h2>Your Requests</h2>
//             <ul>
//               {requests.map((req, index) => (
//                 <li key={index}>
//                   Request {index + 1}
//                   <button onClick={() => toggleRequestStatus(req._id)}>
//                     {selectedRequestId === req._id ? "Hide Status" : "Show Status"}
//                   </button>

//                   {/* Show only if this request is selected */}
//                   {selectedRequestId === req._id && (
//                     <div className="request-details">
//                       <p><strong>Details:</strong> {req.details}</p>
//                       <p><strong>Status:</strong> {req.status}</p>
//                       <p><strong>Tailor:</strong> {req.tailor?.fullName || "N/A"}</p>
//                       {req.cost && <p><strong>Cost:</strong> ₹{req.cost}</p>}
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>

//             <button className="back-button1" onClick={handleBack}>Back</button>
//             <button className="logout-button" onClick={handleLogout}>Logout</button>
//           </>
//         ) : (
//           <h1>Loading your dashboard...</h1>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CustomerDashboard;

























import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/customerdashboard.css";

const CustomerDashboard = () => {
  const [customer, setCustomer] = useState(null);
  const [requests, setRequests] = useState([]);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    const token = localStorage.getItem("token");
    if (!storedUser) {
      alert("Access Denied! Please log in first.");
      navigate("/");
      return;
    }

    const foundCustomer = JSON.parse(storedUser);

    if (!foundCustomer || foundCustomer.role !== "customer") {
      alert("Access Denied! Only customers can access.");
      navigate("/");
      return;
    }

    setCustomer(foundCustomer);

  //   fetch(`http://localhost:5000/api/requests/customer/${foundCustomer._id}`)
  //     .then((res) => res.json())
  //     .then((data) => setRequests(data))
  //     .catch((err) => {
  //       console.error("Error fetching requests:", err);
  //       alert("Failed to load requests.");
  //     });
  // }, [navigate]);

  // console.log("Fetching requests for customer ID:", foundCustomer._id);


  fetch(`http://localhost:5000/api/tailors/requests/customer/${foundCustomer._id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Request failed");
      return res.json();
    })
    .then((data) => setRequests(data))
    .catch((err) => {
      console.error("Error fetching requests:", err);
      alert("Failed to load requests.");
    });
}, [navigate]);



  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

  const toggleRequestStatus = (id) => {
    if (selectedRequestId === id) {
      setSelectedRequestId(null); // hide if same is clicked again
    } else {
      setSelectedRequestId(id); // show if different
    }
  };
  
  return (
    <div className="customer-container"> 
    <div className="dashboard-container">
      {customer ? (
        <>
          <h1>Welcome, {customer.fullName}!</h1>
          <div className="user-details">
            <p><strong>Full Name:</strong> {customer.fullName}</p>
            <p><strong>Email:</strong> {customer.email}</p>
            <p><strong>Phone:</strong> {customer.phone || "N/A"}</p>
            <p><strong>Role:</strong> {customer.role}</p>
          </div>
          <h2>Your Requests</h2>
          <ul>
            {requests.map((req, index) => (
              <li key={index}>
                Request {index + 1}
                <button onClick={() => toggleRequestStatus(req._id)}>
                  {selectedRequestId === req._id ? "Hide Status" : "Show Status"}
                </button>

                {/* Show only if this request is selected */}
                {selectedRequestId === req._id && (
                  <div className="request-details">
                    <p><strong>Details:</strong> {req.details}</p>
                    <p><strong>Status:</strong> {req.status}</p>
                    <p><strong>Tailor:</strong> {req.tailor?.fullName || "N/A"}</p>
                    {/* {req.cost && <p><strong>Cost:</strong> ₹{req.cost}</p>} */}
                    {/* <p><strong>Cost:</strong> ₹{req.cost !== undefined ? req.cost : "N/A"}</p> */}
                    <p><strong>Cost:</strong> 
                     {req.status === "accepted" && req.cost != null 
                             ? ` ₹${req.cost}` 
                      : " N/A"}
                    </p>


                  </div>
                )}
              </li>
            ))}
          </ul>

          <button className="back-button1" onClick={handleBack}>Back</button>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <h1>Loading your dashboard...</h1>
      )}
    </div>
    </div>
  );
};

export default CustomerDashboard;
// this is for login nad to see requests as well