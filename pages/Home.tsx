
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle, MessageSquare, CheckCircle2 } from 'lucide-react';
import { MOCK_PRODUCTS, EXTERNAL_LINKS, SOCIAL_LINKS, BRAND_STATEMENT, STRATEGIC_WEALTH_IMAGE } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = MOCK_PRODUCTS.slice(0, 3);
  
  const pillars = [
    {
      title: "Real Estate & Property Sales",
      desc: "Direct access to high-yield residential and commercial assets in Nigeria and the USA, secured through partner-led advisory.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      path: "/services"
    },
    {
      title: "Investment Solutions",
      desc: "From land banking to build-to-profit schemes, we protect and grow your capital via verified, inflation-hedged instruments.",
      image: STRATEGIC_WEALTH_IMAGE,
      path: "/investment-solutions"
    },
    {
      title: "Talent & Business Support",
      desc: "Connecting global organizations with top-tier remote AI and tech professionals through strategic platform partnerships.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      path: "/services"
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000"
            alt="VannieJay Advisory Hero"
            className="w-full h-full object-cover brightness-[0.35]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Smart Real Estate & <span className="text-indigo-400">Investment</span> Solutions
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed font-light">
              {BRAND_STATEMENT}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-all shadow-xl hover:scale-[1.02]"
              >
                Explore Opportunities <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-lg transition-all border border-white/30"
              >
                Speak with an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Enterprise Multi-Service Firm</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4 italic">Our Core Ecosystem</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We operate at the critical intersection of property, capital, and global talent to deliver sustainable growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="group p-0 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={pillar.image} 
                  alt={pillar.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">{pillar.desc}</p>
                <Link to={pillar.path} className="text-indigo-600 font-bold inline-flex items-center hover:translate-x-1 transition-transform">
                  Read Detailed Services <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4 italic">Investment Products</h2>
              <p className="text-slate-600 text-lg">Current market-verified residential and commercial listings.</p>
            </div>
            <Link to="/products" className="px-8 py-3 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
              View All Listings
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Why Choose VannieJay - Text on Left, Brand Asset on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-8 italic leading-tight">Professional Integrity. <br/>Global Standards.</h2>
            <div className="space-y-8">
              {[
                { title: "Partner-Led Advisory", text: "Senior-level strategic oversight on every client engagement ensures accountability and expertise." },
                { title: "Direct Asset Access", text: "We facilitate streamlined paths to premium residential and land-based assets across two continents." },
                { title: "Referral-Driven Growth", text: "Our business scales through the trust of our partners. Referrals are always appreciated and rewarded." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="shrink-0">
                    <CheckCircle2 size={28} className="text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative order-1 lg:order-2">
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-600 rounded-3xl z-0"></div>
            <img
              src={STRATEGIC_WEALTH_IMAGE}
              alt="Strategic Investment Wealth"
              className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-video lg:aspect-square"
            />
          </div>
        </div>
      </section>

      {/* Podcast Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[2.5rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative min-h-[500px]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1200" 
              alt="Podcast Background" 
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="lg:w-2/3 relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-indigo-500/30">
              Insight & Analysis
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Investment Insights Podcast</h2>
            <p className="text-slate-400 text-xl leading-relaxed mb-0">
              Navigate the complexities of property marketing and international investment with our expert-led market briefings.
            </p>
          </div>
          <div className="relative z-10">
            <a
              href={EXTERNAL_LINKS.podcast}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center px-10 py-5 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all hover:scale-105 shadow-2xl"
            >
              <PlayCircle size={28} className="mr-3" />
              Listen on Spotify
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-24 bg-indigo-50 border-y border-indigo-100">
        <h2 className="text-4xl font-extrabold mb-6 italic">Ready to Secure Your Growth?</h2>
        <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto font-light">
          Partner with VannieJay for premium property solutions and strategic business support services.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl transition-all shadow-xl hover:translate-y-[-2px]"
          >
            <MessageSquare size={22} className="mr-3" />
            WhatsApp Inquiry
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all"
          >
            Contact Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
