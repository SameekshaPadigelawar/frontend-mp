// import React, { useState } from "react";
// import "../styles/login.css"; // Import CSS

// function Login() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     phone: "",
//     role: "customer",
//     locality: "",
//     skills: "",
//     availability: "",
//     profilePicture: null
//   });

//   const [showTailorFields, setShowTailorFields] = useState(false);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === "file") {
//       setFormData({ ...formData, profilePicture: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }

//     // Show tailor fields only if role is "tailor"
//     if (name === "role") {
//       setShowTailorFields(value === "tailor");
//     }
//   };

  // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Validation
  //   if (!formData.fullName || !formData.email || !formData.password) {
  //     alert("Please fill all required fields!");
  //     return;
  //   }

  //   if (formData.role === "tailor" && (!formData.locality || !formData.skills || !formData.availability)) {
  //     alert("Please complete all tailor details!");
  //     return;
  //   }

  //   // Store user data in localStorage
  //   let users = JSON.parse(localStorage.getItem("users")) || [];

  //   // Check if email already exists
  //   if (users.some((user) => user.email === formData.email)) {
  //     alert("This email is already registered!");
  //     return;
  //   }

  //   // Convert profile picture to Base64 if uploaded
  //   if (formData.profilePicture) {
  //     const reader = new FileReader();
  //     reader.onload = function (event) {
  //       formData.profilePicture = event.target.result;
  //       saveUserData(users);
  //     };
  //     reader.readAsDataURL(formData.profilePicture);
  //   } else {
  //     saveUserData(users);
  //   }
  // };

  // // Save user data and redirect
  // const saveUserData = (users) => {
  //   users.push(formData);
  //   localStorage.setItem("users", JSON.stringify(users));
  //   localStorage.setItem("loggedInUser", formData.email);
  //   window.location.href = "/"; // Redirect after signup
  // };///corrected without backend



  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   if (!formData.fullName || !formData.email || !formData.password) {
  //     alert("Please fill all required fields!");
  //     return;
  //   }
  
  //   try {
  //     const response = await fetch("http://localhost:5000/api/auth/register", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });
  
  //     const data = await response.json();
  //     if (response.ok) {
  //       alert("User registered successfully!");
  //       window.location.href = "/";
  //     } else {
  //       alert(data.msg);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };///main corrected code with backend

  
  



  

//   return (
//     <div className="main-container">
//       {/* Image beside the signup form */}
//       <div className="image-container">
//         <img src="/images/signup-acc.png" alt="Signup" />
//       </div>

//       {/* Signup Form */}
//       <div className="signup-container">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label>Full Name:</label>
//             <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
//           </div>

//           <div className="input-group">
//             <label>Email:</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//           </div>

//           <div className="input-group">
//             <label>Password:</label>
//             <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//           </div>

//           <div className="input-group">
//             <label>Phone Number:</label>
//             <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
//           </div>

//           <div className="input-group">
//             <label>Select Role:</label>
//             <select name="role" value={formData.role} onChange={handleChange}>
//               <option value="customer">Customer</option>
//               <option value="tailor">Tailor</option>
//             </select>
//           </div>

//           {/* Tailor-Specific Fields */}
//           {showTailorFields && (
//             <div className="tailor-fields">
//               <div className="input-group">
//                 <label>Profile Picture:</label>
//                 <input type="file" name="profilePicture" onChange={handleChange} accept="image/*" />
//               </div>

//               <div className="input-group">
//                 <label>Locality:</label>
//                 <input type="text" name="locality" value={formData.locality} onChange={handleChange} />
//               </div>

//               <div className="input-group">
//                 <label>Skills:</label>
//                 <input type="text" name="skills" value={formData.skills} onChange={handleChange} />
//               </div>

//               <div className="input-group">
//                 <label>Availability:</label>
//                 <input type="text" name="availability" value={formData.availability} onChange={handleChange} />
//               </div>
//             </div>
//           )}

//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login; 
















import React, { useState } from "react";
import "../styles/login.css"; // Import CSS
function Login() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    role: "customer",
    locality: "",
    skills: "",
    availability: "",
    profilePicture: null
  });
 

  // const handleChange = (e) => {
  //   const { name, value, type, files } = e.target;

  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: type === "file" ? files[0] : value,
  //   }));
  // };
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === "file") {
      setFormData({ ...formData, profilePicture: files[0] });
      console.log("Selected file:", files[0]); // Debugging: Check if file is selected
    } else {
      setFormData({ ...formData, [name]: value });
    }
  
    // if (name === "role") {
    //   setShowTailorFields(value === "tailor"); // Show tailor fields
    // }
  };
  

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setFormData((prev) => ({
      ...prev,
      role: selectedRole
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!formData.fullName || !formData.email || !formData.password) {
  //     alert("Please fill all required fields!");
  //     return;
  //   }

  //   try {
  //     const response = await fetch("http://localhost:5000/api/auth/register", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();
  //     if (response.ok) {
  //       alert("User registered successfully!");
  //       window.location.href = "/";
  //     } else {
  //       alert(data.msg);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("role", formData.role);
  
    if (formData.role === "tailor") {
      formDataToSend.append("locality", formData.locality);
      formDataToSend.append("skills", formData.skills);
      formDataToSend.append("availability", formData.availability);
      formDataToSend.append("profilePicture", formData.profilePicture); // Append file
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        body: formDataToSend, // Send FormData
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("User registered successfully!");
        window.location.href = "/";
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  





  return (
    <div className="main-container">
      {/* Image beside the signup form */}
      <div className="image-container">
        <img src="/images/signup-acc.png" alt="Signup" />
      </div>

      {/* Signup Form */}
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name:</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Phone Number:</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Select Role:</label>
            <select name="role" value={formData.role} onChange={handleRoleChange}>
              <option value="customer">Customer</option>
              <option value="tailor">Tailor</option>
            </select>
          </div>

          {/* Tailor-Specific Fields */}
          {formData.role === "tailor" && (
            <div className="tailor-fields">
              <div className="input-group">
                <label>Profile Picture:</label>
                <input type="file" name="profilePicture" onChange={handleChange} accept="image/*" />
              </div>

              <div className="input-group">
                <label>Locality:</label>
                <input type="text" name="locality" value={formData.locality} onChange={handleChange} />
              </div>

              <div className="input-group">
                <label>Skills:</label>
                <input type="text" name="skills" value={formData.skills} onChange={handleChange} />
              </div>

              <div className="input-group">
                <label>Availability:</label>
                <input type="text" name="availability" value={formData.availability} onChange={handleChange} />
              </div>
            </div>
          )}

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
