import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Orders.css";

const Orders = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:5000/tasks");
    setTasks(response.data);
  };

  return (
    <div className="task-list">
      <div className="task-cards">
        {tasks.map((task) => (
          <div className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.price}</p>
            <p>{task.deadline}</p>
            <button className="bid-button">Bid</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
