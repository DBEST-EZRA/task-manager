import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Analytics = () => {
  const dataTasks = [
    { name: "Jan", tasks: 400 },
    { name: "Feb", tasks: 310 },
    { name: "Mar", tasks: 209 },
    { name: "Apr", tasks: 274 },
    { name: "May", tasks: 385 },
    { name: "Jun", tasks: 239 },
    { name: "Jul", tasks: 347 },
    { name: "Aug", tasks: 401 },
    { name: "Sep", tasks: 305 },
    { name: "Oct", tasks: 207 },
    { name: "Nov", tasks: 273 },
    { name: "Dec", tasks: 188 },
  ];

  const dataUsers = [
    { name: "Jan", users: 400 },
    { name: "Feb", users: 300 },
    { name: "Mar", users: 200 },
    { name: "Apr", users: 278 },
    { name: "May", users: 189 },
    { name: "Jun", users: 239 },
    { name: "Jul", users: 349 },
    { name: "Aug", users: 400 },
    { name: "Sep", users: 300 },
    { name: "Oct", users: 200 },
    { name: "Nov", users: 278 },
    { name: "Dec", users: 599 },
  ];

  return (
    <div style={{ backgroundColor: "#ffffff", padding: "20px" }}>
      <h2>Tasks Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dataTasks}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="tasks"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <h2>Users Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dataUsers}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
