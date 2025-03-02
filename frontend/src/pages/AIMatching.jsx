import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

const AIMatching = () => {
  const [userRole, setUserRole] = useState("Startup"); // Toggle between "Startup" and "Sponsor"

  // Dummy AI Matching Data
  const matchedSponsors = [
    { id: 1, name: "TechVenture Capital", interest: "AI, Blockchain", matchScore: "92%" },
    { id: 2, name: "Fintech Investors", interest: "Fintech, Payments", matchScore: "85%" },
    { id: 3, name: "Startup Angels", interest: "E-commerce, AI", matchScore: "78%" },
  ];

  const matchedStartups = [
    { id: 1, name: "AI-Powered Chatbot", founder: "Alice Johnson", matchScore: "95%" },
    { id: 2, name: "Blockchain Payment Gateway", founder: "John Doe", matchScore: "88%" },
    { id: 3, name: "E-commerce Analytics Tool", founder: "Lisa Smith", matchScore: "82%" },
  ];

  return (
    <DashboardLayout role={userRole}>
      <h1 className="text-4xl font-serif font-bold mb-6">AI-Powered Matching</h1>
      <p className="text-lg text-gray-600 mb-4">Get matched with the best {userRole === "Startup" ? "sponsors" : "startups"} based on AI analysis.</p>

      {/* Toggle between Startup & Sponsor View */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${userRole === "Startup" ? "bg-yellow-400 text-black" : "bg-gray-300"}`}
          onClick={() => setUserRole("Startup")}
        >
          View Matched Sponsors
        </button>
        <button
          className={`px-4 py-2 rounded ${userRole === "Sponsor" ? "bg-yellow-400 text-black" : "bg-gray-300"}`}
          onClick={() => setUserRole("Sponsor")}
        >
          View Matched Startups
        </button>
      </div>

      {/* Display AI Matched Sponsors for Startups */}
      {userRole === "Startup" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchedSponsors.map((sponsor) => (
            <div key={sponsor.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-serif font-bold">{sponsor.name}</h3>
              <p className="text-gray-600">Interests: {sponsor.interest}</p>
              <p className="text-green-500 font-bold mt-2">Match Score: {sponsor.matchScore}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Contact Sponsor
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Display AI Matched Startups for Sponsors */}
      {userRole === "Sponsor" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchedStartups.map((startup) => (
            <div key={startup.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-serif font-bold">{startup.name}</h3>
              <p className="text-gray-600">Founder: {startup.founder}</p>
              <p className="text-green-500 font-bold mt-2">Match Score: {startup.matchScore}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Contact Founder
              </button>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
};

export default AIMatching;
