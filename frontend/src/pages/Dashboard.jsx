import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login"); // Redirect if no token
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/dashboard", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error);
        }

        setUser(data.user);
      } catch (error) {
        console.error("Dashboard error:", error);
        navigate("/login"); // Redirect if unauthorized
      }
    };

    fetchDashboard();
  }, [navigate]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-6">
      <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-md text-center">
        <h2 className="text-3xl font-serif font-bold">Welcome, {user?.role}!</h2>
        <p className="text-black mt-2">You are logged in successfully.</p>
      </div>
    </div>
  );
};

export default Dashboard;
