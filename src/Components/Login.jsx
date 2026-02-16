import { useState } from "react"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LoginService } from "../Services/AuthService";


const Login = () => {
 const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await LoginService(form);
            const user = response.data;

            if (user && user.userId > 0) {
                // Save user details in localStorage
                localStorage.setItem("loggedUser", JSON.stringify(user));
                localStorage.setItem("userName", user.userName);
                localStorage.setItem("email", user.email);

                toast.success("Login successful");
                navigate("/dashboard"); 
            } else {
                toast.error("Invalid email or password");
            }
        } catch (error) {
            console.error(error);
            toast.error("Login failed. Check your credentials or server.");
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "500px" }}>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
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
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
            <p className="mt-3">
             Don't have an account? <a href="/register">Register here</a>
            </p>
      
    </div>
  )
}

export default Login
