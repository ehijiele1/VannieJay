
import React from 'react';
import { Building2, Users, Briefcase, ChevronRight, ExternalLink, Plane, Coins, Award, Map, Rocket } from 'lucide-react';
import { EXTERNAL_LINKS } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pb-20 space-y-24">
      {/* Banner Section */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1600" 
            alt="Expert Services Banner" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 italic">Expert Services</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Multidisciplinary support systems for real estate, global talent, and operational excellence.
          </p>
        </div>
      </section>

      {/* A. Real Estate Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100">
              Primary Pillar
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 italic flex items-center">
              <Building2 className="mr-4 text-blue-600" /> Real Estate Services
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              We bridge the gap between premium developments and discerning investors. Our services ensure that your entry into the property market is secure, profitable, and seamless.
            </p>
            <ul className="space-y-5">
              {[
                "Strategic property marketing and sales",
                "Personalized investor advisory and portfolio mapping",
                "Facilitation of flexible, interest-free payment plans",
                "Asset verification and documentation support"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-slate-700 text-lg">
                  <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-4 text-blue-600 shrink-0">
                    <ChevronRight size={16} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] -z-10 rotate-3"></div>
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" alt="Real Estate Service" className="rounded-[2.5rem] shadow-2xl relative z-10" />
          </div>
        </div>
      </section>

      {/* B. Human Capital & Talent Recruitment (Enhanced) */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-500/30">
              Workforce Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold italic mb-6">Human Capital Ecosystem</h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-xl font-light">
              Connecting high-performance talent with global opportunities across AI technology and real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Stream 1: Remote Real Estate Executive */}
            <div className="bg-white/5 backdrop-blur-md rounded-[3rem] p-10 border border-white/10 flex flex-col h-full group">
              <div className="w-16 h-16 bg-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center mb-8 border border-indigo-500/30">
                <Rocket size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6 italic">Remote Real Estate Executive</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Join our real estate arm as a competitive Sales Executive. Discover new prospects, manage high-net-worth relationships, and drive sustainable growth.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { icon: Coins, text: "Uncapped Commissions" },
                  { icon: Plane, text: "International Travels" },
                  { icon: Map, text: "Landed Properties" },
                  { icon: Award, text: "Expert Training" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <item.icon size={16} className="text-indigo-400" />
                    {item.text}
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <a
                  href={EXTERNAL_LINKS.realEstateCareers}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full justify-center px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all hover:scale-105 shadow-xl"
                >
                  Apply as Sales Executive <ExternalLink size={18} className="ml-2" />
                </a>
              </div>
            </div>

            {/* Stream 2: AI & Tech Professionals */}
            <div className="bg-white/5 backdrop-blur-md rounded-[3rem] p-10 border border-white/10 flex flex-col h-full group">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/30">
                <Users size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6 italic">AI & Tech (SME Careers)</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                VannieJay partners with global platforms to source professionals for specialized remote roles in AI content training, model testing, and quality evaluation.
              </p>

              <ul className="space-y-4 mb-10 text-slate-300">
                <li className="flex items-center"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></div> AI training content generation</li>
                <li className="flex items-center"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></div> Response and model evaluation</li>
                <li className="flex items-center"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></div> High-demand technical work</li>
              </ul>

              <div className="mt-auto">
                <a
                  href={EXTERNAL_LINKS.smeCareers}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full justify-center px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all hover:scale-105 shadow-xl"
                >
                  Apply to SME Careers <ExternalLink size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
          <p className="mt-12 text-center text-slate-500 italic text-sm">Opportunities available for both technical specialists and sales professionals.</p>
        </div>
      </section>

      {/* C. Business & Marketing Support */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-100">
              Strategic Support
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 italic flex items-center">
              <Briefcase className="mr-4 text-indigo-600" /> Business & Marketing
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Focused support for organizations within the Real Estate and HR sectors to optimize their operations and client engagement.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Lead Generation", text: "Optimized workflows for attracting qualified property and investment leads." },
                { title: "Communication Systems", text: "Structured sales and support communication protocols." },
                { title: "WhatsApp Marketing", text: "End-to-end setup for high-conversion mobile communication." },
                { title: "Follow-up Processes", text: "Automated and manual systems to ensure no lead is left cold." }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border-l-4 border-indigo-600">
                  <h4 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Business Support" className="rounded-[2.5rem] shadow-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
