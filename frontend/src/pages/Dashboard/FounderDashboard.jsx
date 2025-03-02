import DashboardLayout from "../../components/DashboardLayout";

const FounderDashboard = () => {
  return (
    <DashboardLayout role="Startup">
      <h1 className="text-4xl font-serif font-bold mb-6">Welcome, Founder</h1>
      <p className="text-lg text-gray-600 mb-4">Manage your startup and track sponsor interest.</p>

      {/* Startup Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-serif font-bold">Uploaded Products</h3>
          <p className="text-gray-600">You have <strong>3</strong> products listed.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-serif font-bold">Sponsor Interest</h3>
          <p className="text-gray-600">Your products have <strong>5 ratings</strong>.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-serif font-bold">AI Matched Sponsors</h3>
          <p className="text-gray-600">You have <strong>2 ideal sponsors</strong> interested.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FounderDashboard;
