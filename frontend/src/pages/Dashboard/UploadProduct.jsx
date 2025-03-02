import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

const MyProducts = () => {
  // Dummy product data (we'll replace this with real data later)
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "AI-Powered Chatbot",
      description: "An intelligent chatbot powered by AI.",
      category: "AI",
      image: "https://via.placeholder.com/150",
      ipfsUrl: "https://ipfs.io/ipfs/QmDummyHash1",
    },
    {
      id: 2,
      name: "Blockchain Payment Gateway",
      description: "A secure blockchain-based payment system.",
      category: "Blockchain",
      image: "https://via.placeholder.com/150",
      ipfsUrl: "https://ipfs.io/ipfs/QmDummyHash2",
    },
  ]);

  const [editingProduct, setEditingProduct] = useState(null);

  // Handle Delete Product
  const handleDelete = (productId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      setProducts(products.filter((product) => product.id !== productId));
    }
  };

  // Handle Edit Product
  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  // Handle Save Edited Product
  const handleSave = () => {
    setProducts(products.map((p) => (p.id === editingProduct.id ? editingProduct : p)));
    setEditingProduct(null);
  };

  return (
    <DashboardLayout role="Startup">
      <h1 className="text-4xl font-serif font-bold mb-6">My Products</h1>
      <p className="text-lg text-gray-600 mb-4">View and manage your uploaded products.</p>

      {/* Edit Product Modal */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-2xl font-serif font-bold mb-4">Edit Product</h3>
            <input
              type="text"
              value={editingProduct.name}
              className="w-full border p-2 mb-2 rounded"
              onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
            />
            <textarea
              value={editingProduct.description}
              className="w-full border p-2 mb-2 rounded"
              onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2" onClick={handleSave}>
              Save Changes
            </button>
            <button className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500" onClick={() => setEditingProduct(null)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length === 0 ? (
          <p className="text-gray-500 text-lg">No products uploaded yet.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-serif font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-gray-500 text-sm mt-1">Category: {product.category}</p>
              <a
                href={product.ipfsUrl}
                target="_blank"
                className="block text-blue-600 underline mt-2"
                rel="noopener noreferrer"
              >
                View on IPFS
              </a>
              <div className="mt-4 flex justify-between">
                <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500" onClick={() => handleEdit(product)}>
                  Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={() => handleDelete(product.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyProducts;
