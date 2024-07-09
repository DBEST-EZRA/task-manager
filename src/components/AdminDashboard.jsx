import React from "react";
import Orders from "./Orders";

const AdminDashboard = () => {
  return (
    <div>
      <button>Add task</button>
      <button>View bidders</button>
      <button>Post Message</button>
      <button>Approve users</button>
      <button>Add user</button>
      <Orders />
    </div>
  );
};

export default AdminDashboard;
