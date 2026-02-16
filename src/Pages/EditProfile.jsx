import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { GetAllUsersService, UpdateUserService } from "../Services/AuthService";

const EditProfile = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [form, setForm] = useState({
    userId: "",
    userName: "",
    email: "",
    password: "",
    gender: "",
    address: ""
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await GetAllUsersService();
        setUsers(res.data);
      } catch (error) {
        toast.error("Failed to fetch users");
      }
    };
    fetchUsers();
  }, []);

 
  useEffect(() => {
    if (selectedUserId) {
      const user = users.find(u => u.userId === parseInt(selectedUserId));
      if (user) setForm({
        userId: user.userId,
        userName: user.userName,
        email: user.email,
        password: user.password,
        gender: user.gender,
        address: user.address
      });
    }
  }, [selectedUserId, users]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const res = await UpdateUserService(form);

      
      toast.success(res.data || "User updated successfully");
      console.log("Backend response:", res.data);
    } catch (error) 
    {
      console.error(error);
     
      toast.error(error.response?.data || "Update failed");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h3>Edit User</h3>

      <select
        className="form-select mb-3"
        value={selectedUserId}
        onChange={(e) => setSelectedUserId(e.target.value)}
      >
        <option value=""> Select User </option>
        {users.map(user => (
          <option key={user.userId} value={user.userId}>
            {user.userName} ({user.email})
          </option>
        ))}
      </select>

      {selectedUserId && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="Enter Name"
            className="form-control mb-3"
            value={form.userName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="form-control mb-3"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="form-control mb-3"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="gender"
            placeholder="Enter Gender"
            className="form-control mb-3"
            value={form.gender || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Enter Address"
            className="form-control mb-3"
            value={form.address || ""}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Update User
          </button>
        </form>
      )}
    </div>
  );
};

export default EditProfile;
