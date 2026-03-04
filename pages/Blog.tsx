import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, formatDate, Post } from '../lib/hashnode';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

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
            <div className="min-h-screen bg-slate-50 py-32 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-indigo-600 border-t-transparent"></div>
                <p className="mt-4 text-slate-600 font-medium">Fetching VannieJay Insights...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-24">
            <Helmet>
                <title>VannieJay Insights | Real Estate, Investment & Diaspora Growth Advice</title>
                <meta name="description" content="Expert analysis and practical advice on Lagos real estate, wealth protection strategies, and global talent solutions for the international investor." />
                <meta property="og:title" content="VannieJay Insights" />
                <meta property="og:description" content="Expert market analysis and strategic investment advice." />
                <meta name="keywords" content="Lagos Real Estate, Diaspora Investment, Nigeria Property, Wealth Protection, VannieJay" />
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">VannieJay Education Series</span>
                    <h1 className="text-5xl font-extrabold text-slate-900 mt-4 mb-6 italic tracking-tight">Market Intelligence</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Strategic analysis for the diaspora and global investor seeking secure growth in dynamic markets.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post) => (
                        <article key={post.id} className="group bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col">
                            <Link to={`/blog/${post.slug}`} className="block relative h-64 overflow-hidden">
                                {post.coverImage?.url ? (
                                    <img
                                        src={post.coverImage.url}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                        <span className="text-white text-4xl font-bold">VJ</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>

                            <div className="p-10 flex flex-col flex-1">
                                <div className="flex items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-6">
                                    <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full text-indigo-600 border border-slate-100">
                                        <Calendar size={12} />
                                        {formatDate(post.publishedAt)}
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                                        <Clock size={12} className="text-indigo-600" />
                                        {post.readTimeInMinutes} min read
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight line-clamp-2">
                                    <Link to={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="text-slate-600 text-base leading-relaxed mb-10 line-clamp-3 font-light">
                                    {post.brief}
                                </p>

                                <div className="mt-auto flex justify-between items-center">
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-indigo-600 font-bold group-hover:gap-4 transition-all"
                                    >
                                        Read Full Article <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}