import React, { useState, useEffect } from "react";
import axios from "axios";
import { MetroSpinner } from "react-spinners-kit";

const Messages = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchnotices();
  }, []);

  const fetchnotices = async () => {
    try {
      const response = await axios.get("http://localhost:5000/notices");
      setNotices(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching notices: ", error);
      setLoading(false);
    }
  };
  return (
    <div className="message-list">
      <h2>Messages</h2>
      {loading ? (
        <div className="spinner">
          <MetroSpinner size={40} color="orangered" loading={loading} />
        </div>
      ) : (
        <div className="message-cards">
          {notices.map((notice) => (
            <div className="message-card" key={notice.id}>
              <p>{notice.message}</p>
            </div>
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default Messages;
