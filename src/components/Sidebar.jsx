import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isHidden }) => {
  return (
    <div id="sidebar" className={isHidden ? "hide" : ""}>
      <div className="brand">
        <span className="text-logo">Writers Panel</span>
      </div>
      <ul className="side-menu top">
        <li className="active">
          <Link to="/2FyheZmcXV0OQTTxwoQQqE">
            <i className="bx bxs-dashboard"></i>
            <span className="text">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/2FyheZmcXV0OQTTxwoQQqE/tasks">
            <i className="bx bxs-shopping-bag-alt"></i>
            <span className="text">Tasks</span>
          </Link>
        </li>
        <li>
          <Link to="/2FyheZmcXV0OQTTxwoQQqE/analytics">
            <i className="bx bxs-doughnut-chart"></i>
            <span className="text">Analytics</span>
          </Link>
        </li>
        <li>
          <Link to="/2FyheZmcXV0OQTTxwoQQqE/messages">
            <i className="bx bxs-message-dots"></i>
            <span className="text">Messages</span>
          </Link>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <Link to="#" className="logout">
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
