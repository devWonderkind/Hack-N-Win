import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log("🔹 Server Response:", data);
  
      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }
  
      // 🔹 Store JWT token & User Role in local storage
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
  
      alert("Login successful! ✅");
  
      // Redirect based on role
      if (data.role === "Startup Founder") {
        navigate("/founder-dashboard");
      } else if (data.role === "Sponsor") {
        navigate("/sponsor-dashboard");
      }
    } catch (error) {
      console.error("❌ Login Fetch Error:", error.message);
      setError(error.message);
    }
  };
  
  

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-6">
      <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-md text-center">
        <h2 className="text-3xl font-serif font-bold">Login</h2>
        <p className="text-gray-500 mt-2">Enter your details to sign in</p>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <form className="mt-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mt-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mt-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full bg-green-600 text-white p-2 mt-4 rounded-full hover:bg-green-700">
            Login
          </button>
        </form>

        <p className="mt-4 text-gray-600">
          Don't have an account? <a href="/register" className="text-blue-600">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
