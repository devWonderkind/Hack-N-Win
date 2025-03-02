import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Startup Founder"); // Default role
  const [walletAddress, setWalletAddress] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Function to handle user registration
  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = { name, email, password, role, walletAddress };

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registration failed");
      }

      alert("Registration successful! ✅");
      navigate(`/login?role=${role.toLowerCase()}`); // Redirect to role-specific login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-6">
      <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-md text-center">
        <h2 className="text-3xl font-serif font-bold">
          Register as {role === "Sponsor" ? "Sponsor" : "Startup Founder"}
        </h2>
        <p className="text-gray-500 mt-2">Fill in your details to create an account</p>

        {/* Display error messages */}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        {/* Registration Form */}
        <form className="mt-4" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 mt-4 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <input
            type="text"
            placeholder="Type Your Solana Wallet Address"
            className="w-full border p-2 mt-2 rounded"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
          {/* Connect Solana Wallet Button (To be implemented later) */}
          <button type="button" className="w-full bg-blue-400 text-white p-2 mt-4 rounded-full hover:bg-blue-700">
            Connect With Solana Wallet
          </button>

          {/* Register Button */}
          <button type="submit" className="w-full bg-green-600 text-white p-2 mt-4 rounded-full hover:bg-green-700">
            Register
          </button>
        </form>

        <p className="mt-4 text-gray-600">
          Already have an account?{" "}
          <a href={`/login?role=${role.toLowerCase()}`} className="text-blue-600">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
