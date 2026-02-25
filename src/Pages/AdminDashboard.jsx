import { useState } from "react";
import UserManagement from "../components/UserManagement";
import EmployeeManagement from "../components/EmployeeManagement";

function AdminDashboard() {

  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="container mt-4">

      <h2>Admin Panel</h2>

      <div className="mb-3">
        <button
          className={`btn me-2 ${activeTab === "users" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setActiveTab("users")}
        >
          User Management
        </button>

        <button
          className={`btn ${activeTab === "employees" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => setActiveTab("employees")}
        >
          Employee Management
        </button>
      </div>

      {activeTab === "users" && <UserManagement />}
      {activeTab === "employees" && <EmployeeManagement />}

    </div>
  );
}

export default AdminDashboard;
