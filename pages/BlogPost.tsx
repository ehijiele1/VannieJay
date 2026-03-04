import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug, Post, formatDate } from '../lib/hashnode';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPost() {
            if (!slug) return;
            const data = await getPostBySlug(slug);
            setPost(data);
            setLoading(false);
        }
        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 py-32 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-indigo-600 border-t-transparent"></div>
                <p className="mt-4 text-slate-600 font-medium">Loading article...</p>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-slate-50 py-32 text-center">
                <h1 className="text-2xl font-bold text-slate-900">Article not found</h1>
                <Link to="/blog" className="mt-4 text-indigo-600 hover:underline inline-block">Back to Blog</Link>
            </div>
        );
    }

    // Expert SEO: Structured Data (JSON-LD)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.brief,
        "image": post.coverImage?.url,
        "datePublished": post.publishedAt,
        "author": {
            "@type": "Organization",
            "name": "VannieJay Business Services"
        }
    };

    return (
        <div className="min-h-screen bg-white pt-32 pb-24">
            <Helmet>
                <title>{post.title} | VannieJay Insights</title>
                <meta name="description" content={post.brief} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.brief} />
                {post.coverImage?.url && <meta property="og:image" content={post.coverImage.url} />}
                <meta property="og:type" content="article" />
                <link rel="canonical" href={`https://vanniejay.com.ng/blog/${post.slug}`} />
            </Helmet>

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/blog" className="inline-flex items-center gap-2 text-indigo-600 font-medium mb-12 hover:gap-3 transition-all">
                    <ArrowLeft size={20} /> Back to Insights
                </Link>

                <article>
                    <header className="mb-12">
                        <div className="flex items-center gap-4 text-slate-500 text-sm mb-6">
                            <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full text-indigo-600 border border-slate-100">
                                <Calendar size={14} />
                                {formatDate(post.publishedAt)}
                            </div>
                            <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                                <Clock size={14} className="text-indigo-600" />
                                {post.readTimeInMinutes} min read
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
                            {post.title}
                        </h1>

                        {post.coverImage?.url && (
                            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 aspect-video">
                                <img
                                    src={post.coverImage.url}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                    </header>

                    <div
                        className="prose prose-indigo prose-lg max-w-none text-slate-700 leading-relaxed
              prose-headings:text-slate-900 prose-headings:font-bold
              prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-3xl prose-img:shadow-lg
              prose-strong:text-slate-900 prose-strong:font-bold"
                        dangerouslySetInnerHTML={{ __html: post.content?.html || '' }}
                    />

                    <footer className="mt-16 pt-16 border-t border-slate-100">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                                    VJ
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">VannieJay Business Services</div>
                                    <div className="text-sm text-slate-500">Expert Insights for the Global Investor</div>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    if (navigator.share) {
                                        navigator.share({
                                            title: post.title,
                                            url: window.location.href
                                        }).catch(() => { });
                                    }
                                }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold rounded-2xl transition-all border border-slate-100"
                            >
                                <Share2 size={20} className="text-indigo-600" /> Share Article
                            </button>
                        </div>
                    </footer>
                </article>
            </div>
        </div>
    );
}
