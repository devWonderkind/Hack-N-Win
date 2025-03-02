import DashboardLayout from "../../components/DashboardLayout";

const StartupProfile = () => {
  // Dummy data (to be replaced with real API data later)
  const profile = {
    name: "Alice Johnson",
    startup: "AI-Powered Chatbot",
    email: "alice@startup.com",
    totalTokensReceived: 120,
    interestedSponsors: [
      { id: 1, name: "TechVenture Capital", tokensSent: 50 },
      { id: 2, name: "Startup Angels", tokensSent: 30 },
    ],
  };

  return (
    <DashboardLayout role="Startup">
      <h1 className="text-4xl font-serif font-bold mb-6">Startup Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
        <h2 className="text-3xl font-serif font-bold">{profile.name}</h2>
        <p className="text-lg text-gray-600">{profile.startup}</p>
        <p className="text-gray-500">Email: {profile.email}</p>
        <p className="text-green-500 font-bold mt-2">Total Tokens Received: {profile.totalTokensReceived}</p>

        <h3 className="text-xl font-bold mt-4">Interested Sponsors</h3>
        <ul className="mt-2">
          {profile.interestedSponsors.map((sponsor) => (
            <li key={sponsor.id} className="flex justify-between bg-gray-100 p-2 rounded mt-2">
              <span>{sponsor.name}</span>
              <span className="text-blue-600">{sponsor.tokensSent} Tokens</span>
            </li>
          ))}
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default StartupProfile;
