import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    window.location.reload(); // Reload to reflect changes in the navbar
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold text-danger" href="#">Pink Parcel</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#kit">Get Your Kit</a></li>
            <li className="nav-item"><a className="nav-link" href="#subscription">Subscription</a></li>

            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#cart"><FaShoppingCart size={22} /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#profile"><FaUserCircle size={22} /></a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item"><a className="btn btn-outline-danger me-2" href="/login">Login</a></li>
                <li className="nav-item"><a className="btn btn-danger text-white" href="/signup">Signup</a></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};


const FeatureCard = ({ title, description }) => {
  const [active, setActive] = useState(false);

  return (
    <div 
      className={`col-md-4 feature-card p-4 ${active ? "active" : ""}`}
      onClick={() => setActive(!active)}
      style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease", cursor: "pointer" }}
    >
      <h4 className="fw-bold">{title}</h4>
      <p>{description}</p>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <section id="home" className="hero d-flex align-items-center justify-content-center text-center text-white vh-100 bg-danger text-white">
        <div>
          <h1 className="fw-bold">Complete Period Care, Delivered</h1>
          <p className="lead">Track your cycle, get a monthly or yearly subscription, and consult with gynecologists.</p>
          <a href="#kit" className="btn btn-light btn-lg text-danger fw-bold">Order Your Kit</a>
        </div>
      </section>
      
      <section id="features" className="container my-5 text-center">
        <h2 className="fw-bold text-danger">Why Choose Pink Parcel?</h2>
        <div className="row mt-4">
          <FeatureCard title="Cycle Tracking" description="Accurate period tracking and reminders to keep you prepared." />
          <FeatureCard title="Subscription Plans" description="Monthly or yearly period kits delivered to your doorstep hassle-free." />
          <FeatureCard title="Gynecologist Consultation" description="Exclusive access to expert gynecologists with every subscription." />
        </div>
      </section>
      
      <section id="kits" className="container my-5 text-center">
        <h2 className="fw-bold text-danger">Our Period Kits</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <img src="../../public/Images/1.webp" alt="Basic Kit" className="img-fluid rounded" />
            <h4 className="fw-bold mt-3">Basic Kit</h4>
            <p className="fw-bold text-danger">Rs.128</p>
            <button className="btn btn-danger">Buy Now</button>
          </div>
          <div className="col-md-4">
            <img src="../../public/Images/2.webp" alt="Standard Kit" className="img-fluid rounded" />
            <h4 className="fw-bold mt-3">Standard Kit</h4>
            <p className="fw-bold text-danger">Rs.268</p>
            <button className="btn btn-danger">Buy Now</button>
          </div>
          <div className="col-md-4">
            <img src="../../public/Images/3.webp" alt="Premium Kit" className="img-fluid rounded" />
            <h4 className="fw-bold mt-3">Premium Kit</h4>
            <p className="fw-bold text-danger">Rs. 543</p>
            <button className="btn btn-danger">Buy Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
