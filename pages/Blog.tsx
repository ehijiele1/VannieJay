tsx
import { useEffect, useState } from 'react';
import { getPosts, formatDate, Post } from '../lib/hashnode';

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const data = await getPosts(20);
      setPosts(data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 text-center">
        <p>Loading articles...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">VannieJay Insights</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Expert advice on Lagos real estate, diaspora investments, travel tips, and business growth.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                {post.coverImage?.url && (
                  <img 
                    src={post.coverImage.url} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {formatDate(post.publishedAt)} • {post.readTimeInMinutes} min read
                  </div>
                  <h2 className="font-bold text-xl mb-2 hover:text-blue-600">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.brief}</p>
                  <span className="text-blue-600 font-medium">Read Full Article →</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}