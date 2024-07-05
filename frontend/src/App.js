import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar.js";
import AllCategories from "./pages/AllCategories.js";
import TopFifty from "./pages/TopFifty.js";
import Home from "./pages/Home.js";
import CustomNav from "./components/CustomNav.js";
import Register from "./components/Register.js";
import UserServiceForm from "./components/UserServiceForm.js";
import ServiceDetails from "./pages/ServiceDetails.js";
import SearchResults from "./pages/SearchResults.js";

import AboutUs from "./pages/AboutUs.js";

function App() {
  return (
    <div>
      <Router>
        {/* {isAuthenticated && <Header />} */}
        <CustomNav />
        <Routes>
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search/:searchTerm" element={<SearchResults />} />
          <Route path="/request-service" element={<UserServiceForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
