import { useEffect, useState } from "react";
import {
    GetAllEmployeeService,
    AddEmployeeService,
    UpdateEmployeeService,
    DeleteEmployeeService
} from "../Services/EmployeeService";

function EmployeeManagement() {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        employeeId: 0,
        employeeName: "",
        email: "",
        contactNumber: "",
        gender: "",
        address: "",
        department: "",
        salary: "",
        isActive: 1
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchEmployees();
    }, []);

    async function fetchEmployees() {
        try {
            const res = await GetAllEmployeeService();
            setEmployees(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit() {
        try {
            if (isEditing) {
                await UpdateEmployeeService(formData);
                alert("Employee updated successfully");
            } else {
                await AddEmployeeService(formData);
                alert("Employee added successfully");
            }

            resetForm();
            fetchEmployees();

        } catch (error) {
            console.error(error);
            alert("Error,something went wrong");
        }
    }

    function handleEdit(emp) {
        setFormData(emp);
        setIsEditing(true);
    }

    async function handleDelete(id) {
        if (!window.confirm("Are you sure?")) return;

        try {
            await DeleteEmployeeService(id);
            fetchEmployees();
        } catch (error) {
            console.error(error);
        }
    }

    function resetForm() {
        setFormData({
            employeeId: 0,
            employeeName: "",
            email: "",
            contactNumber: "",
            gender: "",
            address: "",
            department: "",
            salary: "",
            isActive: 1
        });
        setIsEditing(false);
    }

    if (loading) return <h4>Loading Employees...</h4>;

    return (
        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center">
          <h2>Admin Panel - Employee Management</h2>
</div>
          <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
            <div className="card p-3 mb-4">
                <input
                    type="text"
                    name="employeeName"
                    placeholder="Name"
                    className="form-control mb-2"
                    value={formData.employeeName}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control mb-2"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input type="text"
                    name="contactNumber"
                    placeholder="ContactNumber"
                    className="form-control mb-2"
                    value={formData.contactNumber}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    className="form-control mb-2"
                    value={formData.gender}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="form-control mb-2"
                    value={formData.address}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    className="form-control mb-2"
                    value={formData.department}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    className="form-control mb-2"
                    value={formData.salary}
                    onChange={handleChange}
                />

                <button className="btn btn-primary" onClick={handleSubmit}>
                    {isEditing ? "Update" : "Add"}
                </button>

                {isEditing && (
                    <button
                        className="btn btn-secondary ms-2"
                        onClick={resetForm}
                    >
                        Cancel
                    </button>
                )}
            </div>
</div>
</div>
</div>
       
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>EmployeeId</th>
                        <th>EmployeeName</th>
                        <th>Email</th>
                        <th>ContactNumber</th>
                         <th>Gender</th>
                          <th>Address</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.employeeId}>
                            <td>{emp.employeeId}</td>
                            <td>{emp.employeeName}</td>
                            <td>{emp.email}</td>
                            <td>{emp.contactNumber}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.address}</td>
                            <td>{emp.department}</td>
                            <td>{emp.salary}</td>
                            <td>
                                {emp.isActive === 1 ? "Active" : "Inactive"}
                            </td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => handleEdit(emp)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(emp.employeeId)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default EmployeeManagement;
