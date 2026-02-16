import { useState } from "react";
function EditUserModal({ user, onClose,onUpdate }) {
  
  const [userDetails, setUserDetails] = useState(user);

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdateUser = () => {
    onUpdate(userDetails);
  }
    return (
      <div className="modal show d-block" style={{ background: "#00000080" }}>
        <div className="modal-dialog">
          <div className="modal-content">
  
            <div className="modal-header">
              <h5 className="modal-title">Edit User Details</h5>
              <button className="btn-close" onClick={onClose}></button>
            </div>
  
            <div className="modal-body">
              <p><input type ="text" className="container" name="userName" value={userDetails.userName} onChange={handleChange}/></p>
              <p><input type ="email" className="container" name="email" value={userDetails.email} onChange={handleChange}/></p>
              <p><input type ="password" className="container" name="password" value={userDetails.password} onChange={handleChange}/></p>
              <p><select className="container" name="gender"value={userDetails.gender} onChange={handleChange}>
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select></p>
              <p><input type ="text" className="container" name="address" value={userDetails.address} onChange={handleChange}/></p>
              <p><select className="container" name="status" value= {userDetails.isActive} onChange={handleChange}>
                <option value={1}>Active</option>
              <option value={0}>Deactive</option>
            </select></p>   
                
                
              
              
            </div>
  
            <div className="modal-footer">
            <button className="btn btn-primary" onClick={handleUpdateUser}>
                Update
              </button>
              <button className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
  
          </div>
        </div>
      </div>
    );
  }
  
  export default EditUserModal;
  