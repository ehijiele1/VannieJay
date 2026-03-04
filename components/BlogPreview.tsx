'use client';

import { useEffect, useState } from 'react';

interface Post {
  id: string;
  title: string;
  brief: string;
  url: string;
  publishedAt: string;
  readTimeInMinutes: number;
  coverImage?: { url: string };
}

export default function BlogPreview() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/blog-posts');
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  if (posts.length === 0) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-NG', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest Insights</h2>
            <p className="text-gray-600">Expert advice on real estate and business</p>
          </div>
          <a href="/blog" className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            View All
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                {post.coverImage?.url ? (
                  <img src={post.coverImage.url} alt={post.title} className="w-full h-48 object-cover" />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-4xl">📝</span>
                  </div>
                )}
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {formatDate(post.publishedAt)} • {post.readTimeInMinutes} min read
                  </div>
                  <h3 className="font-bold text-lg mb-2 hover:text-blue-600">{post.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{post.brief}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}