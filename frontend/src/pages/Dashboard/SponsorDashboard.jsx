import DashboardLayout from "../../components/DashboardLayout";

const SponsorDashboard = () => {
  return (
    <DashboardLayout role="Sponsor">
      <h1 className="text-4xl font-serif font-bold mb-6">Welcome, Sponsor</h1>
      <p className="text-lg text-gray-600 mb-4">Discover and support promising startups.</p>

      {/* Sponsor Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-serif font-bold">Startups Reviewed</h3>
          <p className="text-gray-600">You have reviewed <strong>10</strong> startups.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-serif font-bold">Tokens Sent</h3>
          <p className="text-gray-600">You have shown interest in <strong>4 startups</strong>.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-serif font-bold">AI Recommendations</h3>
          <p className="text-gray-600">You have <strong>3 AI-matched startups</strong>.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SponsorDashboard;
