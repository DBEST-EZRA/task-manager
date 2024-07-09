import React, { useEffect, useState } from "react";

const Navbar = ({
  isSidebarHidden,
  toggleSidebar,
  isDarkMode,
  toggleDarkMode,
}) => {
  const [totalCount, setTotalCount] = useState(0);

  return (
    <nav>
      <i className="bx bx-menu" onClick={toggleSidebar}></i>
      <form action="#">
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button type="button" className="search-btn">
            <i className="bx bx-search"></i>
          </button>
        </div>
      </form>
      <input
        type="checkbox"
        id="switch-mode"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="switch-mode" className="switch-mode"></label>
      <a href="#" className="notification">
        <i className="bx bxs-bell"></i>
        <span className="num">{totalCount}</span>
      </a>
      <a href="#" className="profile">
        <img src="https://via.placeholder.com/36" alt="profile" />
      </a>
    </nav>
  );
};

export default Navbar;
