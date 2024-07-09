import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Orders.css";
import {
  PushSpinner,
  TraceSpinner,
  RainbowSpinner,
  RingSpinner,
  SwishSpinner,
  PongSpinner,
  MetroSpinner,
  JellyfishSpinner,
} from "react-spinners-kit";

const Orders = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tasks");
      setTasks(response.data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setLoading(false); // Make sure to handle errors appropriately
    }
  };

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      {loading ? (
        <div className="spinner">
          <TraceSpinner
            size={40}
            frontColor="green"
            backColor="orangered"
            loading={loading}
          />
        </div>
      ) : (
        <div className="task-cards">
          {tasks.map((task) => (
            <div className="task-card" key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>{task.price}</p>
              <p>{task.deadline}</p>
              <button className="bid-button">Bid</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
