// import React, { useState } from "react";
// import { Link,useNavigate } from "react-router-dom";
// import "../styles/customerrequest.css"; // Keep the styles in a separate file

// const CustomerRequest = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     customerName: "",
//     requestDetails: "",
//     deliveryTime: "",
//     customerLocation: "",
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { customerName, requestDetails, deliveryTime, customerLocation } = formData;

//     // Check if all fields are filled
//     if (!customerName || !requestDetails || !deliveryTime || !customerLocation) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     // Create request object
//     const request = {
//       name: customerName,
//       details: requestDetails,
//       time: parseInt(deliveryTime, 10),
//       location: customerLocation,
//     };

//     // Store in localStorage
//     const requests = JSON.parse(localStorage.getItem("requests")) || [];
//     requests.push(request);
//     localStorage.setItem("requests", JSON.stringify(requests));

//     alert("Request Submitted Successfully!");
    
//     // Redirect to tailor listing page
//     navigate("/"); 
//   };

//   return (
//     <div className="customer-request-page"> 
//       <header>
//         <h1>Customer Request</h1>
//       </header>

//       <nav>
//         {/* <a href="/">Home</a> */}
//         <Link to="/">Home</Link>
//         {/* <a href="/tailor-registration">Register as Tailor</a> */}
//       </nav>
//       <div className="request-container">
//       <form className="customer-form" onSubmit={handleSubmit}>
//         <h2>Submit Your Stitching Request</h2>

//         <label htmlFor="customerName">Your Name:</label>
//         <input
//           type="text"
//           id="customerName"
//           name="customerName"
//           placeholder="Enter your name"
//           required
//           value={formData.customerName}
//           onChange={handleChange}
//         />

//         <label htmlFor="requestDetails">What do you need stitched?</label>
//         <textarea
//           id="requestDetails"
//           name="requestDetails"
//           placeholder="Describe your stitching request"
//           required
//           value={formData.requestDetails}
//           onChange={handleChange}
//         ></textarea>

//         <label htmlFor="deliveryTime">Preferred Delivery Time (in hours):</label>
//         <input
//           type="number"
//           id="deliveryTime"
//           name="deliveryTime"
//           min="1"
//           placeholder="e.g., 2"
//           required
//           value={formData.deliveryTime}
//           onChange={handleChange}
//         />

//         <label htmlFor="customerLocation">Your Location:</label>
//         <input
//           type="text"
//           id="customerLocation"
//           name="customerLocation"
//           placeholder="Enter your location"
//           required
//           value={formData.customerLocation}
//           onChange={handleChange}
//         />

//         <button type="submit" className="submit-btn">Submit Request</button>
//       </form>
//     </div>
//     </div> 
//   );
// };

// export default CustomerRequest;











 












//this below code is corrrect
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/customerrequest.css";

const CustomerRequest = () => {
  const navigate = useNavigate();
  const { tailorId } = useParams(); // 🧵 Get tailor ID from URL
  const [customerId, setCustomerId] = useState(""); // 👤 Assume last customer for now

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    contact: "",
    requestDetails: "",
    deliveryTime: "",
    customerLocation: "",
  });

  // 🔁 Fetch latest customer on mount
  useEffect(() => {
    fetch("http://localhost:5000/api/auth/users")
      .then(res => res.json())
      .then(data => {
        const customers = data.filter(user => user.role === "customer");
        const lastCustomer = customers[customers.length - 1];
        setCustomerId(lastCustomer._id);
      })
      .catch(err => console.error("Error fetching customer:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("Form Data:", formData);
    e.preventDefault();

    const { customerName, email, contact, requestDetails, deliveryTime, customerLocation } = formData;

    // if (!customerName || !email || !contact || !requestDetails || !deliveryTime || !customerLocation) {
    //   alert("Please fill in all fields.");
    //   return;
    // }

    if (
      !customerName.trim() || !email.trim() || !contact.trim() ||
      !requestDetails.trim() || !deliveryTime || !customerLocation.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }
    

    const requestBody = {
      customer: customerId,
      tailor: tailorId,
      name: customerName,
      email:email,
      contact:contact,
      details: requestDetails,
      time: parseInt(deliveryTime,10),
      location: customerLocation,
      status: "pending",
    };


        // Store in localStorage
    const requests = JSON.parse(localStorage.getItem("requests")) || [];
    requests.push(requestBody);
    localStorage.setItem("requests", JSON.stringify(requests));

    try {
      const res = await fetch("http://localhost:5000/api/tailors/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Request Submitted Successfully!");
        navigate("/services");
      } else {
        alert("Error submitting request: " + JSON.stringify(data));
      }
    } catch (err) {
      console.error("Error submitting request:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="customer-request-page">
      <button className="back-button" onClick={() => navigate("/services")}>
      ← Back 
    </button>
      <header><h1>Customer Request</h1></header>
      <nav><Link to="/">Home</Link></nav>

      <div className="request-container">
        <form className="customer-form" onSubmit={handleSubmit}>
          <h2>Submit Your Stitching Request</h2>

          <label>Your Name:</label>
          <input type="text" name="customerName" required value={formData.customerName} onChange={handleChange} />

          <label>Your Email:</label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} />

          <label>Contact Number:</label>
          <input type="tel" name="contact" required value={formData.contact} onChange={handleChange} />

          <label>What do you need stitched?</label>
          <textarea name="requestDetails" required value={formData.requestDetails} onChange={handleChange}></textarea>

          <label>Preferred Delivery Time (hrs):</label>
          <input type="number" name="deliveryTime" min="1" required value={formData.deliveryTime} onChange={handleChange} />

          <label>Your Location:</label>
          <input type="text" name="customerLocation" required value={formData.customerLocation} onChange={handleChange} />

          <button type="submit" className="submit-btn">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default CustomerRequest;











// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/customerrequest.css"; // Keep the styles in a separate file

// const CustomerRequest = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     customerName: "",
//     email: "",
//     contact: "",
//     requestDetails: "",
//     deliveryTime: "",
//     customerLocation: "",
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { customerName, email, contact, requestDetails, deliveryTime, customerLocation } = formData;

//     // Check if all fields are filled
//     if (!customerName || !email || !contact || !requestDetails || !deliveryTime || !customerLocation) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     // Create request object
//     const request = {
//       name: customerName,
//       email: email,
//       contact: contact,
//       details: requestDetails,
//       time: parseInt(deliveryTime, 10),
//       location: customerLocation,
//     };

//     // Store in localStorage
//     const requests = JSON.parse(localStorage.getItem("requests")) || [];
//     requests.push(request);
//     localStorage.setItem("requests", JSON.stringify(requests));

//     alert("Request Submitted Successfully!");
    
//     // Redirect to tailor listing page
//     navigate("/services"); 
//   };

//   return (
//     <div className="customer-request-page"> 
//       <header>
//         <h1>Customer Request</h1>
//       </header>

//       <nav>
//         <Link to="/">Home</Link>
//       </nav>

//       <div className="request-container">
//         <form className="customer-form" onSubmit={handleSubmit}>
//           <h2>Submit Your Stitching Request</h2>

//           <label htmlFor="customerName">Your Name:</label>
//           <input
//             type="text"
//             id="customerName"
//             name="customerName"
//             placeholder="Enter your name"
//             required
//             value={formData.customerName}
//             onChange={handleChange}
//           />

//           <label htmlFor="email">Your Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//           />

//           <label htmlFor="contact">Your Contact Number:</label>
//           <input
//             type="tel"
//             id="contact"
//             name="contact"
//             placeholder="Enter your contact number"
//             required
//             value={formData.contact}
//             onChange={handleChange}
//           />

//           <label htmlFor="requestDetails">What do you need stitched?</label>
//           <textarea
//             id="requestDetails"
//             name="requestDetails"
//             placeholder="Describe your stitching request"
//             required
//             value={formData.requestDetails}
//             onChange={handleChange}
//           ></textarea>

//           <label htmlFor="deliveryTime">Preferred Delivery Time (in hours):</label>
//           <input
//             type="number"
//             id="deliveryTime"
//             name="deliveryTime"
//             min="1"
//             placeholder="e.g., 2"
//             required
//             value={formData.deliveryTime}
//             onChange={handleChange}
//           />

//           <label htmlFor="customerLocation">Your Location:</label>
//           <input
//             type="text"
//             id="customerLocation"
//             name="customerLocation"
//             placeholder="Enter your location"
//             required
//             value={formData.customerLocation}
//             onChange={handleChange}
//           />

//           <button type="submit" className="submit-btn">Submit Request</button>
//         </form>
//       </div>
//     </div> 
//   );
// };

// export default CustomerRequest;

