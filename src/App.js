// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import homepage from "./components/homepage";
// import Login from "./Login";
// import Contact from "./Contact";

// const App = () => {
//     return (
//         <Router>
//             <Navbar />
//             <Routes>
//                 <Route path="/" element={<homepage />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/contact" element={<Contact />} />
//             </Routes>
//             <Footer />
//         </Router>
//     );
// };

// export default App;
















// import { Routes, Route } from "react-router-dom";
// import Home from "./components/Home"; // Your home.js file containing Navbar, Carousel, etc.
// import Login from "./components/Login"; // Your login.js file

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />  
//         <Route path="/login" element={<Login />} />
        
//       </Routes>
//     </div>
//   );
// }

// export default App;
 



 

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homepage";
import Signup from "./components/Signup";
import Login1 from "./components/Login1";
import Contact from "./components/Contact";
import CustomerDashboard from "./components/CustomerDashboard";
import TailorDashboard from "./components/tailor-exp";
import SearchResults from "./components/SearchResults";
import CustomerRequest from "./components/CustomerRequest";
import Services from "./components/Services";
import SubmitReview from "./components/SubmitReview";
import TailorReviews from "./components/TailorReviews";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login1/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/tailor-dashboard" element={<TailorDashboard />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/customer-request/:tailorId" element={<CustomerRequest />} />
        <Route path="/customerrequest" element={<CustomerRequest />} />
        <Route path="/submit-review/:tailorId" element={<SubmitReview />} />
        <Route path="/tailor-reviews/:tailorId" element={<TailorReviews />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;










// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/homepage"; // Your home.js file containing Navbar, Carousel, etc.
// import Contact from "./components/Contact";
// import Login from "./components/Login"; // Your login.js file
// // import Navbar from "./Navbar";
// // import Footer from "./Footer";

// function App() {
//   return (
//     <Router>
//       {/* <Navbar /> */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//       {/* <Footer /> */}
//     </Router>
//   );
// }

// export default App;





 