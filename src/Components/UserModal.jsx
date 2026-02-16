function UserModal({ user, onClose }) {
    return (
      <div className="modal show d-block" style={{ background: "#00000080" }}>
        <div className="modal-dialog">
          <div className="modal-content">
  
            <div className="modal-header">
              <h5 className="modal-title">User Details</h5>
              <button className="btn-close" onClick={onClose}></button>
            </div>
  
            <div className="modal-body">
              <p><b>Name:</b> {user.userName}</p>
              <p><b>Email:</b> {user.email}</p>
              <p><b>Password:</b> {user.password}</p>
              <p><b>Gender:</b> {user.gender}</p>
              <p><b>Address:</b> {user.address}</p>
              <p><b>IsActive:</b> {user.isActive}</p>
              
            </div>
  
            <div className="modal-footer">
           
              <button className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
  
          </div>
        </div>
      </div>
    );
  }
  
  export default UserModal;
  