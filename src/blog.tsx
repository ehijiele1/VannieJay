typescript
import { useEffect, useState } from 'react';
import { getPosts, formatDate, Post } from '../lib/hashnode';

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      const data = await getPosts(20);
      setPosts(data);
      setLoading(false);
    }
    loadPosts();
  }, []);

  if (loading) return <div className="py-16 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">VannieJay Insights</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="text-sm text-gray-500 mb-2">
                {formatDate(post.publishedAt)} • {post.readTimeInMinutes} min read
              </div>
              <h2 className="font-bold text-xl mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.brief}</p>
              <a href={post.url} target="_blank" className="text-blue-600">Read Article →</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}