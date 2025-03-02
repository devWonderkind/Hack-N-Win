import { useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../components/DashboardLayout";

const Chat = () => {
  const { id } = useParams(); // Get chat ID from URL
  const [messages, setMessages] = useState([
    { sender: "You", text: "Hello, excited to connect!" },
    { sender: "Lisa Smith", text: "Thanks! Let’s discuss your startup." },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { sender: "You", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <DashboardLayout role="Messaging">
      <h1 className="text-3xl font-serif font-bold mb-4">Chat</h1>

      {/* Chat Messages */}
      <div className="bg-white p-6 rounded-lg shadow max-w-lg mx-auto h-96 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 my-2 rounded ${msg.sender === "You" ? "bg-blue-200 self-end" : "bg-gray-200"}`}>
            <p className="font-bold">{msg.sender}:</p>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="flex mt-4 max-w-lg mx-auto">
        <input
          type="text"
          className="border p-2 w-full rounded"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 ml-2 rounded"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Chat;
