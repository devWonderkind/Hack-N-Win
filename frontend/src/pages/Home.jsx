// import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import img from "../assets/images/heroImg1.png"
import Footer from "../components/Footer";
import { Upload, Star, MessageCircle, Sparkles } from "lucide-react"

const Home =() => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              SheLaunch
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="#" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link to="#" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Discover
            </Link>
            <Link to="#" className="text-sm font-medium hover:text-purple-600 transition-colors">
              How It Works
            </Link>
            <Link to="#" className="text-sm font-medium hover:text-purple-600 transition-colors">
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex px-4 py-2 border border-gray-300 rounded-md text-sm font-medium">
              Log In
            </button>
            <Link to="/auth" className="px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Empowering Women in{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Fintech
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              A women-friendly platform where female founders showcase their products and connect with verified sponsors
              through transparent, token-based support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/auth" className="w-50 px-6 py-3 rounded-md font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500">
                Join US
              </Link>
              {/* <button className="px-6 py-3 rounded-md font-medium border border-gray-300">Join as Sponsor</button> */}
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src={img}
              alt="Women entrepreneurs collaborating"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform provides innovative tools to connect female founders with the right sponsors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow border">
              <div className="mb-4">
                <Upload className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Product Upload</h3>
              <p className="text-gray-600">Upload and verify your products securely using IPFS blockchain technology</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border">
              <div className="mb-4">
                <Star className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Token-Based Rating</h3>
              <p className="text-gray-600">Sponsors show interest transparently through token-based support</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border">
              <div className="mb-4">
                <Sparkles className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Matching</h3>
              <p className="text-gray-600">Our AI connects startups with the right sponsors based on compatibility</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border">
              <div className="mb-4">
                <MessageCircle className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Direct Messaging</h3>
              <p className="text-gray-600">Enables direct collaboration between founders and interested sponsors</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process makes it easy for women entrepreneurs to connect with sponsors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-2">Upload Products</h3>
              <p className="text-gray-600">Women entrepreneurs upload product details securely stored on IPFS</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-2">Sponsor Rating</h3>
              <p className="text-gray-600">Sponsors browse, rate, and send tokens for promising ideas</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-2">AI Matching</h3>
              <p className="text-gray-600">AI matches startups with ideal sponsors based on compatibility</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-2">Collaboration</h3>
              <p className="text-gray-600">Sponsors can directly message startups for collaboration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our platform has helped women entrepreneurs secure funding and grow their businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src="https://placehold.co/100" alt="Founder" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Sarah Johnson</h3>
                  <p className="text-sm text-gray-500">FinTech Innovator</p>
                </div>
              </div>
              <p className="text-gray-600">
                "This platform helped me connect with the perfect sponsors who understood my vision. Within months, I
                secured funding and valuable mentorship."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src="https://placehold.co/100" alt="Founder" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Maya Patel</h3>
                  <p className="text-sm text-gray-500">Blockchain Developer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The AI matching feature connected me with sponsors who were specifically interested in blockchain
                solutions. The token-based rating gave me valuable feedback."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src="https://placehold.co/100" alt="Founder" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Jennifer Lee</h3>
                  <p className="text-sm text-gray-500">Financial Services</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As a woman in fintech, I faced many barriers. This platform provided a safe space to showcase my
                products and connect with sponsors who believed in my vision."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a female founder looking to showcase your products or a sponsor interested in supporting
            women in fintech, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-md font-medium bg-white text-purple-600 hover:bg-gray-100">
              Join as Founder
            </button>
            <button className="px-6 py-3 rounded-md font-medium border border-white text-white hover:bg-white/10">
              Join as Sponsor
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home;


