import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 via-indigo-100 to-blue-50">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white p-12 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Welcome to Aleeza&apos;s Blog
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Dive into a world of insightful articles, tips, and stories. Stay updated with the latest posts and explore a range of topics curated to spark your interest and expand your knowledge.
          </p>
          <a 
            href="/blog" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            View Latest Posts
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
