// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "../styles/login.css";

// // const Login12 = () => {
// //   const [formData, setFormData] = useState({
// //     email: "",
// //     password: "",
// //   });

// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const users = JSON.parse(localStorage.getItem("users")) || [];
// //     const user = users.find((u) => u.email === formData.email);

// //     if (!user) {
// //       setError("No account found. Please sign up.");
// //       return;
// //     }

// //     if (user.password !== formData.password) {
// //       setError("Incorrect password. Try again.");
// //       return;
// //     }

// //     localStorage.setItem("loggedInUser", formData.email);
// //     navigate(user.role === "customer" ? "/customer-dashboard" : "/tailor-dashboard");
// //   };

// //   return (
// //     <div className="loginpage"> 
// //     <div className="container">
// //       <h2>Login</h2>
// //       {error && <p className="error">{error}</p>}
// //       <form onSubmit={handleSubmit}>
// //         <div className="input-group">
// //           <label>Email:</label>
// //           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
// //         </div>

// //         <div className="input-group">
// //           <label>Password:</label>
// //           <input type="password" name="password" value={formData.password} onChange={handleChange} required />
// //         </div>

// //         <button type="submit">Login</button>
// //       </form>
// //       {/* Signup suggestion if account doesn't exist */}
// //       {error && (
// //           <p className="signup-suggestion">
// //             Don't have an account?{" "}
// //             <span onClick={() => navigate("/signup")} className="signup-link">
// //               Sign Up
// //             </span>
// //           </p>
// //         )}
// //     </div>
// //     </div>
// //   );
// // };

// // export default Login12;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import Axios
// import bcrypt from "bcryptjs"; // Import bcryptjs
// import "../styles/login.css";

// const Login12 = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       // Fetch users from API
// //       const response = await axios.get("http://localhost:5000/api/auth/users");
// //       const users = response.data; // Assume API returns an array of users

// //       // Find user by email
// //       const user = users.find((u) => u.email === formData.email);

// //       if (!user) {
// //         setError("No account found. Please sign up.");
// //         return;
// //       }

// //       if (user.password !== formData.password) {
// //         setError("Incorrect password. Try again.");
// //         return;
// //       }

// //       // Store user session
// //       localStorage.setItem("loggedInUser", JSON.stringify(user));

// //       // Navigate based on role
// //       navigate(user.role === "customer" ? "/customer-dashboard" : "/tailor-dashboard");

// //     } catch (err) {
// //       console.error("Error fetching users:", err);
// //       setError("Something went wrong. Try again later.");
// //     }
// //   };


// // const handleSubmit = async (e) => {
// //     e.preventDefault();
  
// //     try {
// //       const response = await axios.post("http://localhost:5000/api/auth/users", formData);
  
// //       localStorage.setItem("token", response.data.token);
// //       localStorage.setItem("loggedInUser", JSON.stringify(response.data.user));
  
// //       navigate(response.data.user.role === "customer" ? "/customer-dashboard" : "/tailor-dashboard");
  
// //     } catch (err) {
// //       setError(err.response?.data?.msg || "Something went wrong. Try again later.");
// //     }
// //   };
  



// const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       // Fetch users from API
//       const response = await axios.get("https://your-api-url.com/users");
//       const users = response.data;
  
//       // Find user by email
//       const user = users.find((u) => u.email === formData.email);
  
//       if (!user) {
//         setError("No account found. Please sign up.");
//         return;
//       }
  
//       // Compare hashed password using bcryptjs
//       const passwordMatch = await bcrypt.compare(formData.password, user.password);
      
//       if (!passwordMatch) {
//         setError("Incorrect password. Try again.");
//         return;
//       }
  
//       // Store user session
//       localStorage.setItem("loggedInUser", JSON.stringify(user));
  
//       // Navigate based on role
//       navigate(user.role === "customer" ? "/customer-dashboard" : "/tailor-dashboard");
  
//     } catch (err) {
//       console.error("Error fetching users:", err);
//       setError("Something went wrong. Try again later.");
//     }
//   };

//   return (
//     <div className="loginpage"> 
//       <div className="container">
//         <h2>Login</h2>
//         {error && <p className="error">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label>Email:</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//           </div>

//           <div className="input-group">
//             <label>Password:</label>
//             <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//           </div>

//           <button type="submit">Login</button>
//         </form>

//         {/* Show Sign Up suggestion if account doesn't exist */}
//         {error === "No account found. Please sign up." && (
//           <p className="signup-suggestion">
//             Don't have an account?{" "}
//             <span onClick={() => navigate("/signup")} className="signup-link">
//               Sign Up
//             </span>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login12;









import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";

const Login12 = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors

//     try {
//       const response = await axios.post("http://localhost:5000/api/auth/login", formData, {
//         headers: { "Content-Type": "application/json" },
//       });

//       // Store token & user data
//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("loggedInUser", JSON.stringify(response.data.user));

//       // Navigate based on role, with a fallback
//       if (response.data.user?.role === "customer") {
//         navigate("/customer-dashboard");
//       } else if (response.data.user?.role === "tailor") {
//         navigate("/tailor-dashboard");
//       } else {
//         navigate("/dashboard"); // Default if role is missing
//       }
//     } catch (err) {
//       setError(err.response?.data?.msg || "Invalid email or password.");
//     }
//   };


// const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors
  
//     try {
//       const response = await axios.post("http://localhost:5000/api/auth/login", formData, {
//         headers: { "Content-Type": "application/json" },
//       });
  
//       console.log("Login Success:", response.data); // ✅ Debug log
  
//       if (!response.data.token || !response.data.user) {
//         setError("Invalid server response.");
//         return;
//       }
  
//       // Store token & user data
//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("loggedInUser", JSON.stringify(response.data.user));
  
//       // Navigate based on role
//       if (response.data.user?.role === "customer") {
//         navigate("/customer-dashboard");
//         // navigate("/");
//       } else if (response.data.user?.role === "tailor") {
//         navigate("/tailor-dashboard");
//         // navigate("/");
//       } else {
//         navigate("/dashboard"); // Default page
//       }
//     } catch (err) {
//       console.error("Login Error:", err.response?.data || err); // ✅ Debug log
//       setError(err.response?.data?.msg || "Login failed. Please try again.");
//     }
//   };
const handleLogin = async (e) => {
  e.preventDefault();
  setError(""); // Clear previous errors

  try {
    const response = await axios.post("http://localhost:5000/api/auth/login", formData, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("Login Success:", response.data); // ✅ Debug log

    if (!response.data.token || !response.data.user) {
      setError("Invalid server response.");
      return;
    }

    // Store token & user data
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("loggedInUser", JSON.stringify(response.data.user));

    // Navigate based on role
    if (response.data.user?.role === "customer") {
      navigate("/customer-dashboard");
    } else if (response.data.user?.role === "tailor") {
      navigate("/tailor-dashboard");
    } else {
      navigate("/dashboard"); // Default page
    }
  } catch (err) {
    console.error("Login Error:", err.response?.data || err); // ✅ Debug log
    if (err.response?.data?.msg?.includes("User not found")) {
      setError("Don't have an account? Sign up now.");
    } else {
      setError(err.response?.data?.msg || "Login failed. Please try again.");
    }
  }
};

  return (
    <div className="loginpage">
      <div className="container">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <button type="submit">Login</button>
        </form>

        {/* Signup suggestion if user doesn't have an account */}
        {/* {error.includes("Invalid Email or Password") && (
          <p className="signup-suggestion">
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")} className="signup-link">
              Sign Up
            </span>
          </p>
        )} */}


      
      {/* Sign-up suggestion if user doesn't have an account */}
      {error === "Don't have an account? Sign up now." && (
        <p className="signup-suggestion">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="signup-link"
          >
            Sign Up
          </span>
        </p>
      )}

      </div>
    </div>
  );
};

export default Login12;


