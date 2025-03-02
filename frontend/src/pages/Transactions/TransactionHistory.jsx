import DashboardLayout from "../../components/DashboardLayout";

const TransactionHistory = () => {
  // Dummy transaction data (Replace with real blockchain data later)
  const transactions = [
    { id: 1, sender: "TechVenture Capital", receiver: "AI-Powered Chatbot", amount: 50, date: "2024-02-20" },
    { id: 2, sender: "Startup Angels", receiver: "Blockchain Payment Gateway", amount: 30, date: "2024-02-18" },
    { id: 3, sender: "Fintech Investors", receiver: "E-commerce Analytics Tool", amount: 20, date: "2024-02-15" },
  ];

  return (
    <DashboardLayout role="Transactions">
      <h1 className="text-4xl font-serif font-bold mb-6">Transaction History</h1>
      <p className="text-lg text-gray-600 mb-4">Track all token transactions between sponsors and startups.</p>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Sender</th>
              <th className="p-3 text-left">Receiver</th>
              <th className="p-3 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">No transactions found.</td>
              </tr>
            ) : (
              transactions.map((tx) => (
                <tr key={tx.id} className="border-b">
                  <td className="p-3">{tx.date}</td>
                  <td className="p-3">{tx.sender}</td>
                  <td className="p-3">{tx.receiver}</td>
                  <td className="p-3 text-blue-600 font-bold">{tx.amount} Tokens</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default TransactionHistory;
