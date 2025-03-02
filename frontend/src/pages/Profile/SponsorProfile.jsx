import DashboardLayout from "../../components/DashboardLayout";

const SponsorProfile = () => {
  // Dummy data (to be replaced with real API data later)
  const profile = {
    name: "TechVenture Capital",
    email: "contact@techventure.com",
    totalTokensSent: 200,
    supportedStartups: [
      { id: 1, name: "AI-Powered Chatbot", founder: "Alice Johnson", tokensReceived: 50 },
      { id: 2, name: "Blockchain Payment Gateway", founder: "John Doe", tokensReceived: 30 },
    ],
  };

  return (
    <DashboardLayout role="Sponsor">
      <h1 className="text-4xl font-serif font-bold mb-6">Sponsor Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
        <h2 className="text-3xl font-serif font-bold">{profile.name}</h2>
        <p className="text-gray-500">Email: {profile.email}</p>
        <p className="text-green-500 font-bold mt-2">Total Tokens Sent: {profile.totalTokensSent}</p>

        <h3 className="text-xl font-bold mt-4">Supported Startups</h3>
        <ul className="mt-2">
          {profile.supportedStartups.map((startup) => (
            <li key={startup.id} className="flex justify-between bg-gray-100 p-2 rounded mt-2">
              <span>
                {startup.name} (Founder: {startup.founder})
              </span>
              <span className="text-blue-600">{startup.tokensReceived} Tokens</span>
            </li>
          ))}
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default SponsorProfile;
