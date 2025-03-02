import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

const BrowseStartups = () => {
  // Dummy startup product data
  const [products, setProducts] = useState([
    { id: 1, name: "AI-Powered Chatbot", founder: "Alice Johnson", rating: 3, tokensSent: 0 },
    { id: 2, name: "Blockchain Payment Gateway", founder: "John Doe", rating: 4, tokensSent: 0 },
  ]);

  // Handle Rating
  const handleRating = (productId, rating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, rating } : product
      )
    );
  };

  // Handle Sending Tokens
  const handleSendTokens = (productId, amount) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, tokensSent: product.tokensSent + amount } : product
      )
    );
    alert(`Sent ${amount} tokens!`);
  };

  return (
    <DashboardLayout role="Sponsor">
      <h1 className="text-4xl font-serif font-bold mb-6">Browse Startups</h1>
      <p className="text-lg text-gray-600 mb-4">Rate and support promising startups.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-serif font-bold">{product.name}</h3>
            <p className="text-gray-600">Founder: {product.founder}</p>

            {/* Rating System */}
            <div className="flex mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-2xl cursor-pointer ${
                    star <= product.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  onClick={() => handleRating(product.id, star)}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-2">Rating: {product.rating} stars</p>

            {/* Token-Based Support */}
            <div className="mt-4">
              <p className="text-gray-500 text-sm">Tokens Sent: {product.tokensSent}</p>
              <button
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => handleSendTokens(product.id, 10)}
              >
                Send 10 Tokens
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default BrowseStartups;
