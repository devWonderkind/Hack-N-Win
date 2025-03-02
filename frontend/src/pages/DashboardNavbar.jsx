import { Link, useNavigate } from "react-router-dom";

const DashboardNavbar = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between">
      <h1 className="text-2xl font-serif font-bold">
        {role === "Startup Founder" ? "Founder Dashboard" : "Sponsor Dashboard"}
      </h1>
      <div className="flex gap-4">
        {role === "Startup Founder" ? (
          <>
            <Link to="/founder-dashboard" className="hover:text-yellow-400">Home</Link>
            <Link to="/founder/upload-product" className="hover:text-yellow-400">Upload Product</Link>
          </>
        ) : (
          <>
            <Link to="/sponsor-dashboard" className="hover:text-yellow-400">Home</Link>
            <Link to="/sponsor/browse-startups" className="hover:text-yellow-400">Browse Startups</Link>
          </>
        )}
        <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded-full hover:bg-red-700">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
