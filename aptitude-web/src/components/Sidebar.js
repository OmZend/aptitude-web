import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FaCalculator, FaBrain, FaBook, FaChartPie, FaGlobe } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Aptitude Prep</h2>
      <ul>
        <li>
          <Link to="/quantitative">
            <FaCalculator /> Quantitative Aptitude
          </Link>
        </li>
        <li>
          <Link to="/logical">
            <FaBrain /> Logical Reasoning
          </Link>
        </li>
        <li>
          <Link to="/verbal">
            <FaBook /> Verbal Ability
          </Link>
        </li>
        <li>
          <Link to="/data-interpretation">
            <FaChartPie /> Data Interpretation
          </Link>
        </li>
        <li>
          <Link to="/general-knowledge">
            <FaGlobe /> General Knowledge
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
