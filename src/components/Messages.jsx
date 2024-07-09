import React, { useState, useEffect } from "react";
import axios from "axios";

const Messages = () => {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    fetchnotices();
  }, []);

  const fetchnotices = async () => {
    try {
      const response = await axios.get("http://localhost:5000/notices");
      setNotices(response.data);
    } catch (error) {
      console.error("Error fetching notices: ", error);
    }
  };
  return (
    <div className="message-list">
      <h2>Messages</h2>
      <div className="message-cards">
        {notices.map((notice) => (
          <div className="message-card" key={notice.id}>
            <p>{notice.message}</p>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Messages;
