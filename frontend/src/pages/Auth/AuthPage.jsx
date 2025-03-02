import { useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [role, setRole] = useState(null); // Track selected role

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6">
      {/* If No Role Selected, Show Role Selection */}
      {!role ? (
        <div className="text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Join as a Sponsor or Startup</h2>
          <p className="text-lg mb-4">Choose your role to continue:</p>
          <div className="flex gap-6">
            <button
              className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500"
              onClick={() => setRole("Sponsor")}
            >
              I am a Sponsor
            </button>
            <button
              className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500"
              onClick={() => setRole("Startup Founder")}
            >
              I am a Startup Founder
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center w-full max-w-md">
          <h2 className="text-3xl font-serif font-bold mb-4">
            {role} Login / Register
          </h2>
          <p className="text-lg mb-4">Select an option to continue:</p>

          <div className="flex flex-col gap-4">
            <Link
              to={`/login?role=${encodeURIComponent(role)}`}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700"
            >
              Login as {role}
            </Link>
            <Link
              to={`/register?role=${encodeURIComponent(role)}`}
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700"
            >
              Register as {role}
            </Link>
          </div>

          <button
            className="mt-6 text-gray-600 underline"
            onClick={() => setRole(null)}
          >
            Choose a different role
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
