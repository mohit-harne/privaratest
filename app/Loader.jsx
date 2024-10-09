"use client";
import React, { useEffect, useState } from "react";
import "./Loader.css";

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay, replace this with actual logic if needed
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="pl">
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__text">Loading…</div>
        </div>
      </div>
    );
  }

  return children; // Render the children if not loading
};

export default Loader;
