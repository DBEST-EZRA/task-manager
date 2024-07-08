import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./styles.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Orders from "./components/Orders";
import Analytics from "./components/Analytics";
import Messages from "./components/Messages";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SignupDetails from "./components/SignupDetails";

const AppContent = () => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(
    window.innerWidth < 768
  );
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarHidden(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldHideSidebarAndNavbar =
    location.pathname === "/" || location.pathname === "/signup";

  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`}>
      {!shouldHideSidebarAndNavbar && <Sidebar isHidden={isSidebarHidden} />}
      <div
        id="content"
        style={{
          left:
            !shouldHideSidebarAndNavbar && isSidebarHidden ? "60px" : "280px",
          width:
            !shouldHideSidebarAndNavbar && isSidebarHidden
              ? "calc(100% - 60px)"
              : "calc(100% - 280px)",
        }}
      >
        {!shouldHideSidebarAndNavbar && (
          <Navbar
            isSidebarHidden={isSidebarHidden}
            toggleSidebar={() => setIsSidebarHidden(!isSidebarHidden)}
            isDarkMode={isDarkMode}
            toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          />
        )}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/details" element={<SignupDetails />} />
          <Route path="/2FyheZmcXV0OQTTxwoQQqE" element={<MainContent />} />
          <Route path="/2FyheZmcXV0OQTTxwoQQqE/tasks" element={<Orders />} />
          <Route
            path="/2FyheZmcXV0OQTTxwoQQqE/analytics"
            element={<Analytics />}
          />
          <Route
            path="/2FyheZmcXV0OQTTxwoQQqE/messages"
            element={<Messages />}
          />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
