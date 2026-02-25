import { useEffect, useState } from "react";

const Dashboard = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedUser"));
    setUser(storedUser);
  }, []);

  if (!user) {
    return <h4>Loading user data...</h4>;
  }

  return (
    <div className="container mt-4">
      <h2>Welcome, {user.userName}</h2>

      <div className="card p-4 shadow mt-3">
        <p><strong>User ID:</strong> {user.userId}</p>
        <p><strong>Email:</strong> {user.email}</p>
        
        <p>
          <strong>Status:</strong>{" "}
          {user.isActive === 1 ? "Active" : "Inactive"}
        </p>
        <p>
          <strong>Created On:</strong>{" "}
          {new Date(user.createdOn).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
