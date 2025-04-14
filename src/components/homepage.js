import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/styles.css";

const images = [
  { src: "/images/tailor-hp3.jpg", text: "Find Expert Tailors Near You, Hassle-Free!" },
  { src: "/images/tailor-hp.png", text: "Get stitching estimates and receive outfits on time!" },
  { src: "/images/tailors-hp3.jpg", text: "Custom Men's Tailoring Available!" }
];

const Navbar = () => {
  const [user,setUser] = useState(null);
  // const setUser = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null);
  const [searchLocation, setSearchLocation] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   console.log("Token found in localStorage:", token);
  //   if (token) {
  //     axios
  //       .get("http://localhost:5000/api/auth/users", {
  //         headers: { Authorization: `Bearer ${token}` },
  //       })
  //       .then((response) => {
  //         console.log("User Data Response:", response.data);
  //         console.log("hello")
  //         if (response.data.success) {
  //           setUser(response.data.user);
  //           setIsLoggedIn(true);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching user:", error);
  //         setIsLoggedIn(false);
  //       });
// }

  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setShowDropdown(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []); // Removed unnecessary dependencies
   

  const handleProfileClick = (event) => {
    event.stopPropagation();
    
    const role = localStorage.getItem("userRole"); // Get role from storage
    console.log("Navigating to:", role === "tailor" ? "/tailor-dashboard" : "/customer-dashboard");
    if (role) {
      navigate(role === "tailor" ? "/tailor-dashboard" : "/customer-dashboard");
      setShowDropdown(false);
    } else {
      console.error("User role is undefined");
    }
  };
  
  
  
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsLoggedIn(false);
    navigate("/");
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }, []);




   



  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token);
    setIsLoggedIn(!!token); // Set login state based on token presence
  
    if (token) {
      axios
        .get("http://localhost:5000/api/auth/users", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log("API Response (Logged-in User):", response.data);
  
          if (response.data.success && response.data.user) {
            const currentUser = response.data.user; // ✅ Logged-in user only
            setUser(currentUser);
            setIsLoggedIn(true);
            localStorage.setItem("userRole", currentUser.role);  // ✅ Save role of logged-in user
            localStorage.setItem("loggedInUser", JSON.stringify(currentUser)); // ✅ Save user details
          } else {
            console.log("No logged-in user found in response.");
          }
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
          setIsLoggedIn(false);
        });
    }
  
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  








  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   console.log("Token from localStorage:", token);
  //   setIsLoggedIn(!!token); // Set login state based on token presenc  
  //   if (token) {
  //     axios
  //       .get("http://localhost:5000/api/auth/users", {
  //         headers: { Authorization: `Bearer ${token}` },
  //       })
  //       .then((response) => {
  //         console.log("API Response:", response.data); // Debug entire API response
  
  //         if (Array.isArray(response.data) && response.data.length > 0) {
  //           const lastUser = response.data[response.data.length - 1];  // ✅ Get last user
  //           setUser(lastUser);  
  //           setIsLoggedIn(true);
  //           localStorage.setItem("userRole", lastUser.role);  // ✅ Store role
  //           localStorage.setItem("loggedInUser", JSON.stringify(lastUser)); // ✅ Correct

  //           // localStorage.setItem("loggedInUser", lastUser.email);  // ✅ Store last user's email
  //           localStorage.setItem("users", JSON.stringify(response.data));  // ✅ Store all users
  //           console.log("Last User Role Saved:", lastUser.role);
  //         } else {
  //           console.log("No user data found.");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching user:", error);
  //         setIsLoggedIn(false);
  //       });
  //   }
  
  
  
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setShowDropdown(false);
  //     }
  //   };
  
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);
  
  

  // 🔹 Function to handle search
//   const handleSearch = () => {
//     if (!searchLocation?.trim()) return; // Prevent empty search

//     // Retrieve all users from localStorage
//     const allUsers = JSON.parse(localStorage.getItem("users")) || [];

//     // Filter only tailors from users
//     const tailors = allUsers.filter(user => user.role === "tailor");

//     // Filter tailors based on location search (handling undefined locations)
//     const filteredTailors = tailors.filter(tailor =>
//       tailor.location?.toLowerCase().includes(searchLocation.toLowerCase()) // Ensure tailor.location is defined
//     );

//     // Store filtered tailors & search location in localStorage
//     localStorage.setItem("searchResults", JSON.stringify(filteredTailors));
//     localStorage.setItem("searchLocation", searchLocation);

//     // Redirect to search results page
//     navigate("/search-results");
// };



const handleSearch = () => {
  if (!searchLocation?.trim()) return; // Prevent empty search

  // Retrieve all users from localStorage
  const allUsers = JSON.parse(localStorage.getItem("users")) || [];

  console.log("All Users:", allUsers); // Debugging

  // Filter only tailors from users
  const tailors = allUsers.filter(user => user.role === "tailor");

  console.log("Filtered Tailors:", tailors); // Debugging

  // Ensure location is properly formatted
  const searchQuery = searchLocation.trim().toLowerCase();

  // Filter tailors based on locality (instead of location)
  const filteredTailors = tailors.filter(tailor => {
      const tailorLocality = tailor.locality?.trim().toLowerCase() || ""; // Fix: Use `locality`
      console.log(`Comparing: ${tailorLocality} with ${searchQuery}`);
      return tailorLocality.includes(searchQuery);
  });

  console.log("Final Filtered Tailors:", filteredTailors); // Debugging

  // Store filtered tailors & search location in localStorage
  localStorage.setItem("searchResults", JSON.stringify(filteredTailors));
  localStorage.setItem("searchLocation", searchLocation);

  // Redirect to search results page
  navigate("/search-results");
};



// const [userCount, setUserCount] = useState(0);
 
// useEffect(() => {
//   axios.get("http://localhost:5000/api/users/total-users")
//     .then(res => {
//       setUserCount(res.data.count);
//     })
//     .catch(err => {
//       console.error("Error fetching user count:", err);
//     });
// }, []);


 





// const [count, setCount] = useState(0);

 
// useEffect(() => {
//   // Call the POST endpoint to increment the count
//   axios.post("http://localhost:5000/api/visitors/visit")
//     .then((res) => {
//       setCount(res.data.count);
//       console.log("Visitor Count Response:", res.data);
//     })
//     .catch((err) => {
//       console.error("Error fetching visitor count:", err);
//     });
// }, []);

 





  return (
    <nav className="navbar" id="nav">
      <div className="left-section">
        <div className="logo">
          <span className="ai-name">SewSmart</span>
        </div>
        {/* <div className="search-bar">
          <input type="text" placeholder="Enter your location" />
          <button onClick={() => alert("Search functionality to be implemented")}>Search</button>
        </div> */}

    {/* <div>
      <h2>Total Registered Users: {userCount}</h2>
    </div> */}


        <div className="search-bar">
        <input
          type="text"
          placeholder="Enter your location"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      </div>

      {/* Profile Icon (Only Show When Logged In) */}
      {isLoggedIn && (
        <div className="profile-icon-container" ref={dropdownRef} onClick={() => setShowDropdown(!showDropdown)}>
          <img src="/images/profile-image.jpg" alt="Profile" className="profile-icon" />
          {showDropdown && (
            <div className="dropdown-menu">
              <button onClick={handleProfileClick}>Your Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      )}

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <a href="#header">About Us</a>
        <Link to="/services">TailorsList</Link>
        {!isLoggedIn && <Link to="/signup">SignUp</Link>}
        <Link to="/contact">Contact Us</Link>
      </div>
      {/* <div> */}
      {/* <button className="nav-btn">Count: {userCount}</button> */}
      {/* <p>Count: {userCount}</p> */}
    {/* </div> */}
    </nav>
  );
  
};



function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);


  const [userCount, setUserCount] = useState(0);
 
  useEffect(() => {
    axios.get("http://localhost:5000/api/users/total-users")
      .then(res => {
        setUserCount(res.data.count);
      })
      .catch(err => {
        console.error("Error fetching user count:", err);
      });
  }, []);



  return (
    <div className="carousel">
      {images.map((image, i) => (
        <div key={i} className={`carousel-item ${i === index ? "active" : ""}`}>
          <img src={image.src} alt={`Slide ${i}`} className="carousel-image" />
          <div className="overlay">
            {/* <h2>{image.text}</h2> */}
            <h2>Find Expert Tailors Near You, Hassle-Free!</h2>
              <p>Connect with skilled tailors, get stitching estimates, and receive your outfits on time.</p>
              <button className="btn">Find a Tailor</button>
              <button className="btn outline">Join as a Tailor</button>
              <br></br>
              <br></br>
            <div>
      {/* <button className="nav-btn">Count: {userCount}</button> */}
              <h2>Count: {userCount}</h2>
            </div>
          </div>
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
     
  );
}

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        {[
          { icon: "📝", title: "Submit Request", text: "Customers submit their stitching request." },
          { icon: "💰", title: "Get Estimates", text: "Tailors provide cost and time estimates." },
          { icon: "📍", title: "Choose a Tailor", text: "Pick a tailor based on location & ratings." },
          { icon: "✅", title: "Receive Order", text: "Outfit is stitched and delivered on time." }
        ].map((step, i) => (
          <div className="step" key={i}>
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SmartMatching() {
  return (
    <section className="smart-matching">
      <h2>Smart Matching System</h2>
      <div className="matching-container">
        <div className="matching-step">
          <div className="icon">📍</div>
          <h3>Location-Based Matching</h3>
          <p>We find tailors near you to ensure fast service.</p>
        </div>
        <div className="matching-step">
          <div className="icon">⏳</div>
          <h3>Deadline Check</h3>
          <p>System alerts if the tailor is too far to meet your deadline.</p>
        </div>
        <div className="matching-step">
          <div className="icon">⭐</div>
          <h3>Ratings & Reviews</h3>
          <p>Choose tailors based on customer feedback.</p>
        </div>
        <div className="matching-step">
          <div className="icon">✅</div>
          <h3>Best Match Suggestion</h3>
          <p>We suggest the best tailor for your needs.</p>
        </div>
      </div>
    </section>
  );
}


 


function About() {
  return (
    <section className="about">
      <header id="header">
        <h1>About Us</h1>
        <p>Discover our mission and how we connect you with expert tailors effortlessly.</p>
      </header>
      <div className="content">
        <h2>Who We Are</h2>
        <p>We are a platform dedicated to connecting skilled tailors with customers who need high-quality stitching and alterations. Our goal is to make custom tailoring simple, accessible, and hassle-free.</p>
      </div>
      <div className="content">
        <h2>Our Mission</h2>
        <p>Our mission is to bridge the gap between professional tailors and customers by providing a seamless experience for both.</p>
      </div>
      <div className="content">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Expert tailors at your service</li>
          <li>Easy and quick bookings</li>
          <li>Affordable and transparent pricing</li>
          <li>Timely delivery</li>
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 SewSmart | All rights reserved</p>
      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms & Conditions</a>
      </div>
    </footer>
  );

}

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <HowItWorks />
      <SmartMatching />
      <About />
      <Footer />
    </div>
  );
}

export default Home;       

