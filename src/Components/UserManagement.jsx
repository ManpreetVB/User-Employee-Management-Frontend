import { useEffect, useState } from "react";
import UserModal from "../components/UserModal";
import {
    GetAllUsersService,
    UpdateUserService ,
    DeleteUserService ,
    AddUserService,
    ApproveRejectUserService
} from "../Services/UserService";
import EditUserModal from "../components/EditUserModal";
import AddUserModal from "../components/AddUserModal";


const  UserManagement = () => {
    const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);


  useEffect(() => {
    fetchUsers();
  }, []);

async function handleAddUser(newUser) {
  try {
    await AddUserService(newUser);
    alert("User added successfully");
    setShowAddModal(false);
    fetchUsers();
  } catch (error) {
    console.error(error);
    alert("Add user failed");
  }
}



  async function fetchUsers() {
    try {
      const res = await GetAllUsersService();
      setUsers(res.data);  
    } catch (error) {
      console.error("Failed to load users", error);
    } finally {
      setLoading(false);
    }
  }

//   async function handleApprove(user) {
//     try {
//       const updatedUser = { ...user, status: "Approved" }; 
//       const res = await UpdateUserService(updatedUser);
//       alert(res.data);
//       fetchUsers();
//     } catch (err) {
//       console.error(err);
//       alert("Approve failed");
//     }
//   }

  async function handleUpdateUser(updatedUser) {
    console.log( updatedUser);
  
    try {
      await UpdateUserService(updatedUser);
      alert("User updated successfully");
      setShowEditModal(false);
      fetchUsers();
    } catch (error) {
      console.error(error);
      alert("Update failed");
    }
  }
  
  
  
  async function DeleteUser(UserId) {
    if (!window.confirm("Are you sure to delete?")) return;

    try {
      await DeleteUserService(UserId);
      fetchUsers(); 
    } catch (error) {
      console.error("Delete failed", error);
    }
  }


  const handleApprove = async (id) => {
    await ApproveRejectUserService(id, 1);
    fetchUsers();
};

const handleReject = async (id) => {
    await ApproveRejectUserService(id, 0);
    fetchUsers();
};

  if (loading) return <h4>Loading users...</h4>;
  return (
    
    <div className="container mt-4">
          <div className="d-flex justify-content-between align-items-center">
          <h2>Admin Panel - User Management</h2>
            <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
              Add User
           </button>
    </div>
          <table className="table table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>UserId</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Password</th>
                <th>Gender</th>
                <th>Address</th>
               
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
    
            <tbody>
              {users.map(user => (
                <tr key={user.userId}>
                  <td>{user.userId}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.gender}</td>
                  <td>{user.address}</td>
                 
                  <td>{user.isActive===1?'Active':'Deactive'}</td>
                  <td>
                    <button
                      className="btn btn-info btn-sm me-2"
                      onClick={() => {
                        setSelectedUser(user);
                        setShowModal(true);
                      }}
                    >
                      View
                    </button>
    
                    {user.status !== "Approved" && (
      <button
        type="button"
        className="btn btn-warning btn-sm me-2"
        onClick={() => {
            setSelectedUser(user);
            setShowEditModal(true);
          }}
      >Edit
       
      </button>
    )}
    
    
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => DeleteUser(user.userId)}
                    >
                      Delete
                    </button>
    
    <td>
        {user.isActive === 0 && (
            <button
                className="btn btn-success btn-sm me-2"
                onClick={() => handleApprove(user.userId)}
            >
                Approve
            </button>
        )}
    
        {user.isActive === 1 && (
            <button
                className="btn btn-warning btn-sm"
                onClick={() => handleReject(user.userId)}
            >
                Reject
            </button>
        )}
    </td>
    
    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    
          {showModal && (
            <UserModal
              user={selectedUser}
              onClose={() => setShowModal(false)}
            />
          )}
           {showEditModal && (
            <EditUserModal
              user={selectedUser}
              onClose={() => setShowEditModal(false)}
              onUpdate={handleUpdateUser}
            />
          )}
          {showAddModal && (
      <AddUserModal
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddUser}
      />
    )}
    
    
    </div>
      
    
  )
}

export default UserManagement
