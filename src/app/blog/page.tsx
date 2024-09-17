'use client'

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react'; 

// Blog Posts
interface Post {
  id: string;
  title: string;
  summary: string;
  image: string;
}

const posts: Post[] = [
  {
    id: '1',
    title: 'The Future of Web Development',
    summary: 'Exploring the latest trends in web development and what to expect in the coming years.',
    image: '/future.jpeg' ,
  },
  {
    id: '2',
    title: 'Design Tips for Modern UI',
    summary: 'How to create sleek, modern designs that captivate users.',
    image: '/img3.jpeg',
  },
  {
    id: '3',
    title: 'Node.js for Backend Development',
    summary: 'Learn why Node.js is a powerful choice for backend development.',
    image: '/first.jpeg',
  },
  {
    id: '4',
    title: 'Next.js for Fullstack Development',
    summary: 'Why Next.js is a great choice for building fullstack web applications.',
    image: '/A.jpeg',
  },
  {
    id: '5',
    title: 'CSS Grid vs Flexbox: When to Use What',
    summary: 'A comprehensive guide to understanding the differences between CSS Grid and Flexbox.',
    image: '/img1.jpeg',
  },
  {
    id: '6',
    title: 'Responsive Design Best Practices',
    summary: 'Tips and tricks to make your web pages responsive across all devices.',
    image: '/responsive.jpeg',
  },
  {
    id: '7',
    title: 'Understanding TypeScript: A Beginner’s Guide',
    summary: 'An introduction to TypeScript and its benefits for JavaScript developers.',
    image: '/img6.jpeg',
  },
  {
    id: '8',
    title: 'React State Management',
    summary: 'Learn the various ways to manage state in React applications.',
    image: '/pro.jpeg',
  },
  {
    id: '9',
    title: 'Tailwind CSS Tips and Tricks',
    summary: 'Get more out of Tailwind CSS with these advanced tips and tricks.',
    image: '/img.jpeg',
  },
];

const BlogPage = () => {
  const [visiblePosts, setVisiblePosts] = useState(6); 
  
  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6); // Increase the number of visible posts by 6
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-100 to-blue-50 p-10">
     
      <Navbar />
      
      <h1 className="text-center text-5xl font-bold mb-10 p-9">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, visiblePosts).map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image 
              src={post.image} 
              alt={post.title} 
              width={500} 
              height={300}
             
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.summary}</p>
              <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {visiblePosts < posts.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMorePosts}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
          >
            Load More
          </button>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default BlogPage;
