'use client';

import { useParams } from 'next/navigation'; // use useParams from next/navigation
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const posts = [
  {
    id: '1',
    title: 'The Future of Web Development',
    summary: 'Exploring the latest trends in web development...',
    content: 'Here is the full content of the first blog post...',
  },
  {
    id: '2',
    title: 'Design Tips for Modern UI',
    summary: 'How to create sleek, modern designs...',
    content: 'Here is the full content of the second blog post...',
  },
  {
    id: '3',
    title: 'Node.js for Backend Development',
    summary: 'Learn why Node.js is a powerful choice for backend development.',
   content: 'Here is the full content of the third blog post...',
  },
  {
    id: '4',
    title: 'Next.js for Fullstack Development',
    summary: 'Why Next.js is a great choice for building fullstack web applications.',
     content: 'Here is the full content of the fourth blog post...',
  },
  {
    id: '5',
    title: 'CSS Grid vs Flexbox: When to Use What',
    summary: 'A comprehensive guide to understanding the differences between CSS Grid and Flexbox.',
     content: 'Here is the full content of the fifth blog post...',
  },
  {
    id: '6',
    title: 'Responsive Design Best Practices',
    summary: 'Tips and tricks to make your web pages responsive across all devices.',
     content: 'Here is the full content of the sixth blog post...',
  },
  {
    id: '7',
    title: 'Understanding TypeScript: A Beginner’s Guide',
    summary: 'An introduction to TypeScript and its benefits for JavaScript developers.',
    content: 'Here is the full content of the seventh blog post...',
  },
 
  {
    id: '8',
    title: 'React State Management',
    summary: 'Learn the various ways to manage state in React applications.',
     content: 'Here is the full content of the eighth blog post...',
  },
  {
    id: '9',
    title: 'Tailwind CSS Tips and Tricks',
    summary: 'Get more out of Tailwind CSS with these advanced tips and tricks.',
     content: 'Here is the full content of the ninth blog post...',
  },
];

const PostPage = () => {
  const { id } = useParams(); // get the post ID from the URL
  const post = posts.find((p) => p.id === id); // find the post by ID

  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  // Function add a comment
  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment('');
    }
  };

  if (!post) {
    return <div className="text-center py-10">Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-100 to-blue-50 p-10">
      <Navbar />
      <div className="container mx-auto mt-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>
        <p className="text-lg text-gray-700 mb-8">{post.content}</p>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>
          <div className="mb-4">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="border border-gray-300 p-3 w-full mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addComment}
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Add Comment
            </button>
          </div>

          <div>
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="border-t border-gray-200 pt-2">
                  <p className="text-gray-700">{comment}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No comments yet. Be the first to comment!</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostPage;
