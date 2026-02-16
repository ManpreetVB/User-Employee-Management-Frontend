import { useState } from "react";

function AddUserModal({ onClose, onAdd }) {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    gender: "",
    address: "",
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(user);
  }

  return (
    <div className="modal d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5>Add New User</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <input name="userName" className="form-control mb-2" placeholder="User Name" onChange={handleChange} />
              <input name="email" className="form-control mb-2" placeholder="Email" onChange={handleChange} />
              <input name="password" type="password" className="form-control mb-2" placeholder="Password" onChange={handleChange} />
              <input name="gender" className="form-control mb-2" placeholder="Gender" onChange={handleChange} />
              <input name="address" className="form-control mb-2" placeholder="Address" onChange={handleChange} />
            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">Save</button>
              <button type="button" className="btn btn-danger" onClick={onClose}>Cancel</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default AddUserModal;
