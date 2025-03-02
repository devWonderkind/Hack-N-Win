import { Link } from "react-router-dom";
import DashboardLayout from "../../components/DashboardLayout";

const ChatList = () => {
  // Dummy Chat Data
  const chats = [
    { id: 1, name: "TechVenture Capital", lastMessage: "Looking forward to our call!", role: "Sponsor" },
    { id: 2, name: "Lisa Smith", lastMessage: "Thanks for your support!", role: "Startup" },
  ];

  return (
    <DashboardLayout role="Messaging">
      <h1 className="text-4xl font-serif font-bold mb-6">Messages</h1>
      <p className="text-lg text-gray-600 mb-4">Connect with sponsors and startups.</p>

      <div className="bg-white p-6 rounded-lg shadow">
        {chats.length === 0 ? (
          <p className="text-gray-500 text-lg">No messages yet.</p>
        ) : (
          chats.map((chat) => (
            <Link
              to={`/chat/${chat.id}`}
              key={chat.id}
              className="flex justify-between items-center p-4 border-b hover:bg-gray-100"
            >
              <div>
                <h3 className="text-xl font-serif font-bold">{chat.name}</h3>
                <p className="text-gray-600">{chat.lastMessage}</p>
              </div>
              <span className="text-sm text-gray-500">{chat.role}</span>
            </Link>
          ))
        )}
      </div>
    </DashboardLayout>
  );
};

export default ChatList;
