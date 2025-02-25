import React, { useEffect, useState } from "react";
import axios from "axios";
import { MetroSpinner } from "react-spinners-kit";
import { db } from "./Config";

const MainContent = () => {
  const [tasks, setTasks] = useState([]);
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  const generateRandomNumber = () => {
    const min = 120;
    const max = 700;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  };

  const randomNumber = generateRandomNumber();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/tasks");
        setTasks(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tasks: ", error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get("http://localhost:5000/notices");
        setNotices(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching notices: ", error);
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Havard Writers Hub</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                Dashboard
              </a>
            </li>
          </ul>
        </div>
        <a href="#" className="btn-download">
          <i className="bx bxs-cloud-download"></i>
          <span className="text">Terms and Conditions</span>
        </a>
      </div>
      <ul className="box-info">
        <li>
          <i className="bx bxs-calendar-check"></i>
          <span className="text">
            <h3>{randomNumber}</h3>
            <p>Available Tasks</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-group"></i>
          <span className="text">
            <h3>0</h3>
            <p>Pending Tasks</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-dollar-circle"></i>
          <span className="text">
            <h3>kes 0</h3>
            <p>Total Balance</p>
          </span>
        </li>
      </ul>
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Task Orders</h3>
            <i className="bx bx-search"></i>
            <i className="bx bx-filter"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Deadline</th>
                <th>Bid</th>
                <th>Price</th>
              </tr>
            </thead>
            {loading ? (
              <div className="spinner">
                <MetroSpinner size={40} color="orangered" loading={loading} />
              </div>
            ) : (
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id}>
                    <td>
                      <p>
                        <span className="title-bold">{task.title}</span>{" "}
                        {task.description}
                      </p>
                    </td>
                    <td>{task.deadline}</td>
                    <td>
                      <button className="bid-button">Bid</button>
                    </td>
                    <td>
                      <p className="amount-d">{task.price}</p>
                    </td>
                  </tr>
                ))}

                {/* More rows as needed */}
              </tbody>
            )}
          </table>
        </div>
        <div className="todo">
          <div className="head">
            <h3>Admin Notices</h3>
            <i className="bx bx-plus"></i>
            <i className="bx bx-filter"></i>
          </div>
          {loading ? (
            <div className="spinner">
              <MetroSpinner size={40} color="orangered" loading={loading} />
            </div>
          ) : (
            <ul className="todo-list">
              {notices.map((notice) => (
                <li key={notice.id} className="not-completed">
                  <p>{notice.message}</p>
                  <i className="bx bx-dots-vertical-rounded"></i>
                </li>
              ))}

              {/* More todo items as needed */}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
