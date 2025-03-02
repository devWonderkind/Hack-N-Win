import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <nav className="bg-pink-400 text-white p-4 flex justify-between">
    //   <Link to="/" className="text-lg font-bold">SheLaunch</Link>
    //   <div>
    //     <Link to="/login" className="mx-2">Login</Link>
    //     <Link to="/register" className="mx-2">Register</Link>
    //   </div>
    // </nav>
     <nav className="flex justify-between items-center p-6">
     <h1 className="text-3xl font-serif font-bold">SheLaunch</h1>
     <div className="space-x-6 text-lg font-semibold">
       <Link to="/" className="text-black hover:text-gray-700">Home</Link>
       <Link to="/about" className="text-black hover:text-gray-700">How It Works</Link>
       <Link to="/startups" className="text-black hover:text-gray-700">Startups</Link>
       <Link to="/sponsors" className="text-black hover:text-gray-700">Sponsors</Link>
     </div>
     <Link to="/auth" className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-500">
       Join Now
     </Link>
   </nav>
  );
};

export default Navbar;
