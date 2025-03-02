import { Link } from "react-router-dom";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const DashboardLayout = ({ children, role }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6">
        <h2 className="text-3xl font-serif font-bold mb-6">{role} Dashboard</h2>
        <nav className="space-y-4">
          <Link to={role === "Startup" ? "/founder-dashboard" : "/sponsor-dashboard"} className="block text-gray-300 hover:text-yellow-400">Home</Link>
          {role === "Startup" && <Link to="/upload-product" className="block text-gray-300 hover:text-yellow-400">Upload Product</Link>}
          {role === "Sponsor" && <Link to="/browse-startups" className="block text-gray-300 hover:text-yellow-400">Browse Startups</Link>}
          <Link to="/ai-matching" className="block text-gray-300 hover:text-yellow-400">AI Matching</Link>
          <Link to="/messages" className="block text-gray-300 hover:text-yellow-400">Messages</Link>
          <WalletMultiButton className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold mt-4" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
