
import React from 'react';
import { Landmark, Home, Construction, Wallet, Globe, ShieldCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { INVESTMENT_SOLUTIONS_BANNER, STRATEGIC_WEALTH_IMAGE } from '../constants';

const InvestmentSolutions: React.FC = () => {
  const categories = [
    {
      title: "Land Banking",
      desc: "Strategic acquisition of land in high-growth corridors. Hold and appreciate capital as urban expansion increases value.",
      benefit: "Highest historical appreciation rates.",
      icon: Landmark,
      for: "Long-term wealth builders."
    },
    {
      title: "Rental Income Investments",
      desc: "Acquire ready-to-let or near-completion residential units designed to provide consistent monthly or annual cash flow.",
      benefit: "Immediate passive income streams.",
      icon: Home,
      for: "Income-focused investors."
    },
    {
      title: "Build-to-Profit Opportunities",
      desc: "Participate in development-stage projects. Invest at the off-plan stage and exit at completion for significant returns.",
      benefit: "Substantial capital gains on completion.",
      icon: Construction,
      for: "Strategic growth seekers."
    },
    {
      title: "Installment-Based Ownership",
      desc: "Flexible payment structures allowing you to secure premium properties without immediate full capital outlay.",
      benefit: "Easier entry into luxury markets.",
      icon: Wallet,
      for: "First-time or disciplined investors."
    },
    {
      title: "Diaspora & International Options",
      desc: "Streamlined investment channels for the Nigerian diaspora and local investors looking to hedge in USD-denominated assets.",
      benefit: "Currency hedging and global portfolio diversification.",
      icon: Globe,
      for: "Global-minded investors."
    }
  ];

  return (
    <div className="pb-20">
      {/* Banner Section - Uses Page Specific Banner Image */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={INVESTMENT_SOLUTIONS_BANNER} 
            alt="Investment Solutions Banner" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 italic">Investment Solutions</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light">
            Strategic pathways designed to protect capital and accelerate wealth creation through verified real estate assets.
          </p>
        </div>
      </section>

      {/* Strategic Approach Section - Uses Wealth/Naira Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 italic">Our Strategic Approach</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We don't just sell properties; we facilitate wealth expansion. Our team analyzes market cycles, urban expansion patterns, and demographic shifts to curate opportunities that offer the best risk-adjusted returns.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600"><ShieldCheck size={24} /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Capital Protection</h4>
                  <p className="text-slate-500 text-sm">We focus on inflation-hedged assets in high-demand metropolitan hubs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600"><TrendingUp size={24} /></div>
                <div>
                  <h4 className="font-bold text-slate-900">High Yield Potential</h4>
                  <p className="text-slate-500 text-sm">Opportunities curated for double-digit annual appreciation and consistent cash flow.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src={STRATEGIC_WEALTH_IMAGE} 
              alt="Strategic Investment Assets" 
              className="rounded-[2.5rem] shadow-2xl border-8 border-white object-cover aspect-video"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-50 rounded-[3rem] my-10 border border-slate-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 italic">Investment Frameworks</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Choose a path aligned with your timeline and financial objectives.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <cat.icon size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{cat.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                {cat.desc}
              </p>
              <div className="space-y-3 pt-6 border-t border-slate-50">
                <p className="text-xs font-semibold text-slate-900"><span className="text-indigo-600 uppercase tracking-tighter mr-1">Benefit:</span> {cat.benefit}</p>
                <p className="text-xs font-semibold text-slate-900"><span className="text-indigo-600 uppercase tracking-tighter mr-1">Ideal For:</span> {cat.for}</p>
              </div>
            </div>
          ))}
          <div className="bg-slate-900 p-10 rounded-2xl text-white flex flex-col justify-center items-center text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Custom Advisory</h3>
            <p className="text-slate-400 mb-8 text-sm">Schedule a consultation with our advisory team to map out a tailored investment strategy.</p>
            <Link to="/contact" className="w-full px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestmentSolutions;
