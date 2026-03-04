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

function BlogPreview() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog-posts')
      .then(r => r.json())
      .then(data => {
        setPosts(data.posts || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (posts.length === 0) return null;

  return (
    <section style={{ padding: '4rem 1rem', background: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          Latest Insights
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {posts.slice(0, 3).map(post => (
            <article key={post.id} style={{ background: 'white', borderRadius: '0.5rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{post.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
                {post.brief?.substring(0, 100)}...
              </p>
              <a href={post.url} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPreview;