import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { formatDate } from '../lib/hashnode';

interface Post {
  id: string;
  title: string;
  brief: string;
  slug: string;
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

  if (loading || posts.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">VannieJay Insights</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-2 italic focus-visible:outline-none">Expert Market Perspectives</h2>
            <p className="text-slate-600 text-lg mt-4 max-w-2xl">
              Latest advice on real estate, wealth protection, and diaspora business growth.
            </p>
          </div>
          <Link
            to="/blog"
            className="px-8 py-3 bg-indigo-50 text-indigo-600 font-bold rounded-xl border border-indigo-100 hover:bg-indigo-100 transition-all shadow-sm"
          >
            Read All Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.slice(0, 3).map(post => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <Link to={`/blog/${post.slug}`} className="block relative h-52 overflow-hidden">
                {post.coverImage?.url ? (
                  <img
                    src={post.coverImage.url}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                    <span className="text-4xl text-slate-400">VJ</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-slate-500 text-xs font-medium mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-indigo-600" />
                    {formatDate(post.publishedAt)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-indigo-600" />
                    {post.readTimeInMinutes} min read
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-slate-600 text-[15px] leading-relaxed mb-8 line-clamp-3">
                  {post.brief}
                </p>

                <div className="mt-auto">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-indigo-600 font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Read Full Story <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPreview;