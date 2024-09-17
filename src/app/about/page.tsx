import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 via-indigo-100 to-blue-50">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-center font-bold text-5xl text-gray-800 mb-6">
            About Us
          </h1>
          <p className="text-center text-lg text-gray-600">
            Welcome to our blog! We share various interesting topics ranging from technology and design to personal growth and creative endeavors. Our goal is to provide valuable insights and engaging content that sparks curiosity and inspires our readers.
          </p>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
