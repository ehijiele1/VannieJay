
import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, BookOpen, Presentation, Headphones, ChevronRight } from 'lucide-react';
import { EXTERNAL_LINKS } from '../constants';

const Resources: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Banner Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1600" 
            alt="Knowledge & Resources Banner" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 italic">Knowledge & Resources</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
            Empowering your investment journey with data-driven insights and professional market analysis.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Podcast Focus */}
          <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 md:col-span-2">
            <div className="flex items-center mb-10">
              <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-600 mr-8 shadow-sm">
                <Headphones size={40} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 italic">Investment Insights Podcast</h2>
                <p className="text-indigo-600 font-bold uppercase tracking-widest text-xs mt-2">Intelligence for the Modern Investor</p>
              </div>
            </div>
            <p className="text-slate-600 mb-12 leading-relaxed text-xl font-light">
              Our flagship audio series hosted on Anchor.fm. We deep-dive into market trends, investor psychology, and tactical advice for wealth preservation in Nigeria and global markets.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between p-10 bg-slate-900 rounded-[2rem] border border-slate-800 gap-8 shadow-2xl">
              <div className="flex items-center">
                 <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mr-6">
                    <PlayCircle className="text-white" size={32} />
                 </div>
                 <div className="text-white">
                    <h4 className="font-bold text-lg italic">Stream Now</h4>
                    <p className="text-sm text-slate-400">Available on Spotify</p>
                 </div>
              </div>
              <a
                href={EXTERNAL_LINKS.podcast}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all hover:scale-105 shadow-xl flex items-center justify-center"
              >
                Listen on Spotify <ChevronRight size={20} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Educational Future */}
          <div className="bg-indigo-900 p-12 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <BookOpen size={200} />
             </div>
             <BookOpen className="text-indigo-300 mb-8" size={40} />
             <h2 className="text-3xl font-bold mb-6 italic leading-tight">Educational<br/>Portal</h2>
             <p className="text-indigo-200 text-lg leading-relaxed mb-12 font-light">
               Coming soon: Comprehensive whitepapers on property law, investment models, and verification checklists.
             </p>
             <div className="inline-flex items-center px-5 py-2 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-widest border border-white/20 backdrop-blur-sm">
               Under Development
             </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
           <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100 flex items-start gap-8 hover:border-indigo-200 transition-colors">
              <Presentation className="text-indigo-600 shrink-0" size={40} />
              <div>
                <h3 className="text-2xl font-bold mb-4 italic text-slate-900">Webinars & Workshops</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                  Quarterly technical sessions for active investors focusing on specific market opportunities and legal frameworks.
                </p>
                <Link to="/contact" className="inline-flex items-center text-sm font-bold text-indigo-600 bg-indigo-50 px-6 py-3 rounded-xl hover:bg-indigo-100 transition-colors">
                  Join Waitlist
                </Link>
              </div>
           </div>
           <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100 flex items-start gap-8 hover:border-indigo-200 transition-colors">
              <PlayCircle className="text-indigo-600 shrink-0" size={40} />
              <div>
                <h3 className="text-2xl font-bold mb-4 italic text-slate-900">Visual Property Guides</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                  Immersive walkthroughs of our featured properties and international investment pathways.
                </p>
                <Link to="/contact" className="inline-flex items-center text-sm font-bold text-indigo-600 hover:underline">Request Access</Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
