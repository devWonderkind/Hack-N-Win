import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/Auth/AuthPage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import FounderDashboard from "./pages/Dashboard/FounderDashboard";
import SponsorDashboard from "./pages/Dashboard/SponsorDashboard";
import UploadProduct from "./pages/Dashboard/UploadProduct";
import BrowseStartups from "./pages/Dashboard/BrowseStartups";
import ProtectedRoute from "./components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes for Startup Founders */}
        <Route element={<ProtectedRoute allowedRoles={["Startup Founder"]} />}>
          <Route path="/founder-dashboard" element={<FounderDashboard />} />
          <Route path="/upload-product" element={<UploadProduct />} />
        </Route>

        {/* Protected Routes for Sponsors */}
        <Route element={<ProtectedRoute allowedRoles={["Sponsor"]} />}>
          <Route path="/sponsor-dashboard" element={<SponsorDashboard />} />
          <Route path="/browse-startups" element={<BrowseStartups />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
