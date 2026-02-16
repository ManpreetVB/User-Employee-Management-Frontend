import React, { useState } from "react";
import { toast } from "react-toastify";
import { Registration } from "../Services/AuthService";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "", gender: "", address: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            toast.warning("Password and confirm password are not same.");
            return;
        }

        try {
            const response = await Registration({
                UserName: form.name,
                Email: form.email,
                Password: form.password,
                Gender: form.gender,
                Address: form.address
            });

            toast.success(response.data); 
            navigate("/login"); 
        } catch (error) {
            toast.error(error.response?.data || "Registration failed");
        }
    };

    return (
        <div className="container mt-5">
            <h3>Registration</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Name" className="form-control mb-3" value={form.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Enter Email" className="form-control mb-3" value={form.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Enter Password" className="form-control mb-3" value={form.password} onChange={handleChange} required />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control mb-3" value={form.confirmPassword} onChange={handleChange} required />
                <input type="text" name="gender" placeholder="Enter Gender" className="form-control mb-3" value={form.gender} onChange={handleChange} />
                <input type="text" name="address" placeholder="Enter Address" className="form-control mb-3" value={form.address} onChange={handleChange} />
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;
