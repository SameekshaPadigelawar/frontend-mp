import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import "../styles/signup.css"; // Import CSS

function Login1() {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  // const [passwordCriteria, setPasswordCriteria] = useState({
  //   hasUppercase: false,
  //   hasSpecialChar: false,
  //   hasMinLength: false,
  // });


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

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    

    let newErrors = { ...errors };

    if (name === "phone") {
      if (!/^\d{0,10}$/.test(value)) {
        newErrors.phone = "Phone number must be exactly 10 digits.";
      } else {
        delete newErrors.phone;
      }
    }
  
    if (name === "password") {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
      if (!passwordRegex.test(value)) {
        newErrors.password =
          "Password must be 8+ characters with 1 uppercase, 1 lowercase, 1 number & 1 special character.";
      } else {
        delete newErrors.password;
      }
    }
  
    setErrors(newErrors);



    // let newErrors = { ...errors };

    // if (name === "phone") {
    //   if (!/^\d{0,10}$/.test(value)) {
    //     newErrors.phone = "Phone number must be exactly 10 digits.";
    //   } else {
    //     delete newErrors.phone;
    //   }
    // }

    // if (name === "password") {
    //   setPasswordCriteria({
    //     hasUppercase: /[A-Z]/.test(value),
    //     hasSpecialChar: /[@$!%*?&]/.test(value),
    //     hasMinLength: value.length >= 8,
    //   });

    //   if (!/[A-Z]/.test(value)) {
    //     newErrors.password = "At least one uppercase letter required.";
    //   } else if (!/[@$!%*?&]/.test(value)) {
    //     newErrors.password = "At least one special character required.";
    //   } else if (value.length < 8) {
    //     newErrors.password = "Password must be at least 8 characters long.";
    //   } else {
    //     delete newErrors.password;
    //   }
    // }

    // setErrors(newErrors);



    if (type === "file") {
      setFormData({ ...formData, profilePicture: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setFormData((prev) => ({
      ...prev,
      role: selectedRole
    }));
  };

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
      formDataToSend.append("profilePicture", formData.profilePicture);
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        body: formDataToSend,
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log("Signup Response Data:", data); 
        localStorage.setItem("token", data.token); // ✅ Save token in localStorage
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
    <div className="login-container">
       <button className="back-button" onClick={() => navigate("/")}>
      ← Back to Home
    </button>
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
              {/* <input type="password" name="password" value={formData.password} onChange={handleChange} required /> */}
              <input
  type="password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  required
  pattern="^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*\d+)(?=.*[@$!%*?&]+)[A-Za-z\d@$!%*?&]{8,}$"
  title="Password must have at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character."
/>
  {/* <ul className="password-requirements">
  {!passwordCriteria.hasUppercase && <li>🔴 Enter at least one uppercase letter</li>}
  {!passwordCriteria.hasSpecialChar && <li>🔴 Enter at least one special character (@$!%*?&)</li>}
  {!passwordCriteria.hasMinLength && <li>🔴 Password must be at least 8 characters long</li>}
</ul> */}

 

            </div>

            <div className="input-group">
              <label>Phone Number:</label>
              {/* <input type="text" name="phone" value={formData.phone} onChange={handleChange} /> */}
              <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        pattern="^\d{10}$"
        title="Phone number must be exactly 10 digits."
      />
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

            <button type="submit" className="btn">Sign Up</button>
    
            <p className="login-message">
                Already have an account?{" "}
                 <Link to="/login" className="login-link">Login</Link>
             </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login1;
